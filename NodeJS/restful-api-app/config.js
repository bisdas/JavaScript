/* create and export configuration variables
*
*/


// container for all the environments
const environments = {};

// production environments
environments.production = {
    'envName': 'production',
    'port': 5000
}

environments.staging = {
    'envName': 'staging',
    'port': 3000
}

//determine which enviroment was passed in the command line argument
const currentEnvironment = typeof (process.env.NODE_ENV) == 'string'
    ? process.env.NODE_ENV.toLowerCase()
    : '';

const environmentToExport = typeof (environments[currentEnvironment]) == 'object'
    ? environments[currentEnvironment]
    : environments.staging;

console.log("c", process.argv.slice(2)[0].split);

module.exports = environmentToExport;




