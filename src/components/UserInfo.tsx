import React, { FC, useState } from 'react'
import { Button, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { LOGIN_PATHNAME } from '../router'
import { removeToken } from '../utils/user-token'
import useGetUserInfo from '../hooks/useGetUserInfo'
import { logoutReducer } from '../store/userReducer'

const UserInfo: FC = () => {
  const nav = useNavigate()
  const dispatch = useDispatch()
  const USERNAME_KEY = 'USERNAME'
  const PASSWORD_KEY = 'PASSWORD'

  const { username, nickname } = useGetUserInfo()
  function logout() {
    dispatch(logoutReducer())
    removeToken()
    message.success('Logout successfully!')
    localStorage.removeItem(USERNAME_KEY)
    localStorage.removeItem(PASSWORD_KEY)
    nav(LOGIN_PATHNAME)
  }

  const UserInfo = (
    <>
      <span style={{ color: '#e8e8e8' }}>
        <UserOutlined />
        {nickname}
      </span>
      <Button type="link" onClick={logout}>
        Quit
      </Button>
    </>
  )

  const Login = <Link to={LOGIN_PATHNAME}>Login</Link>
  return <div>{localStorage.getItem(USERNAME_KEY) ? UserInfo : Login}</div>
}

export default UserInfo
