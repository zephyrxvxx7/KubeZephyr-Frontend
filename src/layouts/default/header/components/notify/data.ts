export interface ListItem {
  id: string;
  avatar: string;
  title: string;
  datetime: string;
  type: string;
  read?: boolean;
  description: string;
  clickClose?: boolean;
  extra?: string;
  color?: string;
}

export interface TabItem {
  key: string;
  name: string;
  list: ListItem[];
  unreadlist?: ListItem[];
}

export const tabListData: TabItem[] = [
  {
    key: '1',
    name: '通知',
    list: [
      {
        id: '000000001',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
        title: 'TEST',
        description: '',
        datetime: '2021-03-03',
        type: '1',
      },
      {
        id: '000000002',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
        title: 'TEST2',
        description: '內文',
        datetime: '2021-03-03',
        type: '1',
      },
      {
        id: '000000003',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
        title: 'TEST3',
        description: '',
        datetime: '2021-03-03',
        read: true,
        type: '1',
      },
      {
        id: '000000004',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
        title: 'TEST4',
        description: 'context',
        datetime: '2021-03-03',
        type: '1',
      },
    ],
  },
  {
    key: '2',
    name: '訊息',
    list: [
      {
        id: '000000006',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
        title: '誰誰誰 回覆了你',
        description: '訊息訊息訊息',
        datetime: '2021-03-03',
        type: '2',
        clickClose: true,
      },
    ],
  },
  {
    key: '3',
    name: '待辦',
    list: [
      {
        id: '000000009',
        avatar: '',
        title: '待辦事項',
        description: '早點開始做就不會那麼趕了',
        datetime: '',
        extra: '尚未開始',
        color: '',
        type: '3',
      },
      {
        id: '000000010',
        avatar: '',
        title: 'meeting',
        description: '很緊急的事',
        datetime: '2021-03-05',
        extra: '即將到期',
        color: 'red',
        type: '3',
      },
    ],
  },
];
