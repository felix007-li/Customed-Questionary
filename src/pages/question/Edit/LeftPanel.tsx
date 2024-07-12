import React, { FC } from 'react'
import { Tabs } from 'antd'
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'
import Layers from './Layers'

const LeftPanel: FC = () => {
  const tabsItems = [
    {
      key: 'componentLib',
      label: (
        <span>
          <AppstoreOutlined />
          Components
        </span>
      ),
    },
    {
      key: 'layers',
      label: (
        <span>
          <BarsOutlined />
          Layers
        </span>
      ),
      children: <Layers />,
    },
  ]

  return <Tabs defaultActiveKey="componentLib" items={tabsItems} />
}

export default LeftPanel
