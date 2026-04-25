/**
 * Single user-facing config entry for Anglefeint.
 * Edit this file only. Other files under src/config/* and src/i18n/* are adapters.
 */
import { defineThemeConfig } from './site.config.defaults.ts';

import { local as localEN } from '../sps/custom/src/config/en/site.ts';
import { local as localZH } from '../sps/custom/src/config/zh/site.ts';
// import { local as localEN } from '@spscustom/config/en/site';
// import { local as localZH } from '@spscustom/config/zh/site';

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
    title: 'William Chen - 陈威',
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
      en: localEN,
      zh: localZH,
      ja: { meta: { enabled: false } },
      ko: { meta: { enabled: false } },
      es: { meta: { enabled: false } },
    }, // end of locales
  },
});
