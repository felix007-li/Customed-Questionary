import { useEffect, useState } from 'react'
import { useRequest } from 'ahooks'
import { useDispatch } from 'react-redux'
import useGetUserInfo from './useGetUserInfo'
import { getUserInfoService } from '../services/user'
import { loginReducer } from '../store/userReducer'
import { useLocation } from 'react-router-dom'

function useLoadUserData() {
  const dispatch = useDispatch()
  const [waitingUserData, setWaitingUserData] = useState(true)
  const { pathname } = useLocation()
  //   if (pathname.startsWith('/login' || pathname.startsWith('/register'))) {
  //     setWaitingUserData(false)
  //     return { waitingUserData }
  //   }
  // Load user info using ajax
  const { run } = useRequest(getUserInfoService, {
    manual: true,
    onSuccess(result) {
      const { username, nickname } = result
      dispatch(loginReducer({ username, nickname }))
    },
    onFinally() {
      setWaitingUserData(false)
    },
  })

  // Is there user info be saved in redux store?
  const { username } = useGetUserInfo()
  useEffect(() => {
    if (username) {
      setWaitingUserData(false)
      return
    }
    // if (!pathname.startsWith('/login' || !pathname.startsWith('/register'))) {
    //   setWaitingUserData(false)
    //   return
    // }
    run()
  }, [username, pathname])

  return { waitingUserData }
}

export default useLoadUserData
