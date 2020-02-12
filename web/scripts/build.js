/**
 * Copyright 2020 Panther Labs Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const { spawn } = require('child_process');
const { loadDotEnvVars, getPantherDeploymentVersion } = require('./utils');

// Mark the Node environment as production in order to load the webpack configuration
process.env.NODE_ENV = 'production';
// Generate  a `PANTHER_VERSION` that the javascript error logging function running in the browser
// is going to reference when reporting a crash
process.env.PANTHER_VERSION = getPantherDeploymentVersion();

// Add all the sentry-related ENV vars to process.env
loadDotEnvVars('web/.env.sentry');

// Add all the aws-related ENV vars to process.env
loadDotEnvVars('out/.env.aws');

spawn('node_modules/.bin/webpack', { stdio: 'inherit' });
