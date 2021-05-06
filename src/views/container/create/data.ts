import { FormSchema } from '/@/components/Form';
import { useResourceStore } from '/@/store/modules/resource';
import { useI18n } from '/@/hooks/web/useI18n';
const { t } = useI18n();

export const step1Schemas: FormSchema[] = [
  {
    field: 'name',
    component: 'Input',
    label: t('container.create.name'),
    defaultValue: 'kubezephyr-backend',
    rules: [
      {
        required: true,
        validator: async (_rule, value) => {
          const reg = new RegExp(
            `^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$`
          );
          if (value === '') return Promise.reject(t('common.requiredText'));

          if (useResourceStore().getPodList.includes(value))
            return Promise.reject(t('container.create.nameRuleMessage'));

          if (!reg.test(value)) return Promise.reject(t('container.create.nameRegexMessage'));

          return Promise.resolve();
        },
        trigger: 'change',
      },
    ],
  },
  {
    field: 'image',
    component: 'Input',
    label: t('container.create.image'),
    required: true,
    defaultValue: 'zephyrxvxx7/kubezephyr_backend',
    slot: 'image',
  },
  {
    field: 'port',
    component: 'InputNumber',
    label: t('container.create.port'),
    required: true,
    defaultValue: 80,
  },
  {
    field: 'limit_cpu',
    component: 'InputNumber',
    label: t('container.create.cpuLimit'),
    defaultValue: 0.5,
    suffix: 'core',
    componentProps: {
      min: 0.1,
      step: 0.1,
    },
  },
  {
    field: 'limit_memory',
    component: 'InputNumber',
    label: t('container.create.memoryLimit'),
    defaultValue: 256,
    suffix: 'Mi',
    componentProps: {
      min: 1,
    },
  },
];

export const step1PvcSchemas: FormSchema[] = [
  {
    field: 'pvc0',
    component: 'ApiSelect',
    label: t('container.create.volume'),
    colProps: {
      span: 8,
    },
    componentProps: {
      api: useResourceStore().getPvcOptionsFromAPI,
    },
  },
  {
    field: 'mount0',
    component: 'Input',
    label: t('container.create.volumeMountPath'),
    colProps: {
      span: 12,
    },
    dynamicRules: ({ values }) => {
      return values.pvc0 ? [{ required: true, message: t('common.requiredText') }] : [];
    },
    dynamicDisabled: ({ values }) => {
      return !values.pvc0;
    },
  },
  {
    field: '0',
    component: 'Input',
    label: ' ',
    colProps: {
      span: 1,
    },
    slot: 'add',
  },
];

export const step2EnvSchemas: FormSchema[] = [
  {
    field: 'key0',
    component: 'Input',
    label: 'Key',
    colProps: {
      span: 10,
    },
  },
  {
    field: 'value0',
    component: 'Input',
    label: 'Value',
    colProps: {
      span: 10,
    },
    dynamicRules: ({ values }) => {
      return values.key0 ? [{ required: true, message: t('common.requiredText') }] : [];
    },
    dynamicDisabled: ({ values }) => {
      return !values.key0;
    },
  },
  {
    field: '0',
    component: 'Input',
    label: ' ',
    colProps: {
      span: 1,
    },
    slot: 'add',
  },
];
