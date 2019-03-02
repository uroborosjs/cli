type TapPromise = <T>(fn: (arg:T) => any) => (val:T) => Promise<T>
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
