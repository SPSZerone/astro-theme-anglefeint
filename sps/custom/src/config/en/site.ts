import type { LocaleConfig } from '@/site.config.schema.ts';
import { ABOUT_CONFIG } from './about.ts';

export const local: LocaleConfig = {
  meta: {
    label: 'English',
    hreflang: 'en',
    ogLocale: 'en_US',
    enabled: true,
  },
  site: {
    hero: "I've been bringing games to life through code as a Full-Stack Game Developer since 2012.Beyond the screen, I'm deeply immersed in classical music—playing the piano ('13), violin ('17), and cello ('19).When I'm not at a keyboard or holding a bow, I'm chasing my next thrill through skydiving, cycling, running, and tennis.",
  },
  messages: {
    nav: { home: 'Home' },
  },
  about: ABOUT_CONFIG,
};
