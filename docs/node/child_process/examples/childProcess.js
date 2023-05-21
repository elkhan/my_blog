// https://nodejs.org/api/child_process.html#child_process_child_process

const { spawn } = require('child_process')

const ls = spawn('ls', ['-lh', '/usr'])

ls.stdout.on('data', data => {
  console.log(`stdout: ${data}`)
})

ls.stderr.on('data', data => {
  console.error(`stderr: ${data}`)
})

ls.on('close', code => {
  console.log(`child process exited with code ${code}`)
})