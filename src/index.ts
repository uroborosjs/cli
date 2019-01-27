import { formatArgs } from './formatArgs'
import { createCycleApp } from './init'

const args = process.argv.slice(2)

const possibleCommands =
  { init:
    { 
    }
  }

if ( args.length > 0 ) {
  const formattedArgs = formatArgs(args)
  console.log(formattedArgs)
} else {
  console.log('You need to specify a command!')
}

