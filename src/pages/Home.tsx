import React, { FC, useEffect } from 'react'
import { Button, Typography } from 'antd'
import { MANAGE_INDEX_PATHNAME } from '../router/'
import styles from './Home.module.scss'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const { Title, Paragraph } = Typography

const Home: FC = () => {
  const nav = useNavigate()
  // useEffect(() => {
  //   axios.get('/api/test').then(res => console.log('axios data', res.data))
  // }, [])

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title>Questionary | Online Vote</Title>
        <Paragraph>Had created 100 Questionary, published 90, received 980 answser</Paragraph>
        <div>
          <Button type="primary" onClick={() => nav(MANAGE_INDEX_PATHNAME)}>
            Go
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home
