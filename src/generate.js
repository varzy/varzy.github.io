const fs = require('fs');
const path = require('path');
const pug = require('pug');
const locales = require('./locales');

const pugToHtml = pug.compileFile(path.resolve(__dirname, './templates/index.pug'), {
  pretty: true,
});

locales.forEach((locale) => {
  fs.writeFileSync(path.resolve(__dirname, './html/' + locale.outputFile), pugToHtml(locale.locals));
});
