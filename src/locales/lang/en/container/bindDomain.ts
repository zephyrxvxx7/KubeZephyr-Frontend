export default {
  title: 'Bind a domain',
  step1: 'Domain',
  step2: 'Result',

  // Step 1
  name: 'Bound container name',

  subdomain: 'Sub domain',
  subdomainRuleMessage: 'Cannot bind an existing subdomain',
  subdomainRegexMessage: `Must consist of lower case alphanumeric characters, '-', and must start and end with an alphanumeric character (RFC 1123)`,
  subdomainLengthMessage: 'Contain at most 63 characters',
  allowCors: 'Allow cross-origin resource sharing',

  descTitle: 'Description',
  descMetaText: `Need to specify that there are no duplicate subdomains under the user, and choose whether to allow Cross-Origin Resource Sharing.\nCross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any other origins (domain, scheme, or port) than its own from which a browser should permit loading of resources.`,

  bindBtn: 'Bind',

  // Step 2
  successSubTitle: 'It takes a while for the domain to verify the certificate, please wait...',
  successBtn: 'Go to the URL',

  failSubTitle: 'Please confirm the following message before binding again.',
  failRedoBtn: 'Back',
  failMessageText: 'Error message',
};
