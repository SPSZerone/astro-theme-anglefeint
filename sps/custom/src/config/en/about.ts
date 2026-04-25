/*

*/

import type { AboutConfig } from '@/site.config.schema.ts';

export const ABOUT_CONFIG: AboutConfig = {
  metaLine: '$ profile booted | mode: builder',
  sections: {
    who: 'I am a Full-Stack Game Developer who has been passionate about coding and crafting digital experiences since 2012. My creativity extends to a deep love for classical music, dedicating myself to the piano (since 2013), violin (since 2017), and cello (since 2019).Additionally, I thrive on the outdoors and adrenaline, being an avid enthusiast of skydiving, cycling, running, and tennis.',
    what: '',
    ethos: [
      'Follow Heart.',
      'No Music, No Life.',
      'Inner Peace. Live in the present.',
      'Mind and body as one. Knowledge and action as one.',
      'Less is More. Slow is Fast.',
      'Life without limits. Stay Curious.',
      'Be a Better You.',
    ],
    now: 'ABRSM Piano Grade 6 | Asteroids-like game demo by Bevy | Learning Bevy',
    contactLead: '',
    signature: '> Enjoy.',
  },
  contact: {
    email: '',
    githubUrl: 'https://github.com/SPSZerone',
    githubLabel: 'GitHub',
  },
  sidebar: {
    dlData: 'DL Data',
    ai: 'AI',
    decryptor: 'Decryptor',
    help: 'Help',
    allScripts: 'All Scripts',
  },
  scriptsPath: '/root/bash/scripts',
  labels: {
    modalOutput: 'Output',
    modalClose: 'Close',
    responseOutput: 'Output',
    contactEmailLead: '',
    contactConnectLead: '',
    backToTop: 'Back to top',
    quickAccess: 'Quick access',
    contactEmailLabel: '',
  },
  modals: {
    dlData: {
      title: 'Downloading...',
      subtitle: 'Critical Data',
    },
    ai: {
      title: 'AI',
      lines: [
        '~ $ ai --status --verbose',
        '',
        'model: anglefeint-core',
        'mode: reasoning + builder',
        'context window: 128k',
        'tools: codex / cursor / claude-code',
        'latency: 120-220ms',
        'safety: guardrails enabled',
        '',
        '>> system online',
        '>> ready for execution',
      ],
    },
    decryptor: {
      title: 'Password Decryptor',
      header: 'Calculating Hashes',
      keysLabel: 'keys tested',
      currentPassphraseLabel: 'Current passphrase:',
      masterKeyLabel: 'Master key',
      transientKeyLabel: 'Transient key',
    },
    help: {
      title: 'Help',
      statsLabel: 'Stats & Achievements',
      typedPrefix: 'You typed:',
      typedSuffix: 'characters',
    },
    allScripts: {
      title: '/root/bash/scripts',
    },
  },
  effects: {
    backgroundLines: [
      '~ $ ls -la',
      'total 42',
      'drwxr-xr-x  12 user  staff   384  Jan 12  about  blog  projects',
      'drwxr-xr-x   8 user  staff   256  Jan 11  .config  .ssh  keys',
      '-rw-r--r--   1 user  staff  2048  Jan 10  README.md  .env.gpg',
      '-rwxr-xr-x   1 user  staff   512  Jan  9  deploy.sh  script',
      '~ $ cat .motd',
      '>> welcome | access granted',
    ],
    scrollToasts: {
      p30: 'context parsed',
      p60: 'inference stable',
      p90: 'output finalized',
    },
  },
} as const;
