const fs = require('fs');
function tail(fileName, done) {
fs.readFile(`./${fileName}`, (error, fileContents) => {
  if (error) {
    throw error
  }
  let stringFiles = String(fileContents).split('\n');
  let fileOutput = stringFiles.slice(stringFiles.length - 10).join('\n');
  done(fileOutput);
})
}
module.exports = tail;
