//Output a prompt
process.stdout.write('prompt > ');

const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const date = require('./date');
const echo = require('./echo');
const head = require('./head');
const tail = require('./tail');
const sort = require('./sort');
const wc = require('./wc');
const uniq = require('./uniq');
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
  } else if (cmd == 'date') {
    date(done);
  } else if (cmdArr[0] == 'echo') {
    echo(cmd.slice(5), done)
  } else if (cmdArr[0] == 'head') {
    head(cmdArr[1], done)
  } else if (cmdArr[0] == 'tail') {
    tail(cmdArr[1], done)
  } else if (cmdArr[0] == 'sort') {
    sort(cmdArr[1], done)
  } else if (cmdArr[0] == 'wc') {
    wc(cmdArr[1], done)
  } else if (cmdArr[0] == 'uniq') {
    uniq(cmdArr[1], done)
  } else {
  process.stdout.write('You typed: ' + cmd)
  process.stdout.write('\nprompt > ');}
});

const done = (output) => {
  process.stdout.write(output)
  process.stdout.write('\nprompt > ');
}
