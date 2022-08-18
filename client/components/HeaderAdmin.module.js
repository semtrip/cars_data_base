import styles from '../styles/components/HeaderAdmin.module.scss';

import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/features/auth/authSlice';

import Link from 'next/link'

const isGeneral = true

const HeaderAdmin = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const exit = () => {
        router.push('/admin/auth')
        dispatch(logout())
        window.localStorage.removeItem('token')
    }
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.content}>
                    <h2>Панель администратора</h2>
                    <div className={styles.btns}>
                    {
                        isGeneral &&
                        <Link href={'/admin/settingsReport'}>
                            <div className={styles.btn}>Настроить отчет</div>
                        </Link>
                        
                    }
                        <Link href={'/admin/createReport'}>
                            <div className={styles.btn}>Создать отчет</div>
                        </Link>
                        <div className={styles.btn + ' ' + styles.exit} onClick={exit}>Выйти</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderAdmin;