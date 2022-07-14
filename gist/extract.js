// node extract.js ./index.js
file_name = process.argv.slice(2)[0];
console.log("🪓Extracting:", file_name);

var data = require(file_name)
const fs = require('fs')
for (e in data) {
  fs.writeFileSync(e + '.json', JSON.stringify(data[e], null, 2))
  console.log(`Extracted: ./${e}.json`)
}
