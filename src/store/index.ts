import { configureStore } from '@reduxjs/toolkit'
import undoable, { excludeAction, StateWithHistory } from 'redux-undo'
import userReducer, { UserStateType } from './userReducer'
import componentsReducer, { ComponentsStateType } from './componentsReducer'

export type StateType = {
  pageInfo: unknown
  user: UserStateType
  components: StateWithHistory<ComponentsStateType> // undo
}

export default configureStore({
  reducer: {
    user: userReducer,

    // // 没有 undo
    // components: componentsReducer,

    // 增加了 undo
    //   components: undoable(componentsReducer, {
    //     limit: 20, // 限制 undo 20 步
    //     filter: excludeAction([
    //       'components/resetComponents',
    //       'components/changeSelectedId',
    //       'components/selectPrevComponent',
    //       'components/selectNextComponent',
    //     ]),
    //   }),

    //   pageInfo: pageInfoReducer,
  },
})
