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
          <div class={styles.field}>账号输入区</div>
          <div class={styles.field}>密码输入区</div>
          <div class={styles.options}>记住账号 / 记住密码</div>
          <div class={styles.actions}>登录按钮区</div>
        </div>
      </section>
    );
  },
});
