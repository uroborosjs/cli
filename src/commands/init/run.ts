type RunArg =
  Record<'setup', (a: object) => void>
  & Record<'answer', any>
type Run = (arg: RunArg) => Promise<void>
const run: Run =
  ({setup, answer}) =>
    Promise.resolve(answer)
      .then(setup)

export
{ run
}
