import { merge } from 'rambda'

type MergePromise =
  <T, R>(fn: (a:T) => R) =>
    (value: T) =>
      Promise<T & R>
const mergePromise: MergePromise =
  (fn) =>
    (value) =>
      Promise.resolve(value)
        .then(fn)
        .then((fnOut:any) => merge(fnOut, value))

export
{ mergePromise
}
