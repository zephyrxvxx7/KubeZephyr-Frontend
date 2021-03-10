import { genMessage } from '../helper';
import antdLocale from 'ant-design-vue/es/locale/zh_TW';
import momentLocale from 'moment/dist/locale/zh-tw';

const modules = import.meta.globEager('./zh_TW/**/*.ts');
export default {
  message: {
    ...genMessage(modules, 'zh_TW'),
    antdLocale,
  },
  momentLocale,
  momentLocaleName: 'zh-tw',
};
