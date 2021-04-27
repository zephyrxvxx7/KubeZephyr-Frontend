import { FormSchema } from '/@/components/Form';
import { useResourceStore } from '/@/store/modules/resource';

export const step1Schemas: FormSchema[] = [
  {
    field: 'name',
    component: 'Input',
    label: '名稱',
    required: true,
    defaultValue: 'kubezephyr_backend',
  },
  {
    field: 'image',
    component: 'Input',
    label: '映像檔',
    required: true,
    defaultValue: 'zephyrxvxx7/kubezephyr_backend',
  },
  {
    field: 'port',
    component: 'InputNumber',
    label: '通訊埠',
    required: true,
    defaultValue: 80,
  },
  {
    field: 'limit_cpu',
    component: 'InputNumber',
    label: '處理器資源上限',
    defaultValue: 0.5,
    suffix: 'core',
  },
  {
    field: 'limit_memory',
    component: 'InputNumber',
    label: '記憶體資源上限',
    defaultValue: 256,
    suffix: 'Mi',
  },
];

export const step1PvcSchemas: FormSchema[] = [
  {
    field: 'pvc0',
    component: 'ApiSelect',
    label: 'Volume',
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
    label: 'Mount Path',
    colProps: {
      span: 12,
    },
    dynamicRules: ({ values }) => {
      return values.pvc0 ? [{ required: true, message: '必填' }] : [];
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
      return values.key0 ? [{ required: true, message: '必填' }] : [];
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
