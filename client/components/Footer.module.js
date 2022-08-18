import styles from '../styles/components/Footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const myLoader = ({ src }) => {
    return `/img/${src}`
}
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <div className={styles.logo_img}>
                            <Image
                                loader={myLoader}
                                src={`logo_w.svg`}
                                alt="Picture of the author"
                                layout="fill"
                                objectFit='contain'
                                priority={true}
                            />
                        </div>
                        <span>COMPANY NAME</span>
                    </div>
                    <div className={styles.nav}>
                        <Link href="/"><a>Nav item</a></Link>
                        <Link href="/"><a>Nav item</a></Link>
                        <Link href="/"><a>Nav item</a></Link>
                        <Link href="/"><a>Nav item</a></Link>
                    </div>
                    <span className={styles.phone}>8800 000 00 00</span>
                </div>
                <div className={styles.social}>
                    <div className={styles.links}>
                        <div className={styles.link + ' ' + styles.wa}></div>
                        <div className={styles.link + ' ' + styles.vk}></div>
                        <div className={styles.link + ' ' + styles.tg}></div>
                    </div>
                    <span>ооо  “company namy” 2022 </span>
                </div>
            </div>
        </div>
    );
}

export default Footer;