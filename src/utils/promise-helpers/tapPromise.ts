import { Function } from 'lambal'

type TapPromise = <T>(fn: Function<T, any>) => <V extends T>(val: V) => Promise<V>
const tapPromise: TapPromise =
  (fn) => 
    (val) =>
      Promise
        .resolve(val)
        .then(fn)
        .then(() => val)

export
{ tapPromise
}
