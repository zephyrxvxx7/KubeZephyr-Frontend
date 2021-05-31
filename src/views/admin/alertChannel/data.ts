import type { BasicColumn } from '/@/components/Table/src/types/table';
import type { FormSchema } from '/@/components/Form/index';
import type { BasicFetchResult } from '/@/api/model/baseModel';
import type { AlertChannelInResponse } from '/@/api/model/alertChannelModel';

import { getAlertChannelsAPI } from '/@/api/admin';

import { useI18n } from '/@/hooks/web/useI18n';
const { t } = useI18n();

const renderContent = ({ text }: { text: boolean }) => {
  const obj: any = {
    children: String(text),
    attrs: {},
  };
  return obj;
};

export const alertChannelColumns: BasicColumn[] = [
  {
    title: 'UID',
    dataIndex: 'uid',
    defaultHidden: true,
  },
  {
    title: t('admin.alertChannel.manage.name'),
    dataIndex: 'name',
    width: 250,
  },
  {
    // title: t('admin.alertChannel.manage.isDefault'),
    dataIndex: 'isDefault',
    slots: { title: 'customIsDefault' },
    customRender: renderContent,
  },
  {
    title: t('admin.alertChannel.manage.sendReminder'),
    dataIndex: 'sendReminder',
    defaultHidden: true,
    customRender: renderContent,
  },
  {
    // title: t('admin.alertChannel.manage.disableResolveMessage'),
    dataIndex: 'disableResolveMessage',
    slots: { title: 'customDisableResolveMessage' },
    customRender: renderContent,
  },
  {
    title: t('admin.alertChannel.manage.uploadImage'),
    dataIndex: 'uploadImage',
    defaultHidden: true,
    customRender: renderContent,
  },
  {
    title: t('admin.alertChannel.manage.addresses'),
    dataIndex: 'addresses',
    defaultHidden: true,
  },
];

export const editSchemas: FormSchema[] = [
  {
    field: 'uid',
    component: 'Input',
    label: 'UID',
    required: true,
    colProps: {
      span: 23,
    },
    componentProps: {
      disabled: true,
    },
  },
  {
    field: 'name',
    component: 'Input',
    label: t('admin.alertChannel.manage.name'),
    required: true,
    colProps: {
      span: 23,
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

export async function alertChannelListApi(): Promise<BasicFetchResult<AlertChannelInResponse[]>> {
  const { alert_channel } = await getAlertChannelsAPI();

  return {
    items: alert_channel,
    total: alert_channel.length,
  };
}
