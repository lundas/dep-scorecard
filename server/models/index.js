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
  try {
    const versionReq = await exports.getVersionData(name, version, system);
    const sourceRepo = versionReq.data.links.filter((link) => link.label === 'SOURCE_REPO')[0].url;
    const sourceUrl = new URL(sourceRepo);
    const projectKeyId = `${sourceUrl.hostname}${sourceUrl.pathname.split('.')[0]}`;
    const OssfReq = await exports.getScorecard(projectKeyId);
    return [versionReq, OssfReq];
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
};

// exports.getProjectData = (name, version, system = 'npm') => exports.getVersionData(name, version, system)
//   .then((results) => {
//     const sourceRepo = results.data.links.filter((link) => link.label === 'SOURCE_REPO')[0].url;
//     const sourceUrl = new URL(sourceRepo);
//     const projectKeyId = `${sourceUrl.hostname}${sourceUrl.pathname.split('.')[0]}`;
//     return [
//       results,
//       axios.get(`${process.env.OSSF_URL}/projects/${projectKeyId}`)
//         .catch((err) => {
//           console.log(`Error getting OSSF Score for ${name}`);
//           if (err.response) {
//             console.log('*** Response Data: ', err.response.data);
//             console.log('*** Response Status: ', err.response.status);
//             console.log('*** Response Headers: ', err.response.headers);
//           } else if (err.request) {
//             console.log('*** Response Request: ', err.request);
//           } else {
//             console.log('*** Error', err.message);
//           }
//           console.log('*** Error Config', err.config);
//         }),
//     ];
//   })
//   .catch((err) => {
//     console.log(`Error getting Version Data for ${name}`);
//     if (err.response) {
//       console.log('*** Response Data: ', err.response.data);
//       console.log('*** Response Status: ', err.response.status);
//       console.log('*** Response Headers: ', err.response.headers);
//     } else if (err.request) {
//       console.log('*** Response Request: ', err.request);
//     } else {
//       console.log('*** Error', err.message);
//     }
//     console.log('*** Error Config', err.config);
//   });

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
