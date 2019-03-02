import * as prompts from 'prompts'
import
{ compose
, map
} from 'rambda'

import
{ Question
} from './types'

type ProperQuestion =
  { type: 'text'
  , name: string
  , message: string
  }
type MakeProperQuestion = (question: Question) => ProperQuestion
const makeProperQuestion: MakeProperQuestion =
  ({ question, property }) => (
    { type: 'text'
    , message: question
    , name: property
    }
  )

type Answers = { [ index: string]: string }
type Ask = (questions: Question[]) => Promise<Answers>
const ask: Ask =
  compose<any, any, any>
  ( prompts
  , map(makeProperQuestion)
  )

export
{ ask
}
