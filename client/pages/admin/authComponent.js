import Footer from "../../components/footer.module";
import Header from "../../components/Header.module";

import styles from '../../styles/Auth.module.scss'

import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { useDispatch, useSelector } from '../../redux/store'
import { registerUser, loginUser } from "../../redux/features/auth/authSlice";

import { checkIsAuth } from '../../redux/features/auth/authSlice'

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const authComponent = () => {
    const [active, setActive] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [name, setName] = useState('')
    const {status, error, token} = useSelector(state => state.auth)
    const isAuth = useSelector(checkIsAuth)

    const router = useRouter()

    const dispatch = useDispatch()

    useEffect(() => {
        if(isAuth) {
            router.push('/admin')
        }
        if(status) {
            toast(status)
            setPassword('')
            setPasswordConfirm('')
            setEmail('')
            setName('')
        }
        if(error) {
            toast.error(error)
            setPassword('')
            setPasswordConfirm('')
            setEmail('')
            setName('')
        }
    }, [status, error, token, isAuth]);

    function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }


    const setForm = () => {
        setActive(!active)
        setPassword('')
        setPasswordConfirm('')
        setEmail('')
        setName('')
    }

    const handleSubmitRegister = () => {
        try {
            if(email !== '' && password !== '' && passwordConfirm !== '' && name !== '') {
                if(validateEmail(email)) {
                    if(password !== passwordConfirm) {
                        toast.error('Пароли не совпадают')
                        return
                    }
                    dispatch(registerUser({email, password, name}))
                } else {
                    toast.error('Неверный e-mail')
                }
            } else {
                toast.error('Заполните все поля формы')
            }

        } catch (error) {
            console.log(error)
        }
    }
    const handleSubmitLogin = () => {
        try {
            if(email !== '' && password !== '') {
                if(validateEmail(email)) {
                    dispatch(loginUser({email, password}))
                } else {
                    toast.error('Неверный e-mail')
                }
            } else {
                toast.error('Заполните все поля формы')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Header title={'Вход'}/>
            <div className="container">
                <div className={styles.auth}>
                {   !active ?
                    <div className={styles.block}>
                        <h2 className={styles.title}>Авторизация</h2>
                        <span className={styles.description}>Введите данные для входа в личный кабинет</span>
                        <div className={styles.input}><input type="email" placeholder="Ваш E-mail" value={email} onChange={event => {setEmail(event.target.value)}}/></div>
                        <div className={styles.input}><input type="password" placeholder="Ваш пароль" value={password} onChange={event => {setPassword(event.target.value)}}/></div>
                        <div className={styles.links}>
                            <span className={styles.link} onClick={setForm}>Регистрация</span>
                            <span className={styles.link}>Забыли пароль?</span>
                        </div>
                        <div className={styles.btn} onClick={handleSubmitLogin}>ВОЙТИ В ЛИЧНЫЙ КАБИНЕТ</div>
                    </div>
                    :
                    <div className={styles.block}>
                        <h2 className={styles.title}>Регистрация</h2>
                        <span className={styles.description}>Заполните все поля для создание нового аккаунта</span>
                        <div className={styles.input}><input type="email" placeholder="Ваш E-mail" value={email} onChange={event => {setEmail(event.target.value)}}/></div>
                        <div className={styles.input}><input type="text" placeholder="Ваше имя" value={name} onChange={event => {setName(event.target.value)}}/></div>
                        <div className={styles.input}><input type="password" placeholder="Придумайте пароль" value={password} onChange={event => {setPassword(event.target.value)}}/></div>
                        <div className={styles.input}><input type="password" placeholder="Потвердите пароль" value={passwordConfirm} onChange={event => {setPasswordConfirm(event.target.value)}}/></div>
                        <div className={styles.links}>
                            <span className={styles.link} onClick={setForm}>Авторизация</span>
                            <span className={styles.link}></span>
                        </div>
                        <div className={styles.btn} onClick={handleSubmitRegister}>СОЗДАТЬ АККАУНТ</div>
                    </div>
                }
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default authComponent;