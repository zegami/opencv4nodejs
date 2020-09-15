const fs = require('fs');
const envName = process.argv[2]

if (!envName) {
  throw new Error('no env name passed to parseEnv')
}

let cache = {};

if (fs.existsSync('envCache.json')) {
  cache = JSON.parse(fs.readFileSync('envCache.json'));
} else {
  console.warn('Environment cache could not be found? Did opencv4nodejs install correctly?')
}

const outputs = (process.env[envName] || cache[envName] || '').split('\n')

outputs.forEach(o => console.log(o))