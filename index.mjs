import pc from 'picocolors'
import fs from 'node:fs'
import path from 'node:path'

const PATH = './commands'

console.log(pc.green('Available Dummy Commands: ' + '\n'))

fs.readdir(PATH, (err, files) => {
  if (err) {
    console.log('Error reading files')
    process.exit(1)
  }
  files.forEach(file => {
    const filePath = path.join(PATH, file)
    console.log(`--- ${path.parse(filePath).name}`)
  })
  console.log()
})
