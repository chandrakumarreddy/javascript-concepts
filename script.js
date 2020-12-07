const fs = require("fs");
// const util = require("util");

// function readFile(filename, encoding) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filename, encoding, (error, contents) => {
//       if (error) reject(error);
//       resolve(contents);
//     });
//   });
// }

// readFile(__filename, "utf-8").then((content) => {
//   console.log(content);
// });
function promisify(fn) {
  const _this = this;
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn.call(_this, ...args, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  };
}

// const readFile = util.promisify(fs.readFile);
const readFile = promisify(fs.readFile);
readFile(__filename, "utf-8").then((content) => {
  console.log(content);
});
