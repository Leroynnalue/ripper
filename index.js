const fs = require("fs");
const path = require("path");

function ripper(filepath, savePath) {
  fs.readFile(filepath, "utf8", (err, content) => {
    const contentRegexExp = /[\*\/]/;
    let newContent = content.split(contentRegexExp);

    const saved = fs.existsSync(savePath);
    if (saved) fs.unlinkSync(savePath);

    newContent.forEach((line) => {
      fs.appendFile(savePath, line, (err) => {
        if (err) throw err;
        console.log("The File Has Been Saved");
      });
    });
  });
}

module.exports = ripper;
