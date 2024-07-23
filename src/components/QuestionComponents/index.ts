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
<<<<<<< HEAD
  StatComponent?: FC<ComponentStatPropsType>
}

// Component setting list
const componentConfList: ComponentConfType[] = [
  QuestionInputConf,
  QuestionInfoConf,
  QuestionCheckboxConf,
]

// component group
=======
  //   StatComponent?: FC<ComponentStatPropsType>
}

// components setting list
const componentConfList: ComponentConfType[] = [QuestionInputConf, QuestionRadioConf]

// components group
>>>>>>> login
export const componentConfGroup = [
  {
    groupId: 'textGroup',
    groupName: 'Text display',
<<<<<<< HEAD
    components: [QuestionInfoConf],
=======
    components: [],
>>>>>>> login
  },
  {
    groupId: 'inputGroup',
    groupName: 'User input',
    components: [QuestionInputConf],
  },
  {
    groupId: 'chooseGroup',
    groupName: 'User select',
<<<<<<< HEAD
    components: [QuestionCheckboxConf],
=======
    components: [QuestionRadioConf],
>>>>>>> login
  },
]

export function getComponentConfByType(type: string) {
  return componentConfList.find(c => c.type === type)
}
