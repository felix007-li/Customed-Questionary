import React, { FC, useState } from 'react'
import styles from './Logo.module.scss'
import { Space, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { FormOutlined } from '@ant-design/icons'
import { HOME_PATHNAME } from '../router/'

const { Title } = Typography
const Logo: FC = () => {
  const [pathname, setPathname] = useState(HOME_PATHNAME)

  return (
    <div className={styles.container}>
      <Link to={pathname}>
        <Space>
          <Title>
            <FormOutlined />
          </Title>
          <Title>Questionary</Title>
        </Space>
      </Link>
    </div>
  )
}

export default Logo
