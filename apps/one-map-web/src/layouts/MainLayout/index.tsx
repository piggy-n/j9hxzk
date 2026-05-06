import styles from './style.module.scss';

export const MainLayout = defineComponent({
  name: 'MainLayout',
  setup(_, { slots }) {
    return () => (
      <div class={styles.mainLayout}>
        <header class={styles.header}>Header</header>
        <aside class={styles.sidebar}>Sidebar</aside>
        <main class={styles.content}>{slots.default?.()}</main>
      </div>
    );
  },
});
