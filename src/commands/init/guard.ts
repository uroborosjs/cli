import
{ compose
} from 'rambda'

const prefix = (pre: string) => (val: string) => `${pre}/${val}`
import
{ InitArg
} from './types'

const promiseIfy = (val:any) => Promise.resolve(val)
const rejectIfy = (val:any) => Promise.reject(new Error(val))

const firstGuard = promiseIfy
const secondGuard = promiseIfy
const thirdGuard = rejectIfy

const trGuard =
  compose
  ( thirdGuard
  , prefix('Error:')
  )

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
