import { copy } from 'fs-extra'
import { forceAbsolutePath } from 'utils/path'
import
{ OutDirArg
, PlatformArg
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

type FetchProjectArg =
  OutDirArg
  & PlatformArg
  & ProjectArg
type FetchProject = (obj: FetchProjectArg) => Promise<void>
const fetchProject: FetchProject =
  ({platform, project, outDir}) =>
    platform === 'local' ? fetchLocal({project, outDir})
    : Promise.resolve()

export
{ fetchProject
}
