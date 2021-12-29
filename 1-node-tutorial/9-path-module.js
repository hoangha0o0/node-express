const path = require('path')

console.log(path.sep)

const filename = path.join('/content/', 'subfolder', 'text.txt')
const base = path.basename(filename)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
const absolute1 = path.join(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)
console.log(absolute1)