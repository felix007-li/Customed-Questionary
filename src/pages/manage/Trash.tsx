import React, { FC, useState } from 'react'
import { useTitle } from 'ahooks'
import { Typography, Empty, Table, Tag, Button, Space, Modal, Spin, message } from 'antd'
// import { ExclamationCircleOutlined } from '@ant-design/icons'
import { useRequest } from 'ahooks'
// import ListSearch from '../../components/ListSearch'
// import ListPage from '../../components/ListPage'
import useLoadQuestionListData from '../../hooks/useLoadQuestionListData'
// import { updateQuestionService, deleteQuestionsService } from '../../services/question'
import styles from './common.module.scss'

const { Title } = Typography
const { confirm } = Modal

const Trash: FC = () => {
  useTitle('小慕问卷 - 回收站')

  const { data = {}, loading } = useLoadQuestionListData({ isDeleted: true })
  const { list = [], total = 0 } = data

  // selected id
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  // Recovery
  //   const { run: recover } = useRequest(
  //     async () => {
  //       for await (const id of selectedIds) {
  //         await updateQuestionService(id, { isDeleted: false })
  //       }
  //     },
  //     {
  //       manual: true,
  //       debounceWait: 500,
  //       onSuccess() {
  //         message.success('Recover successfully!')
  //         refresh()
  //         setSelectedIds([])
  //       },
  //     }
  //   )

  // 删除
  //   const { run: deleteQuestion } = useRequest(
  //     async () => await deleteQuestionsService(selectedIds),
  //     {
  //       manual: true,
  //       onSuccess() {
  //         message.success('Delete successfully!')
  //         refresh()
  //         setSelectedIds([])
  //       },
  //     }
  //   )

  //   function del() {
  //     confirm({
  //       title: 'Aew you sure that you want to delete this question？',
  //       icon: <ExclamationCircleOutlined />,
  //       content: 'Could not recover after deleting',
  //       onOk: deleteQuestion,
  //     })
  //   }

  const tableColumns = [
    {
      title: 'Title',
      dataIndex: 'title',
      // key: 'title', // 循环列的 key ，它会默认取 dataIndex 的值
    },
    {
      title: 'Published?',
      dataIndex: 'isPublished',
      render: (isPublished: boolean) => {
        return isPublished ? <Tag color="processing">Published</Tag> : <Tag>Not published</Tag>
      },
    },
    {
      title: 'Answered',
      dataIndex: 'answerCount',
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
    },
  ]

  // 可以把 JSX 片段定义为一个变量
  const TableElem = (
    <>
      <div style={{ marginBottom: '16px' }}>
        <Space>
          <Button type="primary" disabled={selectedIds.length === 0}>
            Recovery
          </Button>
          <Button danger disabled={selectedIds.length === 0}>
            Delete
          </Button>
        </Space>
      </div>
      <div style={{ border: '1px solid #e8e8e8' }}>
        <Table
          dataSource={list}
          columns={tableColumns}
          pagination={false}
          rowKey={q => q._id}
          rowSelection={{
            type: 'checkbox',
            onChange: selectedRowKeys => {
              setSelectedIds(selectedRowKeys as string[])
            },
          }}
        />
      </div>
    </>
  )

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>Recycle</Title>
        </div>
        <div className={styles.right}>{/* <ListSearch /> */}</div>
      </div>
      <div className={styles.content}>
        {loading && <div style={{ textAlign: 'center' }}>{/* <Spin /> */}</div>}
        {!loading && list.length === 0 && <Empty description="No Data for now" />}
        {list.length > 0 && TableElem}
      </div>
      <div className={styles.footer}>{/* <ListPage total={total} /> */}</div>
    </>
  )
}

export default Trash
