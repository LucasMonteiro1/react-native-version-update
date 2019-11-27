import path from 'path';
import fs from 'fs';
import plist from 'plist';
import chalk from 'chalk';
import jsonfile from 'jsonfile';

export const setVersionIOS = async (basePath, pkg) => {
  const appPath = path.resolve(basePath, 'app.json');

  if (!fs.existsSync(appPath)) return console.log(chalk.red('app.json not found'));
  const app = jsonfile.readFileSync(appPath);

  await changeInfoPList(path.resolve(basePath, 'ios', app.name, 'Info.plist'), pkg);
  await changeInfoPList(path.resolve(basePath, 'ios', `${app.name}-tvOS`, 'Info.plist'), pkg);
  await changeInfoPList(path.resolve(basePath, 'ios', `${app.name}-tvOSTests`, 'Info.plist'), pkg);
  await changeInfoPList(path.resolve(basePath, 'ios', `${app.name}Tests`, 'Info.plist'), pkg);
  await changeInfoPList(path.resolve(basePath, 'ios', 'OneSignalNotificationServiceExtension', 'Info.plist'), pkg);
};

const changeInfoPList = (caminhoArquivo, pkg) => {
  if (!fs.existsSync(caminhoArquivo)) return;

  const infoPlist = plist.parse(fs.readFileSync(caminhoArquivo, 'utf8'));
  infoPlist.CFBundleShortVersionString = pkg.version;

  if (pkg.buildNumber) {
    infoPlist.CFBundleVersion = String(pkg.buildNumber);
  }

  return new Promise((resolve, reject) => {
    return fs.writeFile(caminhoArquivo, plist.build(infoPlist), (err) => {
      if (err) reject(err);
      console.log(chalk.yellow(`File ${caminhoArquivo} changed`));
      resolve();
    });
  });
};
