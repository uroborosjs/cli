type Argv = string[]

type Command = string
type Flag = string

type WholeCommand =
  { command: Command
  , flags: Flag[]
  }

const isFlag =
  (value: string) => value.startsWith('--')

const makeWholeCommandList =
  (acc: WholeCommand[], curr: Command | Flag ) => {
    if ( isFlag(curr) ) {
      const reversedAcc = acc.reverse()
      const [ last
              , ...restAccReversed
            ] = reversedAcc
      const restAcc = restAccReversed.reverse()
      const newLast =
            { ...last
            , flags: [ ...last.flags, curr ]
            }
      return [ ...restAcc, newLast ]
    } else {
      return [ ...acc, { command: curr, flags: []} ]
    }
  }

type FormattedArgs = WholeCommand[]
type FormatArgs =
  (argv: Argv) => FormattedArgs
const formatArgs: FormatArgs =
  (argv) => argv.reduce(makeWholeCommandList, [])

export
{ formatArgs
}
