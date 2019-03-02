import { statSync } from 'fs'
type Path = string

type DirectoryExists = (path: Path) => boolean
const directoryExists: DirectoryExists =
  (path) => statSync(path).isDirectory()

type FileExists = (path: Path) => boolean
const fileExists: FileExists =
  (path) => statSync(path).isFile()

export
{ directoryExists
, fileExists
}
