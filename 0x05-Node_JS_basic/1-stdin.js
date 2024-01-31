const { spawn } = require('node:child_process');

const childproc = spawn('cat');

process.stdin.pipe(childproc.stdin);

console.log('Welcome to Holberton School, what is your name?');

childproc.stdout.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
});

childproc.on('exit', () => {
  console.log('This important software is now closing');
});
