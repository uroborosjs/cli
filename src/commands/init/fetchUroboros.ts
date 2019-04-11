import
{ F
} from 'lambal'
import
{ InitArg
, Question
} from './types'

import
{ forceAbsolutePath
} from 'utils/path'

type FilePath = string
type ImportFile<T> = (filePath: FilePath) => Promise<T>
const importFile: ImportFile<any> = (filePath: FilePath) => import(filePath)

type MakeLocalPath = (outDir: string) => string
const makeLocalPath: MakeLocalPath = (outDir: string) => forceAbsolutePath(`${outDir}/uroboros.js`)

type FetchAndImport = (outDir: string) => Promise<UroborosExports>
const fetchAndImport: FetchAndImport =
  F.compose
  (importFile)
  (makeLocalPath)

type UroborosExports =
  { questions: Question[]
  , setup: (obj: object) => void
  }
type FetchUroboros = <T extends InitArg>(initArg: T) => Promise<UroborosExports>
const fetchUroboros: FetchUroboros =
  async ({outDir}) => fetchAndImport (outDir)

export
{ UroborosExports
, fetchUroboros
}
