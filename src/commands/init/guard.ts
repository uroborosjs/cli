import
{ F
, S
} from 'lambal'
import
{ InitArg
} from './types'

const promiseIfy = (val:any) => Promise.resolve(val)
const rejectIfy = (val:any) => Promise.reject(new Error(val))

const firstGuard = promiseIfy
const secondGuard = promiseIfy
const thirdGuard = rejectIfy

const trGuard =
  F.compose
    (thirdGuard)
    (S.prefix('Error:'))

type Guard = (initArg: InitArg) => Promise<void>
const guard: Guard =
  (initArg) =>
    Promise
      .resolve(initArg)
      .then(firstGuard)
      .then(secondGuard)
      // .then(trGuard)

export
{ guard
}
