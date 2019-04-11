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
} from './types'
import { guard } from './guard'
import { fetchUroboros } from './fetchUroboros'
import { ask } from './ask'
import { fetchProject } from './fetchProject'
import { run } from './run'
import { forceAbsolutePath } from 'utils/path';

const askQueststiones =
  F.compose
  (ask)
  (O.prop ('questions'))

const switchRootDir =
  F.compose
  (process.chdir)
  (forceAbsolutePath)

const switchToNewProjectDir =
  F.compose
  (switchRootDir)
  (O.prop('outDir'))

type Init = (arg: InitArg) => Promise<void>
const init: Init =
  (arg) =>
    Promise
      .resolve(arg)
      .then(tapPromise(guard))
      .then(mergePromise(fetchUroboros))
      .then(assocPromise('answer') (askQueststiones))
      .then(tapPromise(fetchProject))
      .then(tapPromise(switchToNewProjectDir))
      .then(tapPromise(run))
      .then(() => {})
      .catch(console.error)

export
{ init
}
