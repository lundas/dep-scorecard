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

  const depRows = exports.buildDependecyArray(dependencies);
  const devDepRows = exports.buildDependecyArray(devDependencies);
  const depArray = Promise.all([depRows, devDepRows]);

  depArray
    .then((results) => {
      res.status(200).json({ dependencies: results[0], devDependencies: results[1] });
    })
    .catch((err) => {
      console.log('Error assembling dependency array:', err);
      res.sendStatus(500);
    });
};

exports.buildDependecyArray = (dependencyObj) => Promise.all(
  Object.keys(dependencyObj).map(async (key) => {
    const obj = {
      name: key,
      version: dependencyObj[key],
      score: await models.getProjectData(key, dependencyObj[key].slice(1))
        .then((results) => (results.data.scorecard ? results.data.scorecard.overallScore : null))
        .catch((err) => console.log(`Error getting score for ${key}`, err)),
      defaultVersion: await models.getPackageData(key)
        .then((results) => results.data.versions.filter((v) => v.isDefault)[0])
        .then((result) => result.versionKey.version)
        .catch((err) => console.log(`Error getting defaultVersion in ${key}`, err)),
      recommend: null,
    };
    return obj;
  }),
);
