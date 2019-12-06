import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

const VERSION_NAME = 'versionName ';
const VERSION_CODE = 'versionCode ';

export const setVersionAndroid = (basePath, pkg) => {
  return new Promise((resolve, reject) => {
    const buildGradlePath = path.resolve(basePath, 'android', 'app', 'build.gradle');
    if (!fs.existsSync(buildGradlePath)) return console.log(chalk.red('build.gradle not found'));

    fs.readFile(buildGradlePath, 'utf8', (err, gradle) => {
      if (err) throw err;

      gradle = gradle.set(VERSION_NAME, '"' + pkg.version + '"');
      if (pkg.buildNumber) {
        gradle = gradle.set(VERSION_CODE, pkg.buildNumber);
      }

      fs.writeFile(buildGradlePath, gradle, (err) => {
        if (err) throw err;
        console.log(chalk.yellow(`File ${buildGradlePath} changed`));
        resolve();
      });
    });
  });
};

String.prototype.set = function(procura, novo) {
  const posIni = this.indexOf(procura);
  let aux = this.slice(posIni, this.length);
  const posFim = posIni + aux.indexOf('\n');
  aux = this.slice(posIni, posFim);

  return this.replace(aux, procura + novo);
};
