/**
 * Single user-facing config entry for Anglefeint.
 * Edit this file only. Other files under src/config/* and src/i18n/* are adapters.
 */
import { defineThemeConfig } from './site.config.defaults.ts';

export type {
  AboutConfig,
  LocaleCode,
  LocaleConfig,
  LocaleMetaConfig,
  LocaleSiteConfig,
  NormalizedLocaleConfig,
  NormalizedThemeI18nConfig,
  SocialLink,
  ThemeConfig,
  ThemeI18nConfig,
} from './site.config.schema.ts';
export { DEFAULT_ABOUT_CONFIG, defineThemeConfig } from './site.config.defaults.ts';
export { normalizeI18nConfig } from './site.config.runtime.ts';

/**
 * Edit this object only.
 * Omitted fields safely fall back to theme defaults.
 */
export const THEME_CONFIG = defineThemeConfig({
  // Example:
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: {
  //     en: {
  //       meta: { label: 'English', hreflang: 'en', ogLocale: 'en_US' },
  //       site: { hero: 'Your localized hero copy.' },
  //       about: { metaLine: '$ profile booted | mode: builder' },
  //       messages: { nav: { home: 'Home' } },
  //     },
  //   },
  // },

  // SPS CUSTOM
  site: {
    title: 'Anglefeint - William Chen - 陈威 - SPS',
    description: '',
    url: 'https://anglefeint.me.seapianosnow.com',
    author: 'William Chen - 陈威',
    tagline: 'Powered by Astro & Anglefeint theme',
  },
  social: {
    links: [{ href: 'https://github.com/SPSZerone', label: 'GitHub', icon: 'github' }],
  },
  theme: {
    enableAboutPage: true,
    effects: {
      enableRedQueen: true,
    },
    blogPageSize: 9,
    homeLatestCount: 8,
  },
  i18n: {
    defaultLocale: 'en',
    routing: {
      // defaultLocalePrefix: 'always',
      defaultLocalePrefix: 'never',
    },
    locales: {
      en: {
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
        about: {
          metaLine: '$ profile booted | mode: builder',
        },
      },
      zh: {
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
        about: {
          metaLine: '$ profile booted | mode: builder',
        },
      },
      ja: {
        meta: {
          enabled: false,
        },
      },
      ko: {
        meta: {
          enabled: false,
        },
      },
      es: {
        meta: {
          enabled: false,
        },
      },
    }, // end of locales
  },
});
