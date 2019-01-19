import jsonfile from 'jsonfile';
import moment from 'moment';

export const getPackage = (packagePath) => {
  return new Promise((resolve, reject) => {
    return jsonfile.readFile(packagePath, (err, pkg) => {
      if (err) throw err;
      resolve(pkg);
    });
  });
};

export const updatePackage = (packagePath, pkg, buildNumber, updateDate) => {
  return new Promise((resolve, reject) => {
    if (updateDate) {
      pkg.buildDate = moment().format('DD/MM/YYYY');
    }
    if (buildNumber) {
      pkg.buildNumber = buildNumber;
    }
    jsonfile.writeFileSync(packagePath, pkg, { spaces: 2 });
    resolve(pkg);
  });
};
