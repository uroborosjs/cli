#!/usr/bin/env node

import { runHelp } from './help'
import { runInit } from './runInit'

const args = process.argv.slice(2)

type PossibleCommands =
  { [index: string]: any
  }
const possibleCommands: PossibleCommands =
  { init: runInit
  , help: runHelp
  }

if ( args.length > 0 ) {
  const [ command, ...restArgs ] = args
  const runCommand = possibleCommands[command]
  if (runCommand !== undefined) {
    runCommand(...restArgs)
  } else {
    console.log('Not a valid Command!')
  }
} else {
  console.log('You need to specify a command!')
}

