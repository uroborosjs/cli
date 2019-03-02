// import { download } from 'download-git-repo'
import { copy } from 'fs-extra'
import { forceAbsolutePath } from 'utils/path'
import
{ PlatformArg
, NameArg
, ProjectArg
} from './types'

type Folder = string
type GitSite = 'github' | 'gitlab' | 'bucket'
type Branch = 'string'
type Repo = string
type FetchGitApp =
  (newApp: Folder) =>
    ( gitSite: GitSite
    , repo: Repo
    , branch: Branch | false
    ) => Promise<true>

// const fetchGitApp: FetchGitApp =
//   (newApp) =>
//     (gitSite, repo, branch = false) =>
//       new Promise
//       ( (res, rej) => {
//           const expectedBranch = branch ? `#${branch}` : ''
//           download
//           ( `${gitSite}:${repo}${expectedBranch}`
//           , newApp
//           , (err: boolean) => err ? rej(err) : res(true)
//           )
//         }
//       )
// type MakePath = (obj: PathArg) => string
// const makePath = ({project, name}) => `${project}/${name}`

type PathArg =
  NameArg
  & ProjectArg
type FetchLocal = (obj: PathArg) => Promise<void>
const fetchLocal: FetchLocal =
  ({project, name}) => {
    const srcDirPath = forceAbsolutePath(project)
    const outDirPath = forceAbsolutePath(`./${name}`)
    return copy(srcDirPath, outDirPath)
      // .then(() => {})
  }
  // (srcDir: string) =>
    // compose
    // ( copy(srcDir)
    // , forceAbsolutePath
    // , makePath
    // )

type FetchProjectArg =
  NameArg
  & PlatformArg
  & ProjectArg
type FetchProject = (obj: FetchProjectArg) => Promise<void>
const fetchProject: FetchProject =
  ({platform, project, name}) =>
    platform === 'local' ? fetchLocal({project, name})
    : Promise.resolve()
    // Promise.resolve()
    // (platform === 'local') ?
    //   : null

export
  // { fetchGitApp
{ fetchProject
}
