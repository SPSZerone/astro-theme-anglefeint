/*
 */
import type { AboutConfig } from '@/site.config.schema.ts';

export const ABOUT_CONFIG: AboutConfig = {
  metaLine: '$ 档案加载完毕 | 运行模式：构建者',
  sections: {
    who: '用代码创造世界，用音乐沉淀灵魂。作为一名从业十余年的全栈游戏开发者（since 2012），编程是我的热爱。同时，我是一名重度古典乐迷，与钢琴（since 2013）、小提琴（since 2017）和大提琴（since 2019）为伴。生活中的我拒绝一成不变，跳伞、骑行、跑步和打网球是我拥抱世界的方式。',
    what: '',
    ethos: [
      '追随内心',
      '音乐即生命',
      '内心平静  活在当下',
      '身心合一  知行合一',
      '少即是多  慢即是快',
      '人生不设限  保持好奇心',
      '成为更好的自己',
    ],
    now: 'ABRSM Piano Grade 6 | Asteroids-like game demo by Bevy | Learning Bevy',
    contactLead: '',
    signature: '> 欢迎来访.',
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
    responseOutput: '档案内容',
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
