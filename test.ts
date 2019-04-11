import { init } from './src/commands/init'

init
( { outDir: 'Henk'
  , platform: 'local'
  , project: './example-project'
  }
)
.catch(console.error)
