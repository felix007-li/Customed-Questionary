import React, { FC, useEffect } from 'react'
import { Typography } from 'antd'

import axios from 'axios'

const { Title, Paragraph } = Typography

const Home: FC = () => {
  // useEffect(() => {
  //   axios.get('/api/test').then(res => console.log('axios data', res.data))
  // }, [])

  return (
    <div>
      <div>
        <Title>Questionary | Online Vote</Title>
        <Paragraph>Had created 100 Questionary, publish 90, received 980 answser</Paragraph>
      </div>
    </div>
  )
}

export default Home
