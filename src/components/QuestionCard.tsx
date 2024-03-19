import React, { FC, useState } from 'react'
// import { useRequest } from 'ahooks'
import { Button, Space, Divider, Tag, message } from 'antd'
import {
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
  CopyOutlined,
  //   DeleteOutlined,
  //   ExclamationCircleOutlined,
} from '@ant-design/icons'

import styles from './QuestionCard.module.scss'
import { Link } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { updateQuestionService } from '../services/question'

type PropsType = {
  _id: string
  title: string
  answerCount: number
  isStar: boolean
  isPublished: boolean
  createdAt: string
}

const QuestionCard: FC<PropsType> = (props: PropsType) => {
  //   const nav = useNavigate()
  const { _id, title, createdAt, answerCount, isPublished, isStar } = props

  const [isStarState, setIsStarState] = useState(isStar)
  const { loading: changeStarLoading, run: changeStar } = useRequest(
    async () => {
      await updateQuestionService(_id, {
        isStar: !isStarState,
      })
    },
    {
      manual: true,
      onSuccess() {
        setIsStarState(!isStarState)
        message.success('Updated')
      },
    }
  )

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <Link to="">
            <Space>
              {isStarState && <StarOutlined style={{ color: 'red' }} />}
              {title}
            </Space>
          </Link>
        </div>
        <div className={styles.right}>
          <Space>
            {isPublished ? <Tag color="processing">Published</Tag> : <Tag>Not published</Tag>}
            <span>Answered: {answerCount}</span>
            <span>{createdAt}</span>
          </Space>
        </div>
      </div>
      <Divider style={{ margin: '12px 0' }} />
      <div className={styles['button-container']}>
        <div className={styles.left}>
          <Space>
            <Button icon={<EditOutlined />} type="text" size="small">
              Edit
            </Button>
            <Button icon={<LineChartOutlined />} type="text" size="small" disabled={!isPublished}>
              Statistic
            </Button>
          </Space>
        </div>
        <div className={styles.right}>
          <Space>
            <Button
              icon={<StarOutlined />}
              type="text"
              size="small"
              onClick={changeStar}
              disabled={changeStarLoading}
            >
              {isStarState ? 'Cancel star' : 'Star'}
            </Button>
            <Button type="text" icon={<CopyOutlined />} size="small">
              Copy
            </Button>
            <Button icon={<EditOutlined />} type="text" size="small">
              Delete
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard
