// https://medium.com/@kalin.chernev/reflecting-on-node-js-design-patterns-6cc6eaa584
// Example 1
/*
function readFiles(files, cb) {
  if (files.length) {
    cb(null, files);
  } else {
    cb('no files supplied');
  }
}

readFiles(process.argv.slice(2), (err, data) => {
  if (err) return console.error(err);
  return console.log(data);
});
*/

// Example 2
/*
const { EventEmitter } = require('events');
const path = require('path');

function findMoreFiles(files, extension) {
  const emitter = new EventEmitter();
  if (files.length === 0) {
    // yield an error
    emitter.emit('error', 'no files supplied');
  }

  function checkFiles() {
    files.forEach((file) => {
      if (path.extname(file) === extension) {
        //   yield a result
        emitter.emit('match', file);
      }
    });
  }

  // Ask the event loop to loop through our loop ...
  process.nextTick(checkFiles);

  // For chainability on on()
  return emitter;
}

findMoreFiles(process.argv.slice(2), '.js')
  .on('match', file => console.log(`${file} is a match`))
  .on('error', err => console.log(`Error emitted: ${err.message}`));
*/

// Example 3
/**
 * Dependencies
 */
const { EventEmitter } = require('events')
const path = require('path')

/**
 * Definition
 */
class FindFiles extends EventEmitter {
  constructor(extension) {
    super()
    this.extension = extension
    this.files = []
  }

  addFile(file) {
    this.files.push(file)
    return this // Allows method chaining
  }

  // Check for matches
  findFiles() {
    process.nextTick(() => {
      this.files.forEach(file => {
        if (path.extname(file) === this.extension) {
          this.emit('match', file)
        }
      })
    })
    return this
  }
}

// Instantiation of observable object
const FindFilesSearcher = new FindFiles('.js')

// Implementation
FindFilesSearcher.addFile('file1.js')
  .addFile('file2.md')
  .addFile('file3.js')
  .findFiles()
  .on('match', console.log)
  .on('error', err => console.error(err))
