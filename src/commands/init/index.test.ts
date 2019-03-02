import test from 'ava'

import { init } from './index'

test
( 'Init is a function'
, (t) => {
    t.is('function', typeof init)
  }
)

// test
// ( ''
// )
test
( 'test'
, (t) =>
    init
    ( { name: 'henk'
      , platform: 'local'
      , project: './example-project'
      }
    )
    .then((v) => { t.is(undefined, v) } )
)

init
( { name: 'henk'
  , platform: 'local'
  , project: './example-project'
  }
)
  // .then(console.log('end'))
