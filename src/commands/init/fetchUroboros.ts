import
{ compose
} from 'rambda'
import
{ InitArg
, Platform
, Question
} from './types'

import
{ forceAbsolutePath
} from 'utils/path'

type FilePath = string
type FetchFile =
  (platform: Platform) =>
    (location: FilePath) => FilePath
const fetchFile: FetchFile =
  (platform) =>
    (location) =>
      (platform === 'local') ? forceAbsolutePath(`${location}/uroboros.js`)
      : ''

type ImportFile<T> = (filePath: FilePath) => Promise<T>
const importFile: ImportFile<any> = (filePath: FilePath) => import(filePath)

type FetchAndImport = (platform: Platform) => (locaction: string) => Promise<UroborosExports>
const fetchAndImport: FetchAndImport =
  (platform) =>
    compose
    ( importFile
    , fetchFile(platform)
    )

type UroborosExports =
  { questions: Question[]
  , setup: (obj: object) => void
  }
type FetchUroboros = (initArg: InitArg) => Promise<UroborosExports>
const fetchUroboros: FetchUroboros =
  async ({platform, project}) => fetchAndImport(platform) (project)

export
{ fetchUroboros
}
