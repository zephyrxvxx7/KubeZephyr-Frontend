export default {
  title: 'Create a container',
  step1: 'Container',
  step2: 'Environment',
  step3: 'Result',

  // Step 1
  name: 'Name',
  nameRuleMessage: 'Name must be unique within a user',
  nameLengthMessage: 'Contain at most 63 characters',
  nameRegexMessage: `Must consist of alphanumeric characters, '-', and must start and end with an alphanumeric character (RFC 1123)`,
  image: 'Image',
  port: 'Port',
  cpuLimit: 'Limit of CPU',
  memoryLimit: 'Limit of memory',
  descTitle: 'Description',
  descMetaText: `Need to specify which image want to use (it needs to be published in the docker hub) that there is no duplicate name under the user, and specify which port to open for service use.\n(Optional) Specify whether you want to limit the upper bound of the resource used by this container. If you don't specify it, the resource quota will be shared with other containers.\n`,
  descVolumeText:
    '(Optional) Use Volume to mount the specified Volume directory to the specified directory of the container.',

  volumeAlertMessage:
    'The mounted volume cannot be modified during the running phase. You need to delete and redeploy the container. Please use it with caution.',
  volume: 'Volume',
  volumeMountPath: 'Mounted path',

  // Step 2
  envAlertMessage:
    'Environment variables cannot be modified during the running phase. You need to delete and redeploy the container. Please use it with caution.',
  deployBtn: 'Deploy',

  // Step 3
  successSubTitle: 'The container is deploying...',
  successRedoBtn: 'Deploy more container',

  failSubTitle: 'Please check the below message, and then deploy later.',
  failRedoBtn: 'Back',
  failMessageText: 'Error message',
};
