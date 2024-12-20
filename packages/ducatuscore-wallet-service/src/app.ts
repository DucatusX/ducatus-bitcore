import {spawn} from 'child_process';
import async from 'async';

var scripts = [
  'messagebroker/messagebroker.js',
  'bcmonitor/bcmonitor.js',
  'emailservice/emailservice.js',
  'pushnotificationsservice/pushnotificationsservice.js',
  'fiatrateservice/fiatrateservice.js',
  'dws.js'
];

if (process.env.MODE === 'dev') {
  scripts.forEach(path => {
    require(`./${path}`);
  });  
} else {
  async.eachSeries(scripts, function(script, callback) {
    const node = spawn('node', [`${__dirname}/` + script]);
    const scriptName = script.split('/')[0].split('.')[0]
    node.stdout.on('data', data => console.log(`\x1b[35m${scriptName} \x1b[0m| ${data}`));
  
    node.stderr.on('data', data => console.error(`\x1b[35m${scriptName} \x1b[0m| ${data}`));
  
    callback();
  });
}

