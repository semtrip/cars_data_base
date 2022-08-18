import CarsItem from '../../components/CarsItem.module'
import Footer from '../../components/footer.module'
import Header from '../../components/Header.module'
import HeaderAdmin from '../../components/HeaderAdmin.module'
import Search from '../../components/Search.module'
import styles from '../../styles/Admin.module.scss'
import { checkIsAuth } from '../../redux/features/auth/authSlice'

import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import { useSelector } from '../../redux/store'

import {useEffect} from 'react'
import { toast } from 'react-toastify'
export default function Admin() {
  const router = useRouter()
  const isAuth = useSelector(checkIsAuth)
  
  useEffect(() => {
    if(!isAuth) {
      router.push('/admin/auth')
    }
  }, [isAuth]);

  return (
    <>
    {isAuth 
    }
      <Header title={'Панель администратора'}/>
      <HeaderAdmin/>
      <div className="container">
        <div className={styles.search}>
          <Search/>
        </div>
        <div className={styles.items}>
          <h3>Недавние отчеты:</h3>
          <CarsItem/>
        </div>
        <div className={styles.items}>
          <h3>Мои отчеты:</h3>
          <CarsItem/>
        </div>
        <div className={styles.items}>
          <h3>Все отчеты:</h3>
          <CarsItem/>
        </div>
      </div>
      <Footer/>
    </>
  )
}
