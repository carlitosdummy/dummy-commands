import fs from 'node:fs/promises'
import pc from 'picocolors'
import { highlight } from 'cli-highlight'

const pathPassed = process.argv[2]

if (!pathPassed) {
  console.error(pc.red('You should pass any file to read it.'))
  process.exit(1)
}

async function cat (pathToFile) {
  try {
    const data = await fs.readFile(pathToFile, 'utf-8')
    const highlighted = highlight(data)
    console.log('\n------------------------------------------------------------------------------------------------------------------------------------ \n')
    console.log(highlighted)
    console.log('\n------------------------------------------------------------------------------------------------------------------------------------ \n')
  } catch {
    console.error(pc.red("That file doesn't exist."))
    process.exit(1)
  }
}

cat(pathPassed)
