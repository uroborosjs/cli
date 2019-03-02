// import
// { mod } from 'shades'
import
{ compose
, tap
, path
, pick
} from 'rambda'
import
{ tapPromise
, assocPromise
, mergePromise
} from 'utils/promise-helpers'

import
{ Platform
, Project
, InitArg
} from './types'
import { guard } from './guard'
import { fetchUroboros } from './fetchUroboros'
import { ask } from './ask'
import { fetchProject } from './fetchProject'
import { run } from './run'

type AppName = string
type Flavor =
  'browser'

type Check = () => Promise<void>

const askQuestions =
  compose
  ( ask
  , path('questions')
  )

const runSetup =
  compose<any, any, any, any>
  ( run
  , tap(console.log)
  , pick('setup,answer')
  )
// const fetchUroborosLens =
//   { get: ({platform, project}) => ({ platform, project })
//   , mod: ({questions, setup}) => (prev) => ({...prev, questions, setup})
//   }
const mergeNameInToAnswer =
  (obj:any) => (
    { ...obj
    , answer:
      { ...obj.answer
      , name: obj.name
      }
    }
  )

const switchToNewProjectDir =
  compose
  ( (newProjectDir: string) => { process.chdir(newProjectDir) }
  , path('name')
  )
  // ({name}:any) => Promise.resolve.then(() => {process.chdir('')})

type Init = (arg: InitArg) => Promise<void>
const init: Init =
  (arg) =>
    Promise
      .resolve(arg)
      .then(tapPromise(guard))
      .then(mergePromise(fetchUroboros))
      .then(assocPromise('answer') (askQuestions))
      .then(mergeNameInToAnswer)
      .then(tapPromise(fetchProject))
      .then(tapPromise(switchToNewProjectDir))
      .then(tapPromise(runSetup))
      .then(console.log)

export
{ init
}
