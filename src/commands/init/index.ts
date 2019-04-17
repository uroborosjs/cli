import
{ F
, O
} from 'lambal'
import
{ tapPromise
, assocPromise
, mergePromise
} from 'utils/promise-helpers'

import
{ InitArg
, Question
} from './types'
import { guard } from './guard'
import { fetchUroboros } from './fetchUroboros'
import { ask } from './ask'
import { fetchProject } from './fetchProject'
import { run } from './run'
import { forceAbsolutePath } from 'utils/path';

type AskQuestions = (arg: {questions: Question[]}) => Promise<any>
const askQueststiones: AskQuestions =
  F.compose
  (ask)
  (O.prop ('questions'))

const switchRootDir =
  F.compose
  (process.chdir)
  (forceAbsolutePath)

type SwitchToNewProjectDir = (arg: {outDir: string}) => void
const switchToNewProjectDir: SwitchToNewProjectDir =
  F.compose
  (switchRootDir)
  (O.prop ('outDir'))

type Init = (arg: InitArg) => Promise<void>
const init: Init =
  (arg) =>
    Promise
      .resolve(arg)
      .then(tapPromise(guard))
      .then(tapPromise(fetchProject))
      .then(mergePromise(fetchUroboros))
      .then(assocPromise('answer') (askQueststiones))
      .then(tapPromise(switchToNewProjectDir))
      .then(tapPromise(run))
      .then(() => {})
      .catch(console.error)

export
{ init
}
