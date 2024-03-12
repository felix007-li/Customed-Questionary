import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import styles from './MainLayout.module.scss'
import Logo from '../components/Logo'

const { Header, Content, Footer } = Layout

const MainLayout: FC = () => {
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div></div>
      </Header>
      <Layout>
        <Content>
          <Outlet />
        </Content>
      </Layout>
      <Footer>Questionary &copy;2024 - present. Created by Li</Footer>
    </Layout>
  )
}

export default MainLayout
