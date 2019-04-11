import { O } from 'lambal'

type MergePromise =
  <T, R>(fn: (a:T) => Promise<R>) =>
    (value: T) =>
      Promise<T & R>
const mergePromise: MergePromise =
  (fn) =>
    (value) =>
      Promise.resolve(value)
        .then(fn)
        .then((fnOut) => O.merge (fnOut) (value))

export
{ mergePromise
}
