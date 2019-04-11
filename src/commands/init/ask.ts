import prompts from 'prompts'
import
{ F
, A
} from 'lambal'

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
  F.compose
  (prompts)
  (A.map(makeProperQuestion))

export
{ ask
, Answers
}
