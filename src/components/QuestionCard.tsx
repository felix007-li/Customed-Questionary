import React, { FC, useState } from 'react'
// import { useRequest } from 'ahooks'
import { Button, Space, Divider, Tag, message, Popconfirm, Modal } from 'antd'
import {
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
  CopyOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons'

import { Link, useNavigate } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { duplicateQuestionService, updateQuestionService } from '../services/question'
import styles from './QuestionCard.module.scss'

const { confirm } = Modal

type PropsType = {
  _id: string
  title: string
  answerCount: number
  isStar: boolean
  isPublished: boolean
  createdAt: string
}

const QuestionCard: FC<PropsType> = (props: PropsType) => {
  const nav = useNavigate()
  const { _id, title, createdAt, answerCount, isPublished, isStar } = props

  // Change star
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

  // copy
  const { loading: duplicateLoading, run: duplicate } = useRequest(
    async () => await duplicateQuestionService(_id),
    {
      manual: true,
      onSuccess(result) {
        message.success('Copied sucessfully!')
        nav(`/question/edit/${result.id}`)
      },
    }
  )

  // delete
  const [isDeletedState, setIsDeletedState] = useState(false)
  const { loading: deleteLoading, run: deleteQuestion } = useRequest(
    async () => await updateQuestionService(_id, { isDeleted: true }),
    {
      manual: true,
      onSuccess() {
        message.success('Deleted successfully!')
        setIsDeletedState(true)
      },
    }
  )

  function del() {
    confirm({
      title: 'Are you sure you want to deleted this question?',
      icon: <ExclamationCircleOutlined />,
      onOk: deleteQuestion,
    })
  }

  if (isDeletedState) return null

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
            <Popconfirm
              title="Are you sure to duplicate this question"
              okText="Sure"
              cancelText="Cancel"
              onConfirm={duplicate}
            >
              <Button type="text" icon={<CopyOutlined />} size="small" disabled={duplicateLoading}>
                Copy
              </Button>
            </Popconfirm>
            <Button
              icon={<DeleteOutlined />}
              type="text"
              size="small"
              onClick={del}
              disabled={deleteLoading}
            >
              Delete
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard
