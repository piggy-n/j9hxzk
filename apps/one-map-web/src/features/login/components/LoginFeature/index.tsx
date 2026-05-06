import styles from './style.module.scss';

export default defineComponent({
  name: 'LoginFeature',
  setup() {
    return () => (
      <section class={styles.loginFeature}>
        <header class={styles.header}>
          <h1>调查监测现状图</h1>
          <p>WELCOME!</p>
        </header>
        <div class={styles.body}>
          <div class={styles.field} />
          <div class={styles.field} />
          <div class={styles.options}>
            <span class={styles.option} />
            <span class={styles.option} />
          </div>
          <div class={styles.actions}>
            <div class={styles.button} />
          </div>
        </div>
      </section>
    );
  },
});
