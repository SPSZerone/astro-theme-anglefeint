import { DEFAULT_LOCALE, type Locale } from '@/i18n/config';

export type Messages = {
  siteTitle: string;
  siteDescription: string;
  langLabel: string;
  nav: {
    home: string;
    blog: string;
    about: string;
    status: string;
    statusAria: string;
  };
  home: {
    hero: string;
    latest: string;
    viewAll: string;
    noPosts: string;
  };
  about: {
    title: string;
    description: string;
    who: string;
    what: string;
    ethos: string;
    now: string;
    contact: string;
    regenerate: string;
  };
  blog: {
    title: string;
    pageTitle: string;
    archiveDescription: string;
    pageDescription: string;
    previous: string;
    next: string;
    jumpTo: string;
    jumpGo: string;
    jumpInputLabel: string;
    backToBlog: string;
    backToTop: string;
    related: string;
    comments: string;
    responseOutput: string;
    rqBadge: string;
    rqReplayAria: string;
    metaPublished: string;
    metaUpdated: string;
    metaReadMinutes: string;
    systemStatusAria: string;
    systemModelLabel: string;
    systemModeLabel: string;
    systemStateLabel: string;
    promptContextLabel: string;
    latencyLabel: string;
    confidenceLabel: string;
    statsWords: string;
    statsTokens: string;
    heroMonitor: string;
    heroSignalSync: string;
    heroModelOnline: string;
    regenerate: string;
    relatedAria: string;
    backToBlogAria: string;
    paginationAria: string;
    toastP10: string;
    toastP30: string;
    toastP60: string;
    toastDone: string;
  };
};

export const DEFAULT_MESSAGES: Record<string, Messages> = {
  en: {
    siteTitle: 'Angle Feint',
    siteDescription: 'Cinematic web interfaces and AI-era engineering essays.',
    langLabel: 'Language',
    nav: {
      home: 'Home',
      blog: 'Blog',
      about: 'About',
      status: 'system: online',
      statusAria: 'System status',
    },
    home: {
      hero: 'Write a short introduction for your site and what readers can expect from your posts.',
      latest: 'Latest Posts',
      viewAll: 'View all posts',
      noPosts: 'No posts available in this language yet.',
    },
    about: {
      title: 'About Me',
      description: 'Who I am, what I build, and the hacker ethos behind my work.',
      who: 'Who I Am',
      what: 'What I Build',
      ethos: 'About Life',
      now: 'Now',
      contact: 'Contact',
      regenerate: 'Replay scan',
    },
    blog: {
      title: 'Blog',
      pageTitle: 'Blog - Page',
      archiveDescription: 'Essays on AI-era craft, web engineering, and system architecture.',
      pageDescription: 'Blog archive page',
      previous: 'Previous',
      next: 'Next',
      jumpTo: 'Jump to page',
      jumpGo: 'Go',
      jumpInputLabel: 'Page number',
      backToBlog: 'Back to blog',
      backToTop: 'Back to top',
      related: 'Related',
      comments: 'Comments',
      responseOutput: 'Output',
      rqBadge: 'monitor feed',
      rqReplayAria: 'Replay monitor feed',
      metaPublished: 'published',
      metaUpdated: 'updated',
      metaReadMinutes: 'min read',
      systemStatusAria: 'Model status',
      systemModelLabel: 'model',
      systemModeLabel: 'mode',
      systemStateLabel: 'state',
      promptContextLabel: 'Context',
      latencyLabel: 'latency est',
      confidenceLabel: 'confidence',
      statsWords: 'words',
      statsTokens: 'tokens',
      heroMonitor: 'neural monitor',
      heroSignalSync: 'signal sync active',
      heroModelOnline: 'model online',
      regenerate: 'Replay scan',
      relatedAria: 'Related posts',
      backToBlogAria: 'Back to blog',
      paginationAria: 'Pagination',
      toastP10: 'context parsed 10%',
      toastP30: 'context parsed 30%',
      toastP60: 'inference stable 60%',
      toastDone: 'output finalized',
    },
  },
  zh: {
    siteTitle: 'Angle Feint',
    siteDescription: '电影感网页界面与 AI 时代工程实践文章。',
    langLabel: '语言',
    nav: {
      home: '首页',
      blog: '博客',
      about: '关于',
      status: 'system: online',
      statusAria: '系统状态',
    },
    home: {
      hero: '在这里写一段站点简介，并告诉读者你将发布什么类型的内容。',
      latest: '最新文章',
      viewAll: '查看全部文章',
      noPosts: '该语言暂时没有文章。',
    },
    about: {
      title: '关于我',
      description: '我是谁、我在做什么，以及背后的黑客精神。',
      who: '我是谁',
      what: '我在构建什么',
      ethos: '关于人生',
      now: '现在',
      contact: '联系',
      regenerate: '重播扫描',
    },
    blog: {
      title: '博客',
      pageTitle: '博客 - 第',
      archiveDescription: '关于 AI 时代开发、Web 工程与系统架构的文章。',
      pageDescription: '博客归档页',
      previous: '上一页',
      next: '下一页',
      jumpTo: '跳转到页',
      jumpGo: '跳转',
      jumpInputLabel: '页码',
      backToBlog: '返回博客',
      backToTop: '返回顶部',
      related: '相关文章',
      comments: '评论',
      responseOutput: '输出',
      rqBadge: '监视器信号',
      rqReplayAria: '重放监视器信号',
      metaPublished: '发布',
      metaUpdated: '更新',
      metaReadMinutes: '分钟阅读',
      systemStatusAria: '模型状态',
      systemModelLabel: '模型',
      systemModeLabel: '模式',
      systemStateLabel: '状态',
      promptContextLabel: '语境',
      latencyLabel: '延迟估计',
      confidenceLabel: '置信度',
      statsWords: '词',
      statsTokens: '令牌',
      heroMonitor: '神经监视器',
      heroSignalSync: '信号同步中',
      heroModelOnline: '模型在线',
      regenerate: '重播扫描',
      relatedAria: '相关文章',
      backToBlogAria: '返回博客',
      paginationAria: '分页导航',
      toastP10: '语境解析 10%',
      toastP30: '语境解析 30%',
      toastP60: '推理稳定 60%',
      toastDone: '输出完成',
    },
  },
};

export function getMessages(locale: Locale): Messages {
  return DEFAULT_MESSAGES[locale] ?? DEFAULT_MESSAGES[DEFAULT_LOCALE];
}
