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
  const depArray = exports.buildDependecyArray(allDeps)
    .then((results) => (
      results.map((result) => (
        [
          result && result[0] ? result[0].data : null,
          result && result[1] ? result[1].data : null,
        ]
      ))
    ));

  depArray
    .then((results) => {
      res.status(201).json(results);
    })
    .catch((err) => {
      console.log('Error assembling dependency array:', err);
      res.sendStatus(500);
    });
};

exports.buildDependecyArray = (dependencyObj) => {
  const pkgs = Object.keys(dependencyObj);
  const data = pkgs.map((pkg) => (
    // models.getProjectData(pkg, dependencyObj[pkg].slice(1))
    models.getProjectData(pkg, dependencyObj[pkg].slice(1))
  ));
  return Promise.all(data);
};
