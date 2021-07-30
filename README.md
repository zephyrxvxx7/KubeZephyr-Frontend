# KubeZephyr Frontend

## What for

This project is the KubeZephyr frontend based on vue.js.

It can operate Kubernetes resources through the backend to operate Kubernetes API resources.

This project is generated from the [anncwb/vben-admin-thin-next](https://github.com/anncwb/vue-vben-admin).

## Preinstallation

### Environmental requirements

- `Node.js`: - Version > `12.0.0` .
- `yarn` : - Package management tool.

## How to use

- install the requirements

```zsh
yarn install
```

- Debug

```zsh
yarn serve
```

- Build

```bash
yarn build
```

## Browser support

recommand use `Chrome 80+` broswer to debug.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| :-: | :-: | :-: | :-: | :-: |
| not support | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## Notice

The requirement delete `echarts`, `apexcharts`, `xlsx` and `vditor`. But the comments and the scripts did not delete.

So, when you want to use them. Just execute the corresponding script.

The following is the sample scripts:

```js

yarn add echarts
yarn add apexcharts

```
