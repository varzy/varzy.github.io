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
  },
};

module.exports = [
  {
    locale: { key: 'zh_cn', htmlLang: 'zh-cmn-Hans' },
    targetFileName: 'zh.html',
    name: '赵 越',
    descriptions: [
      `90后，现居北京。断舍离主义者，ACG 爱好者，欧美老摇滚爱好者，以及半个完美主义者。喜欢简洁的桌面和无 LOGO 的衣服，睡醒了会叠被子。`,
      `你可以在我的${links.zh_cn.blog}聆听我的呓语，虽然我有 ${links.zh_cn.twitter} 账号，但现在更经常在我的 ${links.zh_cn.telegram_channel} 分享我的所见所闻所思。我还有在${links.zh_cn.douban}标记我看过的书影音的习惯。如果你想联系我，可以${links.zh_cn.email}或${links.zh_cn.telegram}。`,
      `我目前就职于北京搜狐公司，暂时擅长 Web 前端方向。我通常使用 ${links.zh_cn.github} 托管代码。另外，我还公开了一些开发过程中积累的${links.zh_cn.notes}，如果你也是开发者，不妨去看一看。如果你正巧在招贤纳士，也可以看看我的${links.zh_cn.resume}。`,
      `尽管平平无奇，但仍然希望这个世界的运行轨迹能因我而发生一丝偏转。我正在努力。`,
    ],
  },
  {
    locale: { key: 'en', htmlLang: 'en' },
    targetFileName: 'index.html',
    name: 'AIDEN ZHAO',
    descriptions: [``],
    descriptionsOld: [
      `I'm a post-90s guy who still has dreams to chase. Always believe in <a href="https://en.wiktionary.org/wiki/%E6%96%AD%E6%8D%A8%E9%9B%A2" target="_blank">Danshari</a> and keeping my room tidy and clean. Plus, I'm also a huge fan of ACG culture and classic rock music.`,
      `Currently, I'm working as a front-end developer at <a href="https://www.sohu.com/" target="_blank">Sohu</a> located in Beijing. <a href="https://vuejs.org/" target="_blank">Vue</a> and <a href="https://mp.weixin.qq.com/cgi-bin/wx" target="_blank">Wechat Miniprogram</a> are what I usually use to do the programming. Although I haven't made any achievements in the field yet, computer technologies will always be my passion.`,
      `Ordinary and silly as I am, I'm still hoping that I will be able to bring some small changes to the world, even just tiny little ones. Ultimately, no matter how tough life gets, I'm always on the road.`,
    ],
  },
];
