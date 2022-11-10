const fs = require('fs');
function sort(fileName, done) {
fs.readFile(`./${fileName}`, (error, fileContents) => {
  if (error) {
    throw error
  }
  let fileOutput = String(fileContents).split('\n').sort().join('\n');
  done(fileOutput);
})
}
module.exports = sort;
