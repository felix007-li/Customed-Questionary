import { ComponentInfoType, ComponentsStateType } from './index'

/**
 * get next selectedId
 * @param fe_id current id
 * @param componentList
 */
export function getNextSelectedId(fe_id: string, componentList: ComponentInfoType[]) {
  const visibleComponentList = componentList.filter(c => !c.isHidden)
  const index = visibleComponentList.findIndex(c => c.fe_id === fe_id)
  if (index < 0) return ''

  // recalculate selectedId
  let newSelectedId = ''
  const length = visibleComponentList.length
  if (length <= 1) {
    // only one component
    newSelectedId = ''
  } else {
    // lenght of components > 1
    if (index + 1 === length) {
      // seletc previous component if is the last component
      newSelectedId = visibleComponentList[index - 1].fe_id
    } else {
      // seletc next component if was not last component had been deleted
      newSelectedId = visibleComponentList[index + 1].fe_id
    }
  }

  return newSelectedId
}

/**
 * insert new component
 * @param draft state draft
 * @param newComponent
 */
export function insertNewComponent(draft: ComponentsStateType, newComponent: ComponentInfoType) {
  const { selectedId, componentList } = draft
  const index = componentList.findIndex(c => c.fe_id === selectedId)

  if (index < 0) {
    // did not seletct any component
    draft.componentList.push(newComponent)
  } else {
    draft.componentList.splice(index + 1, 0, newComponent)
  }

  draft.selectedId = newComponent.fe_id
}
