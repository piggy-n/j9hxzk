import { promises as fs } from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const ignoredDirs = new Set([
  '.git',
  '.husky',
  '.idea',
  '.turbo',
  'dist',
  'node_modules',
]);
const ignoredFiles = new Set([
  'package-lock.json',
]);
const packageJsonKeyOrder = [
  'name',
  'version',
  'private',
  'description',
  'keywords',
  'homepage',
  'bugs',
  'repository',
  'license',
  'author',
  'type',
  'packageManager',
  'engines',
  'sideEffects',
  'files',
  'main',
  'module',
  'types',
  'exports',
  'bin',
  'scripts',
  'lint-staged',
  'dependencies',
  'devDependencies',
  'peerDependencies',
  'optionalDependencies',
];

const collator = new Intl.Collator('en', { numeric: true, sensitivity: 'base' });
const touchedFiles = [];

async function main() {
  await walk(rootDir);

  if (touchedFiles.length === 0) {
    console.log('No JSON files needed sorting.');
    return;
  }

  for (const file of touchedFiles) {
    console.log(path.relative(rootDir, file));
  }
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (ignoredDirs.has(entry.name)) {
        continue;
      }

      await walk(fullPath);
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    if (path.extname(entry.name) !== '.json') {
      continue;
    }

    if (ignoredFiles.has(entry.name)) {
      continue;
    }

    await sortJsonFile(fullPath);
  }
}

async function sortJsonFile(filePath) {
  const raw = await fs.readFile(filePath, 'utf8');
  const parsed = JSON.parse(raw);
  const sorted = sortValue(parsed, path.basename(filePath) === 'package.json');
  const next = `${JSON.stringify(sorted, null, 2)}\n`;

  if (raw === next) {
    return;
  }

  await fs.writeFile(filePath, next, 'utf8');
  touchedFiles.push(filePath);
}

function sortValue(value, isPackageJson = false) {
  if (Array.isArray(value)) {
    return value.map((item) => sortValue(item, false));
  }

  if (!value || typeof value !== 'object') {
    return value;
  }

  const entries = Object.entries(value).map(([key, child]) => [
    key,
    sortValue(child, false),
  ]);

  const sortedEntries = isPackageJson
    ? sortPackageJsonEntries(entries)
    : entries.sort(([left], [right]) => collator.compare(left, right));

  return Object.fromEntries(sortedEntries);
}

function sortPackageJsonEntries(entries) {
  const orderedKeys = new Map(packageJsonKeyOrder.map((key, index) => [key, index]));

  return entries.sort(([left], [right]) => {
    const leftRank = orderedKeys.get(left);
    const rightRank = orderedKeys.get(right);

    if (leftRank !== undefined && rightRank !== undefined) {
      return leftRank - rightRank;
    }

    if (leftRank !== undefined) {
      return -1;
    }

    if (rightRank !== undefined) {
      return 1;
    }

    return collator.compare(left, right);
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
