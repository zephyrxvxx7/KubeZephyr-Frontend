export default {
  title: '綁定網域',
  step1: '網域',
  step2: '結果',

  // Step 1
  name: '綁定的容器名稱',

  subdomain: '子網域',
  subdomainRuleMessage: '不能綁定已經有的子網域',
  subdomainRegexMessage: `必須由小寫字母、數字、'-'組成，並且必須以字母或數字為開頭和結尾 (RFC 1123)`,
  subdomainLengthMessage: '不能超過63個字元',
  allowCors: '允許跨來源資源共用',

  descTitle: '說明',
  descMetaText: `需要指定使用者底下尚未有重複的子網域，以及選擇是否允許跨來源資源共用。\n跨來源資源共用(CORS)是一種使用額外 HTTP 標頭令目前瀏覽網站的使用者代理取得存取其他來源（網域）伺服器特定資源權限的機制。`,

  bindBtn: '綁定',

  // Step 2
  successSubTitle: '網域需要一點時間認證憑證，請稍後...',
  successBtn: '前往該網址',

  failSubTitle: '請確認以下訊息後，再重新綁定。',
  failRedoBtn: '返回修改',
  failMessageText: '錯誤訊息',
};
