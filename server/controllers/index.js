const models = require('../models');

exports.processFile = (req, res) => {
  const {
    name,
    version,
    // description,
    // main,
    // scripts,
    repository,
    // author,
    // license,
    // bugs,
    homepage,
    devDependencies,
    dependencies,
  } = JSON.parse(req.file.buffer.toString());

  models.insertPackage(name, version, repository, homepage, dependencies, devDependencies);

  // const depRows = exports.buildDependecyArray(dependencies);
  // const devDepRows = exports.buildDependecyArray(devDependencies);
  // const depArray = Promise.all([depRows, devDepRows]);

  const allDeps = { ...dependencies, ...devDependencies };
  const depArray = exports.buildDependecyArray(allDeps);

  depArray
    .then((results) => {
      res.status(201).json({ dependencies: results, devDependencies: [] });
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
        .catch((err) => {
          console.log(`Error getting score for ${key}`);
          if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
          } else if (err.request) {
            console.log(err.request);
          } else {
            console.log('Error', err.message);
          }
          console.log(err.config);
        }),
      defaultVersion: await models.getPackageData(key)
        .then((results) => results.data.versions.filter((v) => v.isDefault)[0])
        .then((result) => result.versionKey.version)
        .catch((err) => {
          console.log(`Error getting defaultVersion in ${key}`, err);
          if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
          } else if (err.request) {
            console.log(err.request);
          } else {
            console.log('Error', err.message);
          }
          console.log(err.config);
        }),
      recommend: null,
    };
    return obj;
  }),
);
