import { statSync } from 'fs'

const USOBORUS_JSON_FILE_NAME = 'usoboros'

type Path = string

type DirectoryExists =
  (path: Path) => boolean
const directoryExists: DirectoryExists =
  (path) =>
    statSync(path).isDirectory()

type FileExists =
  (path: Path) => boolean
const fileExists: FileExists =
  (path) =>
    statSync(path).isFile()

type AppName = string
type Flavor =
  'browser'

type CreateCycleApp =
  (currentDirectoryPath: Path) =>
    ( name: AppName
    , flavor: Flavor
    ) => void

type Check = () => Promise<void>

const checkForProposedDir =
  (proposedAppDir: Path): Check =>
    async () => {
      if (directoryExists(proposedAppDir)) {
        throw new Error('App directory already exists: ')
      }
    }

// if (directoryExists(proposedAppDir)) {
//   throw new Error('App directory already exists: ')
// } else if (!fileExists(`${proposedAppDir}/${USOBORUS_JSON_FILE_NAME}.json`)) {
//   throw new Error(`Project dosen't seem to be a usoboros project.`)
// } else if {
// } else {
  
// }

const createCycleApp: CreateCycleApp =
  (currentDirectoryPath) =>
    (name, flavor = 'browser') => {
      const proposedAppDir = `${currentDirectoryPath}/${name}`
      console.log(currentDirectoryPath)
      console.log(name)
      console.log(flavor)
      return Promise
        .resolve()
        .then(checkForProposedDir(proposedAppDir))
        .then()
    }

export
{ createCycleApp
}
