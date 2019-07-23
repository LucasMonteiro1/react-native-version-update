import fetch from 'node-fetch';

export const getVersionNumber = (builderPath) => {
  return fetch(`https://version-builder.herokuapp.com/builder/${builderPath}`).then((response) => {
    if (response.ok) {
      return response.text();
    }
    throw new Error('Fetch version number failed');
  });
};

export const nextVersionNumber = (builderPath) => {
  return fetch(`https://version-builder.herokuapp.com/builder/${builderPath}/next`).then((response) => {
    if (response.ok) {
      return response.text();
    }
    throw new Error('Next version number failed');
  });
};
