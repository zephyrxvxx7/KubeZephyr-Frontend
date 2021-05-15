export default {
  title: 'Create a volume',
  step1: 'Volume',
  step2: 'Result',

  // Step 1
  name: 'Name',
  nameRuleMessage: 'Name must be unique within a user',
  nameLengthMessage: 'Contain at most 63 characters',
  nameRegexMessage: `Must consist of alphanumeric characters, '-', and must start and end with an alphanumeric character (RFC 1123)`,
  accessModes: 'Access mode',
  storage: 'Storage',

  descTitle: 'Description',
  descMetaText: `Need to specify no duplicate name under the user,choose access mode, and specify how much capacity to allocate to the volume.\n`,

  createBtn: 'Create',

  // Step 2
  successSubTitle: 'The volume is creating...',
  successRedoBtn: 'Create more volume',

  failSubTitle: 'Please check the below message, and then deploy later.',
  failRedoBtn: 'Back',
  failMessageText: 'Error message',
};
