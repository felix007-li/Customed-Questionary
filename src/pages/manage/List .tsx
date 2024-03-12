import React, { FC, useEffect, useState } from 'react'
import { useRequest, useTitle } from 'ahooks'
import { getQuestionListService } from '../../services/question'
import { LIST_PAGE_SIZE } from '../../constant/index'
import { Typography } from 'antd'
import styles from './common.module.scss'

const { Title } = Typography

const List: FC = () => {
  useTitle('My Questinary')

  const [list, setList] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    setList([])
    setPage(1)
  }, [])

  const { loading } = useRequest(
    async () => {
      const data = await getQuestionListService({
        page,
        pageSize: LIST_PAGE_SIZE,
      })
      return data
    },
    {
      manual: false,
      onSuccess(result) {
        const { list: any = [] } = result
        console.log('list', list)
      },
    }
  )

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}></div>
      </div>
      <div className={styles.content}>
        {/* 问卷列表 */}
        {/* {list.length > 0 &&
          list.map((q: any) => {
            const { _id } = q
            return <QuestionCard key={_id} {...q} />
          })} */}
      </div>
      <div className={styles.footer}>
        {/* <div ref={containerRef}>{LoadMoreContentElem}</div> */}
      </div>
    </>
  )
}
export default List
