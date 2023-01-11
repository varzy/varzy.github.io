const _a = (label, href, target = '_blank') =>
  `<a href="${href}" target="${target}">${label}</a>`;

const cnLinks = {
  blog: _a('博客', 'https://blog.varzy.me'),
  telegramChannel: _a('贼歪说', 'https://t.me/aboutzy'),
  newsletter: _a('不正集', 'https://varzy.zhubai.love'),
  neteaseMusic: _a('贼歪说音乐', 'https://music.163.com/playlist?id=7231521712&userid=45403592'),
  twitter: _a('Twitter', 'https://twitter.com/varzyme'),
  douban: _a('豆瓣', 'https://www.douban.com/people/varzy/'),
  email: _a('Email', 'mailto:i@yuezhao.me', '_self'),
  telegram: _a('Telegram', 'https://t.me/varzy'),
  github: _a('Github', 'https://github.com/varzy'),
  notes: _a('技术笔记', 'https://varzy.me/notes'),
  resume: _a('简历', 'https://varzy.me/resume'),
  desk: _a('贼歪的书桌', 'https://varzy.notion.site'),
};

module.exports = {
  locals: {
    cn: {
      locale: { htmlLang: 'zh-cmn-Hans' },
      name: '赵 越',
      descriptions: [
        `90 后程序员，现居北京。ACG 爱好者，老摇滚爱好者，半个极客以及半个完美主义者。信奉断舍离主义，喜欢简洁的桌面和无 LOGO 的衣服，睡醒了会叠被子。`,
        `我的${cnLinks.blog}存放了一些倾注精力的长文，那里是想法内敛的孤岛，欢迎登陆。我还创建了一个 Telegram 频道「${cnLinks.telegramChannel}」和一个 Newsletter「${cnLinks.newsletter}」，用来分享各种我认为值得分享的事物，欢迎订阅。以上内容都托管在「${cnLinks.desk}」，你可以在这里找到我写下的所有文字。`,
        `我对各种互联网技术都充满好奇，但当下更专注于 Web 领域，目前在搜狐做前端开发。我通常使用 ${cnLinks.github} 托管开源项目。如果你正巧在招贤纳士，不妨瞄一眼我的${cnLinks.resume}。`,
        `尽管平平无奇，但仍然希望这个世界的运行轨迹能因我而发生一丝偏转。我正在努力。`,
      ],
      links: [
        {
          title: '内容创作',
          items: [
            cnLinks.blog,
            cnLinks.telegramChannel,
            cnLinks.newsletter,
            cnLinks.neteaseMusic,
          ],
        },
        {
          title: '技术工作',
          items: [cnLinks.github, cnLinks.notes, cnLinks.resume],
        },
        {
          title: '生活社交',
          items: [cnLinks.douban, cnLinks.twitter],
        },
        {
          title: '联系我',
          items: [cnLinks.telegram, cnLinks.email],
        },
      ],
    },
    // Support multi languages...
    // en: {
    // },
  }
}
