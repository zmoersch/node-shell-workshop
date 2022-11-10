//Output a prompt
process.stdout.write('prompt > ');

const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline
  let cmdArr = cmd.split(' ')
  if (cmdArr[0] === 'cat') {
    cat(cmdArr[1], done)
  } else
  if (cmd == 'pwd') {
    pwd(done);
  } else if (cmd == 'ls') {
    ls(done);
  } else {
  process.stdout.write('You typed: ' + cmd)
  process.stdout.write('\nprompt > ');}
});

const done = (output) => {
  process.stdout.write(output)
  process.stdout.write('\nprompt > ');
}
