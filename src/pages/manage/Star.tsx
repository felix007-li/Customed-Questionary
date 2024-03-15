import React, { FC } from 'react'
import { useTitle } from 'ahooks'
import { Typography, Empty, Spin } from 'antd'
import useLoadQuestionListData from '../../hooks/useLoadQuestionListData'
import QuestionCard from '../../components/QuestionCard'
import styles from './common.module.scss'

const { Title } = Typography

const Star: FC = () => {
  useTitle('Questionary - Star Questions')

  const { data = {}, loading } = useLoadQuestionListData({ isStar: true })
  const { list = [], total = 0 } = data

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>Star Questions</Title>
        </div>
        <div className={styles.right}>{/* <ListSearch /> */}</div>
      </div>
      <div className={styles.content}>
        {loading && <div style={{ textAlign: 'center' }}>{/* <Spin /> */}</div>}
        {!loading && list.length === 0 && <Empty description="No data for now" />}
        {list.length > 0 &&
          list.map((q: any) => {
            const { _id } = q
            return <QuestionCard key={_id} {...q} />
          })}
      </div>
      <div className={styles.footer}>{/* <ListPage total={total} /> */}</div>
    </>
  )
}

export default Star
