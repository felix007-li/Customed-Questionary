import React, { FC } from 'react'
import { Result, Button } from 'antd'
// import { useNavigate } from 'react-router-dom'
// import MANAGE_INDEX_PATHNAME from '../router'

const NotFound: FC = () => {
  //   const nav = useNavigate()

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, we did not found this page"
      extra={<Button type="primary">Back to home</Button>}
    ></Result>
  )
}

export default NotFound
