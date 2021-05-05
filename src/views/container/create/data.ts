import { FormSchema } from '/@/components/Form';
import { useResourceStore } from '/@/store/modules/resource';
import { useI18n } from '/@/hooks/web/useI18n';
const { t } = useI18n();

export const step1Schemas: FormSchema[] = [
  {
    field: 'name',
    component: 'Input',
    label: t('container.create.name'),
    required: true,
    defaultValue: 'kubezephyr_backend',
  },
  {
    field: 'image',
    component: 'Input',
    label: t('container.create.image'),
    required: true,
    defaultValue: 'zephyrxvxx7/kubezephyr_backend',
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
    label: t('container.create.cpuLimits'),
    defaultValue: 0.5,
    suffix: 'core',
  },
  {
    field: 'limit_memory',
    component: 'InputNumber',
    label: t('container.create.memoryLimits'),
    defaultValue: 256,
    suffix: 'Mi',
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
