import { O } from 'lambal'

type AssocPromise =
  <P extends string>(property: P) =>
    <T, R>(fn: (a:T) => Promise<R>) =>
      <V extends T>(value: V) =>
        Promise<V & Record<P, R>>
const assocPromise: AssocPromise =
  (property) =>
    (fn) =>
      (value) =>
        Promise.resolve(value)
          .then(fn)
          .then((fnOut) => O.assoc(property) (fnOut) (value))

export
{ assocPromise
}
