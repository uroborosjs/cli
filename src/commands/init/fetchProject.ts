import { copy } from 'fs-extra'
import download from 'download-git-repo'
import { forceAbsolutePath } from '../../utils/path'
import
{ InitArg
, OutDirArg
, BranchArg
, PlatformArg
, ProjectArg
} from './types'

type ConstructGitLocation = (fetchArg: FetchArg) => string
const constructGitLocation: ConstructGitLocation =
  ({platform, repo, branch}) =>
    branch === undefined
      ? `${platform}:${repo}`
      : `${platform}:${repo}#${branch}`

type Folder = string
type Repo =
  Record<'repo', string>
type FetchArg =
  PlatformArg
  & Repo
  & Partial<BranchArg>
type FetchGitApp =
  (newAppLocation: Folder) =>
    (fetchArg: FetchArg) => Promise<void>

const LY = (val:any) => { console.error(val); return val}
const fetchGitApp: FetchGitApp =
  (newAppLocation) =>
    ({platform, repo, branch}) =>
      new Promise
          ( (res, rej) => {
              console.log(platform, repo, branch)
              download
              ( LY(constructGitLocation
                ( { platform
                  , repo
                  , branch
                  }
                )
                   )
              , newAppLocation
              , (err: any) => { err ? rej(err) : res() }
              )
            }
          )

type PathArg =
  OutDirArg
  & ProjectArg
type FetchLocal = (obj: PathArg) => Promise<void>
const fetchLocal: FetchLocal =
  ({project, outDir}) => {
    const srcDirPath = forceAbsolutePath(project)
    const outDirPath = forceAbsolutePath(`./${outDir}`)
    return copy(srcDirPath, outDirPath)
  }

type FetchProject = (obj: InitArg) => Promise<void>
const fetchProject: FetchProject =
  ({outDir, method, project, branch}) =>
    method === 'local' ? fetchLocal({project, outDir})
    : fetchGitApp(outDir) ({platform: method, repo: project, branch})

export
{ fetchProject
}
