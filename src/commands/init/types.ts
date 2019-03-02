type Platform =
  'local'
// | 'github'
// | 'gitlab'
// "<namespace>/<project>" || "path/to/project"
type Project = string

type NameArg = Record<'name', string>
type PlatformArg = Record<'platform', Platform>
type ProjectArg = Record<'project', Project>
type InitArg =
  NameArg
  & PlatformArg
  & ProjectArg

type Question =
  { question: string
  , property: string
  }

export
{ NameArg
, PlatformArg
, ProjectArg
, Platform
, Project
, InitArg
, Question
}

