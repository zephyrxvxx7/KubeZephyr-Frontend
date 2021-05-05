export default {
  title: '新建一個容器',
  step1: '容器設定',
  step2: '環境設定',
  step3: '結果',

  // Step 1
  name: '名稱',
  image: '映像檔',
  port: '通訊埠',
  cpuLimits: '處理器資源上限',
  memoryLimits: '記憶體資源上限',

  volumeAlertMessage: '掛載的Volume無法在執行階段修改，需要刪除後重新部署容器，請謹慎使用。',
  volume: 'Volume',
  volumeMountPath: '掛載路徑',

  // Step 2
  envAlertMessage: '環境變數無法在執行階段修改，需要刪除後重新部署容器，請謹慎使用。',
  deployBtn: '部署',

  // Step 3
  successSubTitle: '容器部署中...',
  successRedoBtn: '再部署一個容器',

  failSubTitle: '請確認以下訊息後，再重新部署。',
  failRedoBtn: '返回修改',
  failMessageText: '錯誤訊息',
};
