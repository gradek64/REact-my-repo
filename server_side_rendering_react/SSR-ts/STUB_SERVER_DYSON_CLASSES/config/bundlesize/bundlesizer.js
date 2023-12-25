const fs = require('fs')
const childProcess = require('child_process')

function execute(command) {
  return new Promise((resolve, reject) => {
    childProcess.exec(command, (error, standardOutput, standardError) => {
      if (error) {
        reject()
        return
      }

      if (standardError) {
        reject(standardError)
        return
      }

      resolve(standardOutput)
    })
  })
}

const createMaxSize = (size) => {
  const sizeInKb = size / 1024
  // Add a bit of potential margin and then round up
  const addCeilingAndRound = Math.ceil(sizeInKb + 0.2)
  return `${addCeilingAndRound} KB`
}

const createPath = (path) => {
  const pathArray = path.split('.')
  pathArray[1] = '*'
  return pathArray.join('.')
}

fs.readdir('./dist/client/', async (err, files) => {
  if (err) {
    console.log('\x1b[31m', 'ERROR: Unable to read dist/clint folder, make sure to run `yarn build` first', '\x1b[0m')
    return
  }

  console.log(
    '\x1b[33m%s\x1b[0m',
    'WARNING: You must double check the size of the bundles after running this script!',
    '\x1b[0m',
  )

  const bundlesize = await Promise.all(
    files.map(async (file) => {
      const path = `./dist/client/${createPath(file)}`
      // Find the size of the file when gzipped
      const size = await execute(`gzip -c ./dist/client/${file} | wc -c`)
      const maxSize = createMaxSize(size)
      return { path, maxSize }
    }),
  )

  const ouputJSON = `${JSON.stringify({ files: bundlesize }, null, 2)}\n`

  fs.writeFile('./config/bundlesize/.bundlesizeconfig.json', ouputJSON, (writeError) => {
    if (writeError) {
      console.log('\x1b[31m', 'ERROR: Unable to write file', '\x1b[0m')
      return
    }
    console.log('The file has been saved!')
  })
})
