import React, { FC, useEffect } from 'react'
import { Form, Input } from 'antd'
import { useDispatch } from 'react-redux'
import useGetPageInfo from '../../../hooks/useGetPageInfo'
import { resetPageInfo } from '../../../store/pageInfoReducer'

const { TextArea } = Input

const PageSetting: FC = () => {
  const pageInfo = useGetPageInfo()
  // const { title, desc, js, css } = pageInfo
  const [form] = Form.useForm()
  const dispatch = useDispatch()

  // update form content
  useEffect(() => {
    form.setFieldsValue(pageInfo)
  }, [pageInfo])

  function handleValuesChange() {
    dispatch(resetPageInfo(form.getFieldsValue()))
  }

  return (
    <Form
      layout="vertical"
      initialValues={pageInfo}
      onValuesChange={handleValuesChange}
      form={form}
    >
      <Form.Item
        label="title"
        name="title"
        rules={[{ required: true, message: 'Please input title' }]}
      >
        <Input placeholder="Please input title" />
      </Form.Item>
      <Form.Item label="desc" name="desc">
        <TextArea placeholder="Description..." />
      </Form.Item>
      <Form.Item label="css" name="css">
        <TextArea placeholder="Input CSS code..." />
      </Form.Item>
      <Form.Item label="js" name="js">
        <TextArea placeholder="Input JS code..." />
      </Form.Item>
    </Form>
  )
}

export default PageSetting
