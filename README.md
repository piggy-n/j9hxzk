# j9hxzk

pnpm workspace monorepo with Turbo, a Vue web app, and a shared `map-core` package.

## Tooling

- Node.js `24.15.0`
- pnpm `10.33.2`

## Workspace

- `apps/one-map-web`: frontend app
- `packages/map-core`: shared TypeScript package

## Scripts

- `pnpm dev`: start workspace dev tasks
- `pnpm lint`: run ESLint
- `pnpm typecheck`: run TypeScript checks across the workspace
- `pnpm build`: build all packages
- `pnpm check`: run lint, typecheck, and build in order
- `pnpm test`: run unit tests across the workspace
- `pnpm dev:web`: start the web app only
- `pnpm preview`: preview `one-map-web`

## Environment

Use `.env.example` as the starting point for local environment files.
