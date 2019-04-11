type Platform =
  'local'
// | 'github'
// | 'gitlab'
// "<namespace>/<project>" || "path/to/project"
type Project = string

type OutDirArg = Record<'outDir', string>
type PlatformArg = Record<'platform', Platform>
type ProjectArg = Record<'project', Project>
type InitArg =
  OutDirArg
  & PlatformArg
  & ProjectArg

type Question =
  { question: string
  , property: string
  }

export
{ OutDirArg
, PlatformArg
, ProjectArg
, Platform
, Project
, InitArg
, Question
}

