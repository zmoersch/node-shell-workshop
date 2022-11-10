const fs = require('fs');
function cat(fileName, done) {
fs.readFile(`./${fileName}`, (error, fileContents) => {
  if (error) {
    throw error
  }
  done(fileContents)

})
}
module.exports = cat
