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

  import { debounce } from 'lodash-es';

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
        cursorStyle: 'underline',
        cursorWidth: 4,
        fontSize: 16,
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

      let terminalSocket: Nullable<WebSocket> = null;
      const refTerminal = ref<HTMLElement>();

      function resizeScreen() {
        if (refTerminal.value) refTerminal.value.style.height = `${window.innerHeight - 50}px`;

        xtermFitAddon.fit();

        if (terminalSocket !== null) terminalSocket.send(JSON.stringify([xterm.rows, xterm.cols]));
      }

      onMounted(() => {
        terminalSocket = new WebSocket(
          `${globSetting.wsUrl}/resources/pod/${userStore.getUserInfo.userId}/${props.podName}/exec`
        );
        xterm.loadAddon(new AttachAddon(terminalSocket));
        xterm.open(refTerminal.value as HTMLElement);
        xterm.focus();

        setTimeout(resizeScreen, 1000);
        window.addEventListener('resize', debounce(resizeScreen, 500));
      });

      onBeforeUnmount(() => {
        xterm.dispose();
        window.removeEventListener('resize', debounce(resizeScreen, 500));
      });

      return {
        refTerminal,
      };
    },
  });
</script>
