import { FormSchema } from '/@/components/Form';
import { useI18n } from '/@/hooks/web/useI18n';
const { t } = useI18n();

export const formSchema: FormSchema[] = [
  {
    field: 'passwordNew',
    label: t('account.changePassword.passwordNew'),
    component: 'StrengthMeter',
    componentProps: {
      placeholder: t('account.changePassword.passwordNew'),
    },
    colProps: {
      span: 20,
    },
    rules: [
      {
        required: true,
        message: t('account.changePassword.passwordNewRule'),
      },
    ],
  },
  {
    field: 'confirmPassword',
    label: t('sys.login.confirmPassword'),
    component: 'InputPassword',
    colProps: {
      span: 20,
    },
    dynamicRules: ({ values }) => {
      return [
        {
          required: true,
          validator: (_, value) => {
            if (!value) {
              return Promise.reject(t('sys.login.passwordPlaceholder'));
            }
            if (value !== values.passwordNew) {
              return Promise.reject(t('sys.login.diffPwd'));
            }
            return Promise.resolve();
          },
        },
      ];
    },
  },
];
