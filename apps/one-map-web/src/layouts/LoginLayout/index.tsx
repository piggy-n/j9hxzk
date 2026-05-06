import styles from './style.module.scss';

export const LoginLayout = defineComponent({
  name: 'LoginLayout',
  setup(_, { slots }) {
    return () => (
      <div class={styles.loginLayout}>
        <div class={styles.visual} />
        <div class={styles.content}>{slots.default?.()}</div>
      </div>
    );
  },
});
