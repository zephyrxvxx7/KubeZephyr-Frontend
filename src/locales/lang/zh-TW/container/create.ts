export default {
  title: '新建一個容器',
  step1: '容器設定',
  step2: '環境設定',
  step3: '結果',

  // Step 1
  name: '名稱',
  nameRuleMessage: '不能新建相同名稱的容器',
  nameRegexMessage: `必須由小寫字母、數字、'-'、'.'組成，並且必須以字母或數字為開頭和結尾 (RFC 1123)`,
  image: '映像檔',
  port: '通訊埠',
  cpuLimit: '處理器資源上限',
  memoryLimit: '記憶體資源上限',
  descTitle: '說明',
  descMetaText: `需要指定使用者底下尚未有重複的名稱，要使用哪個映像檔（需要公開在docker hub），以及指定要開啟哪個通訊埠供服務使用。\n（可選的）可以指定是否要限制此容器的使用資源上限，如不指定則將與其他容器共享資源配額。\n`,
  descVolumeText: '（可選的）使用Volume掛載指定的Volume目錄到容器的指定目錄。',

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
