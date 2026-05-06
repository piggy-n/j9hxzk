import backgroundImage from '@/assets/images/login/background.webp';
import convertedImage from '@/assets/images/login/converted.webp';

import styles from './style.module.scss';

export const LoginLayout = defineComponent({
  name: 'LoginLayout',
  setup(_, { slots }) {
    return () => (
      <div class={styles.loginLayout}>
        <img
          alt=""
          aria-hidden="true"
          class={styles.layoutBackground}
          decoding="async"
          draggable={false}
          src={backgroundImage}
          srcset={`${backgroundImage} 2x`}
        />
        <div aria-hidden="true" class={styles.scanLight} />
        <div class={styles.visual}>
          <img
            alt="登录页主视觉"
            class={styles.visualImage}
            decoding="async"
            draggable={false}
            fetchpriority="high"
            src={convertedImage}
            srcset={`${convertedImage} 2x`}
          />
        </div>
        <div class={styles.content}>
          <div class={styles.contentInner}>{slots.default?.()}</div>
        </div>
      </div>
    );
  },
});
