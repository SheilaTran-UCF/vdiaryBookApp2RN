/* eslint-disable quotes */
/* eslint-disable no-extend-native */
/**
 * @flow
 */
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const argv = require('yargs-parser')(process.argv.slice(2));
//$FlowFixMe
String.prototype.format = function () {
  let a = this;
  for (let k in arguments) {
    //$FlowFixMe
    a = a.replace(('{' + k + '}').toRegex('g'), arguments[k]);
  }
  return a;
};
//$FlowFixMe
String.prototype.toRegex = function (option = 'i') {
  let regexStr = this.replace(/[\.\*\+\?\^\$\{\}\(\)\|\[\]\\]/g, '\\$&');
  regexStr = regexStr.replace(/\s/g, '\\s?');
  // // console.log('regex: {0}'.format(regexStr))
  return new RegExp(regexStr, option);
};
const getFileName = file => {
  var fileNameMatch = file.match(/^(.+)\.[^\.]+$/);
  return fileNameMatch && fileNameMatch[1].replace(/[\s-\+]+/g, '_');
};

// console.log(argv);
// console.log(argv._[1]);
const folder =
  (argv.folder || argv.d || argv._[0]) + (argv._[1] ? '/' + argv._[1] : '');

var match = folder.match(/^(.+\/([^\/]+))\/?$/);
//$FlowFixMe
var output = match && '{0}/{1}.tsx'.format(match[1], match[2]);
output =
  (argv.output || argv.o || output) +
  (argv._[1] ? '/' + argv._[1] : '') +
  '/index.ts';

let outputMatch = output.match(/^(?:(.*)\/)?([^\/]+)$/);
// console.log('outputMatch', outputMatch);
let outputName = outputMatch[2];
let outputPath = outputMatch[1] || '.';
// console.log(`${chalk.green('Output: ')}`, outputPath);
let requirePath = path.relative(outputPath, folder);
// console.log('requirePath', requirePath);
let author = argv.author || argv.a || 'Hung Nqo Quang';
let template = `/**
 * @author {2}
 * @flow
 */

export const {0} = {
{1}
};
`;

let moduleName = argv._[1]
  ? argv._[1][0].toUpperCase() + argv._[1].slice(1)
  : argv.name || getFileName(outputName);
// console.log('moduleName', moduleName);
fs.readdir(folder, (err, files) => {
  if (err) {
    return console.error(err);
  }
  var strCodes = [];
  files.forEach(file => {
    if (file.match(/@\dx\.(png|jpg|svg)/)) return;
    var fileName = getFileName(file);

    if (fileName && fileName !== 'index') {
      //$FlowFixMe
      strCodes.push(
        `  {0}: require('./{2}'),`.format(fileName, requirePath, file),
      );
      // console.log(strCodes);
    }
  });
  //$FlowFixMe
  let code = template.format(moduleName, strCodes.join('\n'), author);
  // console.log(code);
  fs.writeFileSync(output, code);
});
