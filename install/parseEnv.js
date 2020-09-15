const envName = process.argv[2]

if (!envName) {
  throw new Error('no env name passed to parseEnv')
}

const outputs = (process.env[envName] || '').split('\n')

if (envName == 'OPENCV4NODEJS_INCLUDES' && process.env[envName] === undefined) {
  console.log('install','NODE_ENV is '+process.env.NODE_ENV);
  console.warn('OPENCV4NODEJS_INCLUDES is empty. Build may fail when referencing opencv2/* without relevant environment configuration.');
}
outputs.forEach(o => console.log(o))