import type { FC } from 'react'
import QuestionInputConf, { QuestionInputPropsType } from './QuestionInput/index'
import QuestionInfoConf, { QuestionInfoPropsType } from './QuestionInfo'
import QuestionCheckboxConf, {
  QuestionCheckboxPropsType,
  QuestionCheckboxStatPropsType,
} from './QuestionCheckbox'

export type ComponentPropsType = QuestionInputPropsType &
  QuestionInfoPropsType &
  QuestionCheckboxPropsType

type ComponentStatPropsType = QuestionCheckboxStatPropsType

export type ComponentConfType = {
  title: string
  type: string
  Component: FC<ComponentPropsType>
  PropComponent: FC<ComponentPropsType>
  defaultProps: ComponentPropsType
  StatComponent?: FC<ComponentStatPropsType>
}

// Component setting list
const componentConfList: ComponentConfType[] = [
  QuestionInputConf,
  QuestionInfoConf,
  QuestionCheckboxConf,
]

// component group
export const componentConfGroup = [
  {
    groupId: 'textGroup',
    groupName: 'Text display',
    components: [QuestionInfoConf],
  },
  {
    groupId: 'inputGroup',
    groupName: 'User input',
    components: [QuestionInputConf],
  },
  {
    groupId: 'chooseGroup',
    groupName: 'User select',
    components: [QuestionCheckboxConf],
  },
]

export function getComponentConfByType(type: string) {
  return componentConfList.find(c => c.type === type)
}
