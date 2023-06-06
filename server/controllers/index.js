const models = require('../models');

exports.processFile = (req, res) => {
  const {
    name,
    version,
    // description,
    // main,
    // scripts,
    // repository,
    // author,
    // license,
    // bugs,
    // hompage,
    devDependencies,
    dependencies,
  } = JSON.parse(req.file.buffer.toString());

  const depRows = Promise.all(Object.keys(dependencies).map((key) => {
    const obj = {
      name: key,
      version: dependencies[key],
      score: models.getProjectData(key, dependencies[key].slice(1))
        .then((results) => results.data.scorecard.overallScore)
        .catch((err) => console.log(`Error getting score for ${key}`, err)),
      defaultVersion: models.getPackageData(key)
        .then((results) => results.data.versions.filter((v) => v.isDefault)[0])
        .then((result) => result.versionKey.version)
        .catch((err) => console.log(`Error getting defaultVersion in ${key}`, err)),
      recommend: null,
    };
    return obj;
  }));

  depRows.then((results) => results.forEach((result) => console.log('results data', result)));
  res.status(200).send('got your request, bruh');
};
