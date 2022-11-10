const fs = require('fs');
function uniq(fileName, done) {
fs.readFile(`./${fileName}`, (error, fileContents) => {
  if (error) {
    throw error
  }
  let outputArray = [];
  let fileArray = String(fileContents).split('\n');
  for (let i = 0; i < fileArray.length; i++) {
    if (!outputArray.includes(fileArray[i])) {
      outputArray.push(fileArray[i]);
    }
  }
  done(outputArray.join('\n'));
})
}
module.exports = uniq;
