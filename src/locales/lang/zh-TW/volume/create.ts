export default {
  title: '新建一個卷宗',
  step1: '卷宗設定',
  step2: '結果',

  // Step 1
  name: '名稱',
  nameRuleMessage: '不能新建相同名稱的卷宗',
  nameLengthMessage: '不能超過63個字元',
  nameRegexMessage: `必須由大小寫字母、數字、'-'組成，並且必須以字母或數字為開頭和結尾 (RFC 1123)`,
  accessModes: '存取模式',
  storage: '儲存空間',

  descTitle: '說明',
  descMetaText: `需要指定使用者底下尚未有重複的名稱，選擇何種存取模式，以及指定分配多少容量給該卷宗使用。\n`,

  createBtn: '新增',

  // Step 2
  successSubTitle: '新建卷宗中...',
  successRedoBtn: '再新增一個卷宗',

  failSubTitle: '請確認以下訊息後，再重新新增。',
  failRedoBtn: '返回修改',
  failMessageText: '錯誤訊息',
};
