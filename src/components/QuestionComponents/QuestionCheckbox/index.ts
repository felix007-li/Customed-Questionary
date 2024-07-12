/**
 * @description Question checkbox
 * @author Li
 */

import Component from './Component'
import PropComponent from './PropComponent'
import { QuestionCheckboxDefaultProps } from './interface'

export * from './interface'

export default {
  title: 'Multi choise',
  type: 'questionCheckbox',
  Component,
  PropComponent,
  defaultProps: QuestionCheckboxDefaultProps,
}
