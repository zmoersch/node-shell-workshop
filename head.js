const fs = require('fs');
function head(fileName, done) {
fs.readFile(`./${fileName}`, (error, fileContents) => {
  if (error) {
    throw error
  }
  let fileOutput = String(fileContents).split('\n').slice(0, 10).join('\n');
  done(fileOutput);
})
}
module.exports = head
