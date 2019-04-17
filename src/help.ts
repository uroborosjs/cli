const helpText = `
  uroborosjs - a highly flexible cyclejs project initializer

  usage: uro <command> <outDir> <flavor?>
    - command: to run e.g. init
    - outDir: name of the new directory of the project
    - flavor: which flavor should be installed e.g. 'library'
      leaving this option out will run the advanced initializer.

  standard:
  $ uro init myNewApp browser

  advanced:
  $ uro init myNewApp
`

const runHelp = () => {console.log(helpText)}

export
{ runHelp
}
