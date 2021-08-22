const buildLink = (label, href, target = '_blank') =>
  `<a href="${href}" target="${target}">${label}</a>`;
const links = {
  zh_cn: {
    blog: buildLink('博客', 'https://blog.varzy.me'),
    twitter: buildLink('Twitter', 'https://twitter.com/varzyme'),
    telegram_channel: buildLink('Telegram Channel', 'https://t.me/zytalk'),
    douban: buildLink('豆瓣', 'https://www.douban.com/people/varzy/'),
    email: buildLink('发邮件', 'mailto:i@yuezhao.me', '_self'),
    telegram: buildLink('拍电报', 'https://t.me/varzy'),
    github: buildLink('Github', 'https://github.com/varzy'),
    notes: buildLink('笔记', 'https://varzy.me/notes'),
    resume: buildLink('简历', 'https://varzy.me/resume'),
  },
  en: {
    blog: buildLink('Blog', 'https://blog.varzy.me'),
    twitter: buildLink('Twitter', 'https://twitter.com/varzyme'),
    telegram_channel: buildLink('Telegram Channel', 'https://t.me/zytalk'),
    douban: buildLink('Douban', 'https://www.douban.com/people/varzy/'),
    email: buildLink('Email', 'mailto:i@yuezhao.me', '_self'),
    telegram: buildLink('Telegram', 'https://t.me/varzy'),
    github: buildLink('Github', 'https://github.com/varzy'),
    notes: buildLink('Notes', 'https://varzy.me/notes'),
    resume: buildLink('Resume', 'https://varzy.me/resume'),
    sohu: buildLink('Sohu', 'https://www.sohu.com/'),
  },
};

module.exports = [
  {
    locale: { key: 'zh_cn', htmlLang: 'zh-cmn-Hans' },
    targetFileName: 'zh.html',
    name: '赵 越',
    descriptions: [
      `90 后程序员，现居北京。ACG 爱好者，老摇滚爱好者，半个极客以及半个完美主义者。信奉断舍离主义，喜欢简洁的桌面和无 LOGO 的衣服，睡醒了会叠被子。`,
      `你可以在我的${links.zh_cn.blog}驻足凝听我的臆语。虽然有 ${links.zh_cn.twitter} 账号，但我现在更倾向于把零碎心情分享到自己的 ${links.zh_cn.telegram_channel}。我还有在${links.zh_cn.douban}标记书影音的习惯。如果你想联系我，可以给我${links.zh_cn.email}或${links.zh_cn.telegram}。`,
      `我对各种技术都充满好奇，但当下正专注于 Web 领域，目前以前端开发工程师的身份就职于搜狐(北京)公司。我通常使用 ${links.zh_cn.github} 托管开源项目，另外，我还公开了一些开发过程中积累的${links.zh_cn.notes}，如果你也是开发者，不妨去留下你的足迹。假如你正巧在招贤纳士，也欢迎瞄一眼我的${links.zh_cn.resume}。`,
      `尽管平平无奇，但仍然希望这个世界的运行轨迹能因我而发生一丝偏转。我正在努力。`,
    ],
  },
  {
    locale: { key: 'en', htmlLang: 'en' },
    targetFileName: 'index.html',
    name: 'AIDEN ZHAO',
    descriptions: [
      `A post-90s developer living in Beijing, a huge fan of ACG culture and classic rock music. Always believe in Danshari and keeping my desktop and room clean. I'm also a logo-free clothing guy.`,
      `You can listen to my meaningless talk on my ${links.en.blog}. I use ${links.en.twitter}, but currently I usually post my brain flash on my ${links.en.telegram_channel}. Plus, I have a hobby that I will rate every book, drama, or movie at ${links.en.douban}. If you want to contact me, please send me an ${links.en.email} or start a chat at ${links.en.telegram}.`,
      `I am interested in every computer technology but now I'm focused on the Web area. Currently, I'm working as a frontend developer at ${links.en.sohu} located in Beijing. I use ${links.en.github} like most developers. You can also move to the public ${links.en.notes} I accumulated during my developing life, all friendly comments are welcomed. BTW, if you are still hiring, why not take a minute on my ${links.en.resume}.`,
      `Ordinary and silly as I am, I'm still hoping that I will be able to bring some small changes to the world, even just tiny little ones. I'm always on the road.`,
    ],
    // descriptions: [
    //   `I'm a post-90s guy who still has dreams to chase. Always believe in <a href="https://en.wiktionary.org/wiki/%E6%96%AD%E6%8D%A8%E9%9B%A2" target="_blank">Danshari</a> and keeping my room tidy and clean. Plus, I'm also a huge fan of ACG culture and classic rock music.`,
    //   `Currently, I'm working as a front-end developer at <a href="https://www.sohu.com/" target="_blank">Sohu</a> located in Beijing. <a href="https://vuejs.org/" target="_blank">Vue</a> and <a href="https://mp.weixin.qq.com/cgi-bin/wx" target="_blank">Wechat Miniprogram</a> are what I usually use to do the programming. Although I haven't made any achievements in the field yet, computer technologies will always be my passion.`,
    //   `Ordinary and silly as I am, I'm still hoping that I will be able to bring some small changes to the world, even just tiny little ones. Ultimately, no matter how tough life gets, I'm always on the road.`,
    // ],
  },
];
