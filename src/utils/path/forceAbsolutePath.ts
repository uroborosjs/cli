import { resolve as resolvePath} from 'path'
type ForceAbsolutePath =
  (possibleRelativePath: string) => string

const forceAbsolutePath: ForceAbsolutePath =
  (possibleRelativePath) =>
    possibleRelativePath.startsWith(`/`)
      ? possibleRelativePath
      : resolvePath(process.cwd(), `${possibleRelativePath}`)

export
{ forceAbsolutePath
}
