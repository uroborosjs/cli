type Platform =
  'github'
  // | 'gitlab'
  // | 'bitbucket'
type Method =
  'local'
  | Platform
type Project = string

type OutDirArg = Record<'outDir', string>
type PlatformArg = Record<'platform', Platform>
type MethodArg = Record<'method', Method>
type BranchArg = Record<'branch', string>
type ProjectArg = Record<'project', Project>
type InitArg =
  OutDirArg
  & MethodArg
  & ProjectArg
  & Partial<BranchArg>

type Question =
  { question: string
  , property: string
  }
  // Record<'question' | 'property', string>

export
{ OutDirArg
, Method
, PlatformArg
, ProjectArg
, Platform
, BranchArg
, Project
, InitArg
, Question
}

