import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'

const { Header, Content } = Layout

const MainLayout: FC = () => {
  return (
    <Layout>
      <Header>
        <div></div>
        <div></div>
      </Header>
      <Layout>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout
