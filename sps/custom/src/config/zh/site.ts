import type { LocaleConfig } from '@/site.config.schema.ts';
import { ABOUT_CONFIG } from './about.ts';

export const local: LocaleConfig = {
  meta: {
    label: '中文',
    hreflang: 'zh-CN',
    ogLocale: 'zh_CN',
    fallback: ['en'],
    enabled: true,
  },
  site: {
    hero: '我热爱编程，自 2012 年起便深耕于全栈游戏开发。在代码构建的世界之外，我痴迷于古典音乐，并长年研习钢琴（始于 2013）、小提琴（始于 2017）与大提琴（始于 2019）。此外，我也是一名户外与极限运动爱好者，热衷于跳伞、骑行、跑步和网球。',
  },
  about: ABOUT_CONFIG,
};
