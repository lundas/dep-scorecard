const axios = require('axios');
const Package = require('../../db');

exports.getPackageData = (name, system = 'npm') => (
  axios.get(
    `${process.env.DEPS_URL}/systems/${system}/packages/${encodeURIComponent(name)}`,
  )
);

exports.getVersionData = (name, version, system = 'npm') => (
  axios.get(
    `${process.env.DEPS_URL}/systems/${system}/packages/${encodeURIComponent(name)}/versions/${version}`,
  )
);

exports.getScorecard = (url) => (
  axios.get(
    `${process.env.OSSF_URL}/projects/${url}`,
  )
);

exports.getProjectData = async (name, version, system = 'npm') => {
  let versionReq;
  let sourceRepo;
  let sourceUrl;
  let projectKeyId;
  let OssfReq;
  try {
    versionReq = await exports.getVersionData(name, version, system);
    sourceRepo = versionReq.data.links.filter((link) => link.label === 'SOURCE_REPO')[0].url;
    sourceUrl = new URL(sourceRepo);
    projectKeyId = `${sourceUrl.hostname}${sourceUrl.pathname.split('.')[0]}`;
    OssfReq = await exports.getScorecard(projectKeyId);
    versionReq.data.scorecard = OssfReq.data;
  } catch (err) {
    console.log(`Error getting Project Data for ${name}`);
    if (err.response) {
      console.log('*** Response Data: ', err.response.data);
      console.log('*** Response Status: ', err.response.status);
      console.log('*** Response Headers: ', err.response.headers);
    } else if (err.request) {
      console.log('*** Response Request: ', err.request);
    } else {
      console.log('*** Error', err.message);
    }
    console.log('*** Error Config', err.config);
  }
  return versionReq.data;
};

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
    date: Date.now(),
  };
  Package.create(document);
};
