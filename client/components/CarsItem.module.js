import Link from 'next/link';
import styles from '../styles/components/CarsItem.module.scss';
const CarsItem = () => {
    return (
        <div className={styles.item}>
            <span className={styles.name}>MERCEDES GL500</span>
            <div className={styles.info}>
                <span className={styles.info_item}><i>Гос. номер:</i><b>A001AA777</b></span>
                <span className={styles.info_item}><i>VIN:</i><b>WDB2093611F062248</b></span>
                <span className={styles.info_item}><i>Номер кузова:</i><b>WDВ2093611F062248</b></span>
            </div>
            <div className={styles.info}>
                <span className={styles.info_item}><i>Гос. номер:</i><b>A001AA777</b></span>
                <span className={styles.info_item}><i>VIN:</i><b>WDB2093611F062248</b></span>
                <span className={styles.info_item}><i>Номер кузова:</i><b>WDВ2093611F062248</b></span>
            </div>
            <div className={styles.btns}>
                <div className='btn print'/>
                <div className='btn pdf'/>
                <Link href={'/report'}><div className='btn'>Полный отчет</div></Link>
            </div>
        </div>
    );
}

export default CarsItem;