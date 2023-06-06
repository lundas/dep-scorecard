const axios = require('axios');

exports.getPackageData = (name, system = 'npm') => axios.get(`${process.env.URL}/systems/${system}/packages/${encodeURIComponent(name)}`);

exports.getVersionData = (name, version, system = 'npm') => axios.get(`${process.env.URL}/systems/${system}/packages/${encodeURIComponent(name)}/versions/${version}`);

exports.getProjectData = (name, version, system = 'npm') => exports.getVersionData(name, version, system)
  .then((results) => {
    const sourceRepo = results.data.links.filter((link) => link.label === 'SOURCE_REPO')[0].url;
    const sourceUrl = new URL(sourceRepo);
    const projectKeyId = `${sourceUrl.hostname}${sourceUrl.pathname.split('.')[0]}`;
    return axios.get(`${process.env.URL}/projects/${encodeURIComponent(projectKeyId)}`);
  })
  .catch((err) => console.log('Error getting Project Data', err));
