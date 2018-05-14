import fs from 'fs-extra-promise'; // eslint-disable-line import/no-extraneous-dependencies

const copySchemaToProject = async () => {
  try {
    await fs.copy('./data', '../ReactNavigationRelayModern/data');

    console.info('Schema successfully copied to ReactNavigationRelayModern');
  } catch (error) {
    console.error('There was an error while trying to copy schema to ReactNavigationRelayModern', error);
  }
};

copySchemaToProject();
