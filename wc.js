const fs = require('fs');
function wc(fileName, done) {
let byteCount = 0;
fs.stat(`./${fileName}`, (error, stats) => {
  if (error) {
    throw error;
  }
  byteCount = stats.size;
});
fs.readFile(`./${fileName}`, (error, fileContents) => {
  if (error) {
    throw error
  }
  let lineCount = String(fileContents).split('\n').length;
  let wordCount = String(fileContents).split(' ').length;
  done(`${lineCount} lines, ${wordCount} words, ${byteCount} bytes`);
})
}

module.exports = wc;
