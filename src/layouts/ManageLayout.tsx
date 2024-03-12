import React, { FC } from 'react'
import { Button, Space, Divider, message } from 'antd'
import { PlusOutlined, BarsOutlined, StarOutlined, DeleteOutlined } from '@ant-design/icons'
import styles from './ManageLayout.module.scss'
import { useLocation, useNavigate, Outlet } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { createQuestionService } from '../services/question'

const ManageLayout: FC = () => {
  // const nav = useNavigate()
  //   const { pathname } = useLocation

  const { loading } = useRequest(createQuestionService, {
    manual: false,
    onSuccess(result) {
      // nav()
      message.success('Created succcessfully')
    },
  })

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Space direction="vertical">
          <Button type="primary" size="large" icon={<PlusOutlined />}>
            Create Question
          </Button>
          <Divider style={{ borderTop: 'transpparent ' }} />
          <Button type="text" size="large" icon={<BarsOutlined />}>
            My Questions
          </Button>
          <Button type="text" size="large" icon={<StarOutlined />}>
            Star Questions
          </Button>
          <Button type="text" size="large" icon={<DeleteOutlined />}>
            Trash
          </Button>
        </Space>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  )
}

export default ManageLayout
