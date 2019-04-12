import { init } from './src/commands/init'

// init
// ( { outDir: 'Henk'
//   , method: 'local'
//   , project: './example-project'
//   }
// )
// .catch(console.error)

init
( { outDir: 'Henk'
  , method: 'github'
  , project: 'uroborosjs/example-project'
  }
)
.catch(console.error)

