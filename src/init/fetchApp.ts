import { download } from 'download-git-repo'

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

const fetchGitApp: FetchGitApp =
  (newApp) =>
    (gitSite, repo, branch = false) =>
      new Promise
      ( (res, rej) => {
          const expectedBranch = branch ? `#${branch}` : ''
          download
          ( `${gitSite}:${repo}${expectedBranch}`
          , newApp
          , (err: boolean) => err ? rej(err) : res(true)
          )
        }
      )

export
  { fetchGitApp
  }
