const fs = require("fs");
const path = require("path");
const pug = require("pug");

const renderFn = pug.compileFile(path.resolve(__dirname, "./templates/index.pug"), {
  pretty: true,
});

const config = [
  {
    locale: { key: "zh_cn", htmlLang: "zh-cmn-Hans", label: "中" },
    targetFileName: "index.html",
    name: "赵 越",
    desc: `进击的普通人.<b>123321312</b>`,
    contact: {
      title: "CONTACT",
      list: [
        { icon: "mailbox", href: "mailto:i@yuezhao.me", label: "i@yuezhao.me" },
        { icon: "telegram", href: "", label: "@varzy", target: "_blank" },
      ],
    },
    more: {
      title: "MORE",
      list: [{ label: "" }],
    },
  },
  {
    locale: { key: "en", htmlLang: "en", label: "ENG" },
    targetFileName: "en.html",
    name: "AIDEN ZHAO",
    desc: `Test test.<b>123321312</b>`,
    contact: {
      title: "CONTACT",
      list: [
        { icon: "mailbox", href: "mailto:i@yuezhao.me", label: "i@yuezhao.me" },
        { icon: "telegram", href: "", label: "@varzy", target: "_blank" },
      ],
    },
    more: {
      title: "MORE",
      list: [{ label: "" }],
    },
  },
];

config.forEach((target) => {
  fs.writeFileSync(
    path.resolve(__dirname, "./templates/" + target.targetFileName),
    renderFn(target)
  );
});
