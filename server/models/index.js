const axios = require('axios');
const Package = require('../../db');

exports.getPackageData = (name, system = 'npm') => axios.get(`${process.env.URL}/systems/${system}/packages/${encodeURIComponent(name)}`);

exports.getVersionData = (name, version, system = 'npm') => axios.get(`${process.env.URL}/systems/${system}/packages/${encodeURIComponent(name)}/versions/${version}`);

exports.getProjectData = (name, version, system = 'npm') => exports.getVersionData(name, version, system)
  .then((results) => {
    const sourceRepo = results.data.links.filter((link) => link.label === 'SOURCE_REPO')[0].url;
    const sourceUrl = new URL(sourceRepo);
    const projectKeyId = `${sourceUrl.hostname}${sourceUrl.pathname.split('.')[0]}`;
    return axios.get(`${process.env.URL}/projects/${encodeURIComponent(projectKeyId)}`);
  });

exports.insertPackage = (name, version, repository, homepage, dependencies, devDependencies) => {
  const depArray = Object.keys(dependencies).map((key) => (
    { name: key, version: dependencies[key] }
  ));
  const devDepArray = Object.keys(devDependencies).map((key) => (
    { name: key, version: devDependencies[key] }
  ));
  const document = {
    name,
    version,
    repository: repository.url,
    homepage,
    dependencies: depArray,
    devDependencies: devDepArray,
  };
  Package.create(document);
};
