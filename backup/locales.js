const buildLink = (label, href, target = '_blank') => `<a href="${href}" target="${target}">${label}</a>`;

const links = {
  zh_cn: {
    blog: buildLink('博客', 'https://blog.varzy.me'),
    telegramChannel: buildLink('贼歪说', 'https://t.me/aboutzy'),
    newsletter: buildLink('不正集', 'https://varzy.zhubai.love'),
    neteaseMusic: buildLink('贼歪说音乐', 'https://music.163.com/playlist?id=7231521712&userid=45403592'),
    twitter: buildLink('Twitter', 'https://twitter.com/varzyme'),
    douban: buildLink('豆瓣', 'https://www.douban.com/people/varzy/'),
    email: buildLink('Email', 'mailto:i@yuezhao.me', '_self'),
    telegram: buildLink('Telegram', 'https://t.me/varzy'),
    github: buildLink('Github', 'https://github.com/varzy'),
    notes: buildLink('技术笔记', 'https://varzy.me/notes'),
    resume: buildLink('简历', 'https://varzy.me/resume'),
    desk: buildLink('贼歪的书桌', 'https://varzy.notion.site'),
  },
  // en: {
  //   blog: buildLink('Blog', 'https://blog.varzy.me'),
  //   twitter: buildLink('Twitter', 'https://twitter.com/varzyme'),
  //   telegramChannel: buildLink('Telegram Channel', 'https://t.me/aboutzy'),
  //   douban: buildLink('Douban', 'https://www.douban.com/people/varzy/'),
  //   email: buildLink('Email', 'mailto:i@yuezhao.me', '_self'),
  //   telegram: buildLink('Telegram', 'https://t.me/varzy'),
  //   github: buildLink('Github', 'https://github.com/varzy'),
  //   notes: buildLink('Notes', 'https://varzy.me/notes'),
  //   resume: buildLink('Resume', 'https://varzy.me/resume'),
  //   sohu: buildLink('Sohu', 'https://www.sohu.com/'),
  // },
};

module.exports = [
  {
    outputFile: 'index.html',
    locals: {
      locale: { key: 'zh_cn', lang: 'zh-cmn-Hans' },
      name: '赵 越',
      descriptions: [
        `90 后程序员，现居北京。ACG 爱好者，老摇滚爱好者，半个极客以及半个完美主义者。信奉断舍离主义，喜欢简洁的桌面和无 LOGO 的衣服，睡醒了会叠被子。`,
        `我的${links.zh_cn.blog}存放了一些倾注精力的长文，那里是想法内敛的孤岛，欢迎登陆。我还创建了一个 Telegram 频道「${links.zh_cn.telegramChannel}」和一个 Newsletter「${links.zh_cn.newsletter}」，用来分享各种我认为值得分享的事物，欢迎订阅。以上内容都托管在「${links.zh_cn.desk}」，你可以在这里找到我写下的所有文字。`,
        `我对各种互联网技术都充满好奇，但当下更专注于 Web 领域，目前在搜狐做前端开发。我通常使用 ${links.zh_cn.github} 托管开源项目。如果你正巧在招贤纳士，不妨瞄一眼我的${links.zh_cn.resume}。`,
        `尽管平平无奇，但仍然希望这个世界的运行轨迹能因我而发生一丝偏转。我正在努力。`,
      ],
      links: [
        {
          title: '内容创作',
          items: [links.zh_cn.blog, links.zh_cn.telegramChannel, links.zh_cn.newsletter, links.zh_cn.neteaseMusic],
        },
        {
          title: '技术工作',
          items: [links.zh_cn.github, links.zh_cn.notes, links.zh_cn.resume],
        },
        {
          title: '生活社交',
          items: [links.zh_cn.douban, links.zh_cn.twitter],
        },
        {
          title: '联系我',
          items: [links.zh_cn.telegram, links.zh_cn.email],
        },
      ],
    },
  },
  // {
  //   outputFile: 'en.html',
  //   locals: {

  //   }
  // }
  // {
  //   locale: { key: 'en', lang: 'en' },
  //   targetFileName: 'en.html',
  //   name: 'AIDEN ZHAO',
  //   descriptions: [
  //     `A post-90s developer living in Beijing, a huge fan of ACG culture and classic rock music, a geek believing in Danshari and keeping the desktop clean with a strong preference for logo-free clothes.`,
  //     `You are welcome to read the reflection of my thoughts on my ${links.en.blog}. I also have a ${links.en.twitter} account but I usually post my brain flash on my ${links.en.telegramChannel}. Plus, I've got a habit of using ${links.en.douban} to rate books, dramas, and movies. If you want to contact me, just send me an ${links.en.email} or hit me up on ${links.en.telegram}.`,
  //     `I am interested in every computer technology but now I'm focusing on the Web area. Currently, I'm working as a frontend developer at ${links.en.sohu} (Beijing). I use ${links.en.github} like most developers. And I have been posting the ${links.en.notes} that I took since I started my programming life, where any comments you may leave are welcome. BTW, if you are hiring right now, then why not take a minute and read my ${links.en.resume}.`,
  //     `Plain and silly as I am, I'm still hoping that I will be able to make a change to the world, even just a tiny little one. I'm always on the road.`,
  //   ],
  // },
];
