export default {
  title: 'Create a container',
  step1: 'Container',
  step2: 'Environment',
  step3: 'Result',

  // Step 1
  name: 'Name',
  image: 'Image',
  port: 'Port',
  cpuLimits: 'Limit of cpu',
  memoryLimits: 'Limit of memory',

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
