import styles from '../styles/components/Seacrh.module.scss';
import {useState} from 'react'
const Search = () => {
    const [option, setOption] = useState(0)
    const placeholder = ['Например: A000AA777', 'Например: JH2PC5051M200020' ,'Например: 1HGBH41JXMN10986']
    return (
        <div className={styles.search}>
            <h2>ПОИСК АВТО ПО БАЗЕ ДАННЫХ</h2>
            <div className={styles.block}>
                <div className={styles.options}>
                    <span className={option === 0 ? styles.option + ' ' + styles.active : styles.option} onClick={()=>{setOption(0)}}>ГОС.НОМЕР</span>
                    <span className={option === 1 ? styles.option + ' ' + styles.active : styles.option} onClick={()=>{setOption(1)}}>VIN-НОМЕР</span>
                    <span className={option === 2 ? styles.option + ' ' + styles.active : styles.option} onClick={()=>{setOption(2)}}>НОМЕР КУЗОВА</span>
                </div>
                <div className={styles.input}>
                    <div className={styles.pole}><input type="text" placeholder={placeholder[option]}/></div>
                    <div className={styles.btn}>НАЙТИ</div>
                </div>
            </div>
        </div>
    );
}

export default Search;