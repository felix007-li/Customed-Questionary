export type OptionType = {
    value: string
    text: string
    checked: boolean
  }
  
  export type QuestionCheckboxPropsType = {
    title?: string
    isVertical?: boolean
    list?: OptionType[]
  
    // for PropComponent
    onChange?: (newProps: QuestionCheckboxPropsType) => void
    disabled?: boolean
  }
  
  export const QuestionCheckboxDefaultProps: QuestionCheckboxPropsType = {
    title: 'Multi title',
    isVertical: false,
    list: [
      { value: 'item1', text: 'option1', checked: false },
      { value: 'item2', text: 'option2', checked: false },
      { value: 'item3', text: 'option3', checked: false },
    ],
  }
  
  // Calculate the type of component
  export type QuestionCheckboxStatPropsType = {
    stat: Array<{ name: string; count: number }>
  }
  