import prompts from 'prompts'
import
{ init
, pickMethod
, qStanderd
, layoutStanderd
, qGithub
, layoutGithub
, qLocal
, layoutLocal
} from './commands';

const flavors =
  [ 'browser'
  , 'server'
  , 'library'
  , 'example-project'
  ]

type RunInit =
  (outDir: string, flavor?: string) => void
const runInit: RunInit =
  (outDir, flavor) => {
    console.log(outDir, flavor)
    if (flavor === undefined) {
      prompts(<any>pickMethod)
        .then
         (({method}) =>
           method === 'standerd'
             ? prompts(<any>qStanderd)
                 .then(<any>layoutStanderd(outDir))
           : method === 'local'
             ? prompts(<any>qLocal)
                 .then(<any>layoutLocal(outDir))
           : prompts(<any>qGithub)
               .then(<any>layoutGithub(outDir))
         )
        .then(<any>init)

    } else {
      if (flavors.includes(flavor)) {
        init
        ( { outDir
          , method: 'github'
          , project: `uroborosjs/${flavor}`
          }
        )
      } else {
        console.log(`flavor doesn't exist`)
      }
    }
  }

export
{ runInit
}
