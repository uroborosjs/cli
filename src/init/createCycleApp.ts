import { statSync } from 'fs'

type Path = string

type DirectoryExists =
  (path: Path) => boolean
const directoryExists: DirectoryExists =
  (path) =>
    statSync(path).isDirectory()

type AppName = string
type Flavor =
  'browser'

type CreateCycleApp =
  (currentDirectoryPath: Path) =>
    ( name: AppName
    , flavor: Flavor
    ) => void
const createCycleApp: CreateCycleApp =
  (currentDirectoryPath) =>
    (name, flavor = 'browser') => {
      console.log(currentDirectoryPath)
      console.log(name)
      console.log(flavor)
    }

export
{ createCycleApp
}
