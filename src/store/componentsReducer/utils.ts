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
    newSelectedId = ''
  } else {
    if (index + 1 === length) {
      // select previous one in order to delete last one
      newSelectedId = visibleComponentList[index - 1].fe_id
    } else {
      newSelectedId = visibleComponentList[index + 1].fe_id
    }
  }

  return newSelectedId
}

/**
 * insert new compo
 * @param draft state draft
 * @param newComponent
 */
export function insertNewComponent(draft: ComponentsStateType, newComponent: ComponentInfoType) {
  const { selectedId, componentList } = draft
  const index = componentList.findIndex(c => c.fe_id === selectedId)

  if (index < 0) {
    // no selected compo
    draft.componentList.push(newComponent)
  } else {
    draft.componentList.splice(index + 1, 0, newComponent)
  }

  draft.selectedId = newComponent.fe_id
}
