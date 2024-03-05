import React, { FC } from 'react'
import { Typography } from 'antd'

const { Title, Paragraph } = Typography

const Home: FC = () => {
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
