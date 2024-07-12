import React, { FC } from 'react'
import { Form, Input, Checkbox, Space, Button } from 'antd'
import { nanoid } from 'nanoid'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { QuestionCheckboxPropsType, OptionType } from './interface'

const PropComponent: FC<QuestionCheckboxPropsType> = (props: QuestionCheckboxPropsType) => {
  const { title, isVertical, list = [], onChange, disabled } = props
  const [form] = Form.useForm()

  function handleValuesChange() {
    if (onChange == null) return

    const newValues = form.getFieldsValue() as QuestionCheckboxPropsType

    if (newValues.list) {
      newValues.list = newValues.list.filter(opt => !(opt.text == null))
    }

    const { list = [] } = newValues
    list.forEach(opt => {
      if (opt.value) return
      opt.value = nanoid(5)
    })

    onChange(newValues)
  }

  return (
    <Form
      layout="vertical"
      form={form}
      initialValues={{ title, isVertical, list }}
      disabled={disabled}
      onValuesChange={handleValuesChange}
    >
      <Form.Item label="title" name="title" rules={[{ required: true, message: 'Please input title' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="option">
        <Form.List name="list">
          {(fields, { add, remove }) => (
            <>
              {/* map all the options */}
              {fields.map(({ key, name }, index) => {
                return (
                  <Space key={key} align="baseline">
                    {/* current option wether selected */}
                    <Form.Item name={[name, 'checked']} valuePropName="checked">
                      <Checkbox />
                    </Form.Item>
                    {/* current input */}
                    <Form.Item
                      name={[name, 'text']}
                      rules={[
                        { required: true, message: 'Please input option text' },
                        {
                          validator: (_, text) => {
                            const { list = [] } = form.getFieldsValue()
                            let num = 0
                            list.forEach((opt: OptionType) => {
                              if (opt.text === text) num++
                            })
                            if (num === 1) return Promise.resolve()
                            return Promise.reject(new Error('you have repeat option'))
                          },
                        },
                      ]}
                    >
                      <Input placeholder="Please input option text..." />
                    </Form.Item>

                    {/* current option delete button */}
                    {index > 0 && <MinusCircleOutlined onClick={() => remove(name)} />}
                  </Space>
                )
              })}

              {/* add option */}
              <Form.Item>
                <Button
                  type="link"
                  onClick={() => add({ text: '', value: '', checked: false })}
                  icon={<PlusOutlined />}
                  block
                >
                  Add option
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form.Item>
      <Form.Item name="isVertical" valuePropName="checked">
        <Checkbox>Vertical options</Checkbox>
      </Form.Item>
    </Form>
  )
}

export default PropComponent
