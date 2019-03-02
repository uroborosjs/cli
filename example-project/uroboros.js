// import
// { readFileSync
// , writeFileSync
// } from 'fs'
const { readFileSync
      , writeFileSync
      } = require('fs')

const compose = (f) => (g) => (v) => g (f (v))

const readJsonSync =
  compose
  ( JSON.parse
  , readFileSync
  )

const writeJsonSync =
  (path) =>
    compose
    ( (jsonStr) => writeFileSync(path, jsonStr)
    , JSON.stringify
    )

const questions =
  [ { question: 'Project description'
    , property: 'description'
    }
  , { question: 'Init version'
    , property: 'version'
    }
  ]

const updatePackageJson =
  ( { name
    , description
    , version
    }
  ) =>
    (packageJson) => (
      { ...packageJson
      , description
      , version
      }
    )

const setup =
  ( { name
    , description
    , version
    }
  ) => {
    const packageJson = readJsonSync('./package.json')
    const newPackageJson =
      updatePackageJson
      ( { name
        , description
        , version
        }
      )
      ( packageJson )
    writeJsonSync ('./package.json') (newPackageJson)
  }

// export
// { questions
// , setup
// }
module.exports =
  { questions
  , setup
  }
