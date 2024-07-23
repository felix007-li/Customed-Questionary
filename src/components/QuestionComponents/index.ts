import type { FC } from 'react'
import QuestionInputConf, { QuestionInputPropsType } from './QuestionInput/index'
import QuestionRadioConf, {
  QuestionRadioPropsType,
  //   QuestionRadioStatPropsType,
} from './QuestionRadio'

// unify the prop type of each component
export type ComponentPropsType = QuestionInputPropsType & QuestionRadioPropsType

export type ComponentConfType = {
  title: string
  type: string
  Component: FC<ComponentPropsType>
  PropComponent: FC<ComponentPropsType>
  defaultProps: ComponentPropsType
  //   StatComponent?: FC<ComponentStatPropsType>
}

// components setting list
const componentConfList: ComponentConfType[] = [QuestionInputConf, QuestionRadioConf]

// components group
export const componentConfGroup = [
  {
    groupId: 'textGroup',
    groupName: 'Text display',
    components: [],
  },
  {
    groupId: 'inputGroup',
    groupName: 'User input',
    components: [QuestionInputConf],
  },
  {
    groupId: 'chooseGroup',
    groupName: 'User select',
    components: [QuestionRadioConf],
  },
]

export function getComponentConfByType(type: string) {
  return componentConfList.find(c => c.type === type)
}
