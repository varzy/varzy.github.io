const fs = require('fs');
const path = require('path');
const pug = require('pug');
const locales = require('./locales');

const renderFn = pug.compileFile(path.resolve(__dirname, './template.pug'), {
  pretty: true,
});

locales.forEach((locale) => {
  fs.writeFileSync(
    path.resolve(__dirname, './templates/' + locale.targetFileName),
    renderFn(locale)
  );
});
