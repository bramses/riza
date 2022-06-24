// read a json file and return the data
import fs from "fs";


const readFile = async (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};



export {
    readFile,
}