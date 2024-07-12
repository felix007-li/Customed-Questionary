export type QuestionInfoPropsType = {
    title?: string
    desc?: string
  
    // PropComponent
    onChange?: (newProps: QuestionInfoPropsType) => void
    disabled?: boolean
  }
  
  export const QuestionInfoDefaultProps: QuestionInfoPropsType = {
    title: 'Question title',
    desc: 'Question description',
  }
  