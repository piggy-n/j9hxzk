import { Lock, User } from '@element-plus/icons-vue';
import { ElButton, ElCheckbox, ElForm, ElFormItem, ElInput } from 'element-plus';
import 'element-plus/es/components/button/style/css';
import 'element-plus/es/components/checkbox/style/css';
import 'element-plus/es/components/form-item/style/css';
import 'element-plus/es/components/form/style/css';
import 'element-plus/es/components/input/style/css';

import styles from './style.module.scss';

export default defineComponent({
  name: 'LoginFeature',
  setup() {
    const form = reactive({
      account: '',
      password: '',
      rememberAccount: true,
      rememberPassword: true,
    });

    return () => (
      <section class={styles.loginFeature}>
        <header class={styles.header}>
          <h1>调查监测现状图</h1>
          <p>WELCOME!</p>
        </header>
        <ElForm class={styles.form} labelPosition="top" model={form}>
          <ElFormItem class={styles.formItem}>
            <ElInput
              class={styles.input}
              clearable
              placeholder="请输入账号"
              prefix-icon={User}
              size="large"
              v-model={form.account}
            />
          </ElFormItem>
          <ElFormItem class={styles.formItem}>
            <ElInput
              class={styles.input}
              placeholder="请输入密码"
              prefix-icon={Lock}
              show-password
              size="large"
              type="password"
              v-model={form.password}
            />
          </ElFormItem>
          <div class={styles.options}>
            <ElCheckbox class={styles.checkbox} v-model={form.rememberAccount}>
              记住账号
            </ElCheckbox>
            <ElCheckbox class={styles.checkbox} v-model={form.rememberPassword}>
              记住密码
            </ElCheckbox>
          </div>
          <div class={styles.actions}>
            <ElButton class={styles.submitButton} nativeType="button" size="large" type="primary">
              <span class={styles.submitLabel}>登录</span>
            </ElButton>
          </div>
        </ElForm>
      </section>
    );
  },
});
