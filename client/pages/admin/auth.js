import { useDispatch } from '../../redux/store'

import { getMe } from '../../redux/features/auth/authSlice'


import {useEffect} from 'react'

import Auth from './authComponent'

export default function Main() {
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMe())
  }, [dispatch]);

  return (
    <Auth/>
  )
}
