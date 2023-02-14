const fs = require("fs");
const path = require("path");

fs.readdir(__dirname, (err, files) => {
if (err) {
console.error(err);
} else {
files.sort().forEach((file) => {
const filePath = path.join(__dirname, file);
fs.stat(filePath, (error, stat) => {
if (error) {
console.error(error);
} else if (stat.isFile()) {
  console.log(`File: ${file}`);

} else if (stat.isDirectory()) {
console.log(`Directory: ${file}`);
}
});
});
}
});


