// import
// {} from './types'

type Setup<T> = (obj: T) => void
type Answer<T> = T
type RunArg<T> =
  Record<'setup', Setup<T>>
  & Record<'answer', Answer<T>>
type Run = <T>(arg: RunArg<T>) => Promise<void>
const run: Run =
  ({setup, answer}) =>
    Promise.resolve(answer)
      .then(setup)

export
{ run
}
