import { init } from './init'
import { pathExists } from 'fs-extra';
import { InitArg } from './init/types';

const pickMethod =
  { type: 'select'
  , name: 'method'
  , message: 'Pick method'
  , choices:
    [ { title: 'standerd'
      , value: 'standerd'
      }
    , { title: 'local'
      , value: 'local'
      }
    , { title: 'github'
      , value: 'github'
      }
    ]
  }

const qStanderd =
  { type: 'select'
  , name: 'flavor'
  , message: 'Pick flavor'
  , choices:
    [ { title: 'server'
      , value: 'server'
      }
    , { title: 'browser'
      , value: 'browser'
      }
    , { title: 'library'
      , value: 'library'
      }
    ]
  }

const qLocal =
  { type: 'text'
  , name: 'path'
  , message: 'Path to source project'
  }

const qGithub =
  [ { type: 'text'
    , name: 'repo'
    , message: 'The repo <User/Project>'
    }
  , { type: 'text'
    , name: 'branch'
    , initial: 'master'
    , message: 'The branch'
    }
  ]

type LayoutLocal =
  (outDir: string) =>
    (arg: {path: string}) => InitArg
const layoutLocal: LayoutLocal =
  (outDir: string) =>
    ({path}) => (
      { outDir
      , method: 'local'
      , project: path
      }
    )

type LayoutStanderd =
  (outDir: string) =>
    (arg: {flavor: string}) =>
      InitArg
const layoutStanderd: LayoutStanderd =
  (outDir) =>
    ({flavor}) => (
      { outDir
      , method: 'github'
      , project: `uroborosjs/${flavor}`
      }
    )

type LayoutGithub =
  (outDir: string) => 
    (arg: {repo: string, branch?: string}) => InitArg
const layoutGithub: LayoutGithub =
  (outDir) =>
    ({repo, branch}) => (
      { outDir
      , method: 'github'
      , project: repo
      , branch: branch
      }
    )

export
{ init
, pickMethod
, qLocal
, layoutLocal
, qStanderd
, layoutStanderd
, qGithub
, layoutGithub
}
