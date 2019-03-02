import { assoc } from 'rambda'

type AssocPromise =
  <P extends string>(propery: P) =>
    <T, R>(fn: (a:T) => R) =>
      (value: T) =>
        Promise<T & Record<P, R>>
const assocPromise: AssocPromise =
  (property) =>
    (fn) =>
      (value) =>
        Promise.resolve(value)
          .then(fn)
          .then((fnOut:any) => assoc(property, fnOut, value))

export
{ assocPromise
}
