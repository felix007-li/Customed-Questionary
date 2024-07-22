import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { changeSelectedId } from '../../../store/componentsReducer'
import useLoadQuestionListData from '../../../hooks/useLoadQuestionListData'
import useGetPageInfo from '../../../hooks/useGetPageInfo'
import EditHeader from './EditHeader'
import EditCanvas from './EditCanvas'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import styles from './index.module.scss'
import { useTitle } from 'ahooks'

const Edit: FC = () => {
  const dispatch = useDispatch()
  const { loading } = useLoadQuestionListData()

  function clearSelectedId() {
    dispatch(changeSelectedId(''))
  }

  // edit title
  const { title } = useGetPageInfo()
  useTitle(`Edit question - ${title}`)

  return (
    <div className={styles.container}>
      <EditHeader />
      <div className={styles['content-wrapper']}>
        <div className={styles.content}>
          <div className={styles.left}>
            <LeftPanel />
          </div>
          <div className={styles.main} onClick={clearSelectedId}>
            <div className={styles['canvas-wrapper']}>
              <EditCanvas loading={loading} />
            </div>
          </div>
          <div className={styles.right}>
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit
