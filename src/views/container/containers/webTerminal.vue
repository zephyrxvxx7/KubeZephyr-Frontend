<template>
  <div ref="refTerminal"></div>
</template>
<script lang="ts">
  import { defineComponent, markRaw, onBeforeUnmount, onMounted, ref } from 'vue';

  import { Terminal, ITerminalOptions } from 'xterm';
  import { FitAddon } from 'xterm-addon-fit';
  import { AttachAddon } from 'xterm-addon-attach';
  import 'xterm/css/xterm.css';
  import 'xterm/lib/xterm.js';

  import { useGlobSetting } from '/@/hooks/setting';
  import { useUserStore } from '/@/store/modules/user';
  import { propTypes } from '/@/utils/propTypes';

  export default defineComponent({
    name: 'Terminal',
    components: {},
    props: {
      podName: propTypes.string,
    },
    setup(props) {
      const globSetting = useGlobSetting();
      const userStore = useUserStore();

      const terminalOptions: ITerminalOptions = {
        cursorBlink: true,
        cursorStyle: 'bar',
        cursorWidth: 4,
        fontSize: 14,
        theme: {
          foreground: '#dcdfe4',
          background: '#282c34',
          cursor: '#a3b3cc',
          black: '#282c34',
          brightBlack: '#282c34',
          red: '#e06c75',
          brightRed: '#e06c75',
          green: '#98c379',
          brightGreen: '#98c379',
          yellow: '#e5c07b',
          brightYellow: '#e5c07b',
          blue: '#61afef',
          brightBlue: '#61afef',
          magenta: '#c678dd',
          brightMagenta: '#c678dd',
          cyan: '#56b6c2',
          brightCyan: '#56b6c2',
          white: '#dcdfe4',
          brightWhite: '#dcdfe4',
        },
      };

      const xterm = markRaw(new Terminal(terminalOptions));
      const xtermFitAddon = new FitAddon();
      xterm.loadAddon(xtermFitAddon);

      const refTerminal = ref<HTMLElement>();

      const xtermFit = () => xtermFitAddon.fit();

      onMounted(() => {
        xterm.open(refTerminal.value as HTMLElement);

        window.addEventListener('resize', xtermFit);

        const terminalSocket = new WebSocket(
          `${globSetting.wsUrl}/resources/pod/${userStore.getUserInfo.userId}/${props.podName}/exec`
        );
        // const terminalSocket = new WebSocket(`ws://0.0.0.0:9487/api/resources/pod/${userStore.getUserInfo.userId}/${props.podName}/exec`)
        const xtermAttachAddon = new AttachAddon(terminalSocket);
        xterm.loadAddon(xtermAttachAddon);
        xterm.focus();
      });

      onBeforeUnmount(() => {
        xterm.dispose();
      });

      return {
        refTerminal,
      };
    },
  });
</script>
