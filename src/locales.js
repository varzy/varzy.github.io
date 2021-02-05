module.exports = [
  {
    locale: { key: 'zh_cn', htmlLang: 'zh-cmn-Hans' },
    targetFileName: 'index.html',
    name: '赵 越',
    descriptions: [
      `进击的普通人。`,
      `Web 开发工程师，目前在搜狐写前端。对大部分技术充满兴趣，但愚笨不堪，情商有拙，挣钱无术，`,
    ],
    contact: {
      title: 'Contact',
      list: [
        { icon: 'fas fa-inbox', href: 'mailto:i@yuezhao.me', label: 'i@yuezhao.me' },
        {
          icon: 'fab fa-telegram-plane',
          href: 'https://t.me/varzy',
          label: '@varzy',
          target: '_blank',
        },
      ],
    },
    links: {
      title: 'Links',
      list: [
        {
          icon: 'fab fa-github',
          label: 'Github',
          href: 'https://github.com/varzy',
          target: '_blank',
        },
        { icon: 'fas fa-blog', label: '博客', href: 'https://varzy.me/blog/' },
        { icon: 'fas fa-user-astronaut', label: '简历', href: 'https://varzy.me/resume/' },
        {
          icon: 'fab fa-twitter',
          label: 'Twitter',
          href: 'https://twitter.com/varzyme',
          target: '_blank',
        },
        {
          icon: 'fas fa-film',
          label: '豆瓣',
          href: 'https://www.douban.com/people/179641263/',
          target: '_blank',
        },
      ],
    },
  },
  {
    locale: { key: 'en', htmlLang: 'en' },
    targetFileName: 'en.html',
    name: 'AIDEN ZHAO',
    descriptions: [`Test test.<b>123321312</b>`, `12312312`],
    contact: {
      title: 'Contact',
      list: [
        { icon: 'fas fa-inbox', href: 'mailto:i@yuezhao.me', label: 'i@yuezhao.me' },
        {
          icon: 'fab fa-telegram-plane',
          href: 'https://t.me/varzy',
          label: '@varzy',
          target: '_blank',
        },
      ],
    },
    links: {
      title: 'Links',
      list: [
        { icon: 'fab fa-github', label: 'Github', href: 'https://github.com/varzy' },
        { icon: 'fas fa-blog', label: 'Blog', href: 'https://varzy.me/blog/' },
        { icon: 'fas fa-user-astronaut', label: 'Resume', href: 'https://varzy.me/resume/' },
        { icon: 'fab fa-twitter', label: 'Twitter', href: 'https://twitter.com/varzyme' },
        {
          icon: 'fas fa-film',
          label: 'Douban',
          href: 'https://www.douban.com/people/179641263/',
          target: '_blank',
        },
      ],
    },
  },
];
