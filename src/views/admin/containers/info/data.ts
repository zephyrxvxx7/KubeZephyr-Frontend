import { DescItem } from '/@/components/Description';
import { BasicColumn } from '/@/components/Table/src/types/table';

export const metaSchema: DescItem[] = [
  {
    field: 'name',
    label: '名稱',
  },
  {
    field: 'creationTimestamp',
    label: '創建時間',
  },
  {
    field: 'selfLink',
    label: 'selfLink',
  },
];

export const statusSchema: DescItem[] = [
  {
    field: 'phase',
    label: '狀態',
  },
  {
    field: 'message',
    label: '錯誤原因',
  },
];

export const imageSchema: DescItem[] = [
  {
    field: 'image',
    label: '映像檔',
  },
  {
    field: 'imagePullPolicy',
    label: '映像檔拉取策略',
  },
];

export const portSchema: DescItem[] = [
  {
    field: 'containerPort',
    label: '通訊埠',
  },
  {
    field: 'protocol',
    label: '通訊協定',
  },
];

export const ipSchema: DescItem[] = [
  {
    field: 'hostIP',
    label: '主機IP位置',
  },
  {
    field: 'podIP',
    label: '容器IP位置',
  },
];

export const volumeColumns: BasicColumn[] = [
  {
    title: '卷宗名稱',
    dataIndex: 'pvc',
  },
  {
    title: '掛載路徑',
    dataIndex: 'mountPath',
  },
];

export const envColumns: BasicColumn[] = [
  {
    title: 'Key',
    dataIndex: 'name',
  },
  {
    title: 'Value',
    dataIndex: 'value',
  },
];
