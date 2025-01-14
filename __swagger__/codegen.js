/* eslint-disable @typescript-eslint/no-var-requires */
const { codegen } = require('swagger-axios-codegen');
const axios = require('axios');
const _ = require('lodash');

const { resolve: pathResolve } = require('path');
// const fs = require('fs');
// const { exec } = require('child_process');

const timeout = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

// const config = readEnv();
const outputDir = `./src/services`;
// exec(`npx rimraf ${outputDir}`)
codegen({
  remoteUrl: 'http://121.37.5.233:53301/api/v2/api-docs',
  methodNameMode: 'operationId',
  modelMode: 'interface',
  strictNullChecks: false,
  outputDir,
  // fileName: `index.ts`,
  sharedServiceOptions: true,
  // extendDefinitionFile: './customerDefinition.ts',
});
