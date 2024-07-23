/**
 * @description Question input
 * @author Li
 */
import Component from './Component'
import PropComponent from './PropComponent'
import { QuestionInputDefaultProps } from './interface'

export * from './interface'

// Input setting
export default {
  title: 'Input',
  type: 'questionInput',
  Component,
  PropComponent,
  defaultProps: QuestionInputDefaultProps,
}
