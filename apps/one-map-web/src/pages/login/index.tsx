import { LoginFeature } from '@/features/login';
import { LoginLayout } from '@/layouts/LoginLayout';

import styles from './style.module.scss';

export const LoginPage = defineComponent({
  name: 'LoginPage',
  setup() {
    return () => (
      <div class={styles.page}>
        <LoginLayout>
          <LoginFeature />
        </LoginLayout>
      </div>
    );
  },
});
