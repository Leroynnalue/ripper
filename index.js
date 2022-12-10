const fs = require("fs");
const path = require("path");

function ripper(filepath, savePath) {
  fs.readFile(filepath, "utf8", (err, content) => {
    const contentRegexExp = /\/\*[\s\S]*?\*\/|\/\/.*/g;
    let newContent = content.replace(contentRegexExp, "");

    const saved = fs.existsSync(savePath);
    if (saved) fs.unlinkSync(savePath);

    fs.appendFile(savePath, newContent, (err) => {
      if (err) throw err;
      console.log("The File Has Been Saved");
    });
  });
}

module.exports = ripper;
