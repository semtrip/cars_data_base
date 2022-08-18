import styles from '../styles/components/Header.module.scss'

import Image from 'next/image'
import Link from 'next/link'
import Meta from './meta.module'

import { checkIsAuth } from '../redux/features/auth/authSlice'

import { useSelector } from 'react-redux'

const myLoader = ({ src }) => {
    return `/img/${src}`
}

const Header = ({title}) => {

    return (
        <div className={styles.header}>
            <Meta title={title}/>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <div className={styles.logo_img}>
                            <Image
                                loader={myLoader}
                                src={`logo.svg`}
                                alt="Picture of the author"
                                layout="fill"
                                objectFit='contain'
                                priority={true}
                            />
                        </div>
                        <span>COMPANY NAME</span>
                    </div>
                    <div className={styles.nav}>
                        <Link href="/admin"><a>admin</a></Link>
                        <Link href="/"><a>Nav item</a></Link>
                        <Link href="/"><a>Nav item</a></Link>
                        <Link href="/"><a>Nav item</a></Link>
                    </div>
                    <span className={styles.phone}>8800 000 00 00</span>
                </div>
            </div>
        </div>
    );
}

export default Header;