import { FormSchema } from '/@/components/Form';
import { useResourceStore } from '/@/store/modules/resource';
import { useI18n } from '/@/hooks/web/useI18n';
const { t } = useI18n();

export const step1Schemas: FormSchema[] = [
  {
    field: 'name',
    component: 'Input',
    label: t('volume.create.name'),
    colProps: {
      span: 20,
    },
    defaultValue: 'my-volume',
    rules: [
      {
        required: true,
        validator: async (_rule, value) => {
          const reg = new RegExp(
            `^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$`
          );
          if (value === '') return Promise.reject(t('common.requiredText'));

          if (useResourceStore().getPvcList.includes(value))
            return Promise.reject(t('volume.create.nameRuleMessage'));

          if (!reg.test(value)) return Promise.reject(t('volume.create.nameRegexMessage'));

          return Promise.resolve();
        },
        trigger: 'change',
      },
    ],
  },
  {
    field: 'accessModes',
    component: 'Select',
    label: t('volume.create.accessModes'),
    required: true,
    colProps: {
      span: 20,
    },
    defaultValue: 'ReadWriteOnce',
    componentProps: {
      options: [
        {
          label: 'ReadWriteOnce',
          value: 'ReadWriteOnce',
          key: 'ReadWriteOnce',
        },
      ],
    },
  },
  {
    field: 'storage',
    component: 'InputNumber',
    label: t('volume.create.storage'),
    required: true,
    defaultValue: 1,
    colProps: {
      span: 9,
    },
    componentProps: {
      min: 0.1,
      step: 0.1,
    },
  },
  {
    field: 'si',
    component: 'Select',
    label: '',
    required: true,
    colProps: {
      span: 8,
    },
    defaultValue: 'Gi',
    componentProps: {
      options: [
        {
          label: 'Ki',
          value: 'Ki',
          key: 'Ki',
        },
        {
          label: 'Mi',
          value: 'Mi',
          key: 'Mi',
        },
        {
          label: 'Gi',
          value: 'Gi',
          key: 'Gi',
        },
        {
          label: 'Ti',
          value: 'Ti',
          key: 'Ti',
        },
        {
          label: 'Pi',
          value: 'Pi',
          key: 'Pi',
        },
        {
          label: 'Ei',
          value: 'Ei',
          key: 'Ei',
        },
      ],
    },
  },
];
