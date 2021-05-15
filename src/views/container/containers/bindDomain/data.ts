import { FormSchema } from '/@/components/Form';
import { useUserStore } from '/@/store/modules/user';
import { useResourceStore } from '/@/store/modules/resource';
import { useGlobSetting } from '/@/hooks/setting';
import { useI18n } from '/@/hooks/web/useI18n';
const { t } = useI18n();

export const step1Schemas: FormSchema[] = [
  {
    field: 'podName',
    component: 'Input',
    label: t('container.bindDomain.name'),
    required: true,
    colProps: {
      span: 20,
    },
    componentProps: {
      disabled: true,
    },
  },
  {
    field: 'subDomain',
    component: 'Input',
    label: t('container.bindDomain.subdomain'),
    colProps: {
      span: 20,
    },
    renderComponentContent: () => {
      return {
        suffix: () =>
          `.${useUserStore().getUserInfo.realName.toLowerCase()}.${useGlobSetting().domain}`,
      };
    },
    rules: [
      {
        required: true,
        validator: async (_rule, value) => {
          const reg = new RegExp(`^(?![0-9]+$)(?!.*-$)(?!-)[a-z0-9-]{1,63}$`);
          if (value === '') return Promise.reject(t('common.requiredText'));

          if (
            useResourceStore()
              .getIngressList.map((ingress) => ingress.sub_domain)
              .includes(value)
          )
            return Promise.reject(t('container.bindDomain.subdomainRuleMessage'));

          if (value.length > 63)
            return Promise.reject(t('container.bindDomain.subdomainLengthMessage'));

          if (!reg.test(value))
            return Promise.reject(t('container.bindDomain.subdomainRegexMessage'));

          return Promise.resolve();
        },
        trigger: 'change',
      },
    ],
  },
  {
    field: 'allowCors',
    component: 'RadioButtonGroup',
    label: t('container.bindDomain.allowCors'),
    defaultValue: 'false',
    componentProps: {
      options: [
        {
          label: t('common.yes'),
          value: 'true',
        },
        {
          label: t('common.no'),
          value: 'false',
        },
      ],
    },
  },
];
