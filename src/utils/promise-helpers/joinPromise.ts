// type Fn<T> = (arg: T) => any
// type JoinPromise = <T>(fn1: Fn<T>) => (fn2: Fn<T>) => T & any
// const joinPromise: JoinPromise =
//   (fn1) =>
//     (fn2) =>
//       (val) =>
//         Promise
//           .all([fn1(val), fn2(val)])
