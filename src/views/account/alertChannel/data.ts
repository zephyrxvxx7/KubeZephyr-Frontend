import type { FormSchema } from '/@/components/Form/index';

import { useI18n } from '/@/hooks/web/useI18n';
const { t } = useI18n();

export const editSchemas: FormSchema[] = [
  {
    field: 'name',
    component: 'Input',
    label: t('admin.alertChannel.manage.name'),
    required: true,
    colProps: {
      span: 17,
    },
    componentProps: {
      disabled: true,
    },
  },
  {
    field: 'isDefault',
    component: 'RadioButtonGroup',
    label: t('admin.alertChannel.manage.isDefault'),
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
      disabled: true,
    },
  },
  {
    field: 'disableResolveMessage',
    component: 'RadioButtonGroup',
    label: t('admin.alertChannel.manage.disableResolveMessage'),
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
  {
    field: 'sendReminder',
    component: 'RadioButtonGroup',
    label: t('admin.alertChannel.manage.sendReminder'),
    componentProps: {
      disabled: true,
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
  {
    field: 'uploadImage',
    component: 'RadioButtonGroup',
    label: t('admin.alertChannel.manage.uploadImage'),
    componentProps: {
      disabled: true,
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
