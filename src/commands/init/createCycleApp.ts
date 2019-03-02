import { statSync } from 'fs'

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
