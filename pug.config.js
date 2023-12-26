const _a = (label, href, target = '_blank') => `<a href="${href}" target="${target}">${label}</a>`;

const cnLinks = {
  blog: _a('博客', 'https://blog.varzy.me'),
  telegramChannel: _a('贼歪说', 'https://t.me/aboutzy'),
  newsletter: _a('不正集', 'https://varzy.zhubai.love'),
  neteaseMusic: _a('网易云', 'https://music.163.com/playlist?id=7231521712&userid=45403592'),
  twitter: _a('Twitter', 'https://twitter.com/varzyme'),
  instagram: _a('Instagram', 'https://www.instagram.com/varzyme/'),
  douban: _a('豆瓣', 'https://www.douban.com/people/varzy/'),
  email: _a('Email', 'mailto:varzyme@gmail.com', '_self'),
  telegram: _a('Telegram', 'https://t.me/varzy'),
  github: _a('Github', 'https://github.com/varzy'),
  notes: _a('技术笔记', 'https://varzy.notion.site'),
  resume: _a('简历', 'https://varzy.me/resume'),
  desk: _a('贼歪的书桌', 'https://varzy.notion.site'),
};

module.exports = {
  locals: {
    cn: {
      lang: 'zh-cmn-Hans',
      name: '赵 越',
      descriptions: [
        `90 后程序员，现居北京。ACG 爱好者，老摇滚爱好者，半个极客。断舍离主义者，喜欢简洁的桌面和无 LOGO 的衣服。`,
        `我的${cnLinks.blog}有几篇长文，那里是思绪的孤岛，欢迎登陆。我的 Telegram 频道「${cnLinks.telegramChannel}」是朋友圈，欢迎订阅。你还可以在${cnLinks.douban}翻一翻我标记的书影音，或者去${cnLinks.neteaseMusic}听一听我喜欢的音乐。`,
        `我对各种互联网技术都充满好奇，但当下更专注于 Web 前端领域。我使用 ${cnLinks.github} 托管开源项目。如果你正巧在招贤纳士，不妨瞄一眼我的${cnLinks.resume}。`,
        `尽管平平无奇，但仍然希望这个世界的运行轨迹能因我而发生一丝偏转。我正在努力。`,
      ],
      // links: [
      //   {
      //     title: '生活社交',
      //     items: [cnLinks.instagram, cnLinks.neteaseMusic, cnLinks.douban],
      //   },
      //   {
      //     title: '内容创作',
      //     items: [cnLinks.blog, cnLinks.telegramChannel],
      //   },
      //   {
      //     title: '技术工作',
      //     items: [cnLinks.github, cnLinks.notes, cnLinks.resume],
      //   },
      //   {
      //     title: '联系我',
      //     items: [cnLinks.telegram, cnLinks.email],
      //   },
      // ],
    },
    // Support multi languages...
    // en: {
    // },
  },
};
