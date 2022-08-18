import {useState} from 'react'
import ReportDamage from '../../components/admin/createReport/reportDamage';
import ReportInput from '../../components/admin/createReport/reportInput';
import ReportPhoto from '../../components/admin/createReport/reportPhoto';
import ReportSelect from '../../components/admin/createReport/ReportSelect';
import Meta from '../../components/meta.module';
import styles from '../../styles/components/admin/createReport.module.scss';
const createReport = () => {
    const [inputData, setInputData] = useState([]);
    return (
        <div className={styles.page}>
        <Meta title={'Создание отчета'}/>
            <div className={styles.page_info}>
                <div className="container">
                    <div className={styles.content}>
                        <span>Создание отчета</span>
                    </div>
                </div>
            </div>
            <div className={styles.task}>
                <div className="container">
                    <div className={styles.content}>
                        <span className={styles.title}>Задание 1</span>
                        <p className={styles.description}>Возьмите документы(ПТС, СТС) транспортного средства в руки и заполните требуемые данные.</p>
                        <div className={styles.block}>
                            <span className={styles.title}>Этап 1/5</span>
                            <p className={styles.description}>В ПТС найдите сроку VIN и введите значения в поле ниже</p>
                            <div className={styles.option}>
                                <ReportInput type={'text'} placeholder={'Например: WDB2093611F062248'} callback={setInputData}/>
                                <ReportSelect/>
                                <ReportPhoto text={'Добавьте фотографию приборной панели, на которй четко видно пробег авто.'}/>
                                <ReportDamage/>
                            </div>
                            <div className={styles.btns}>
                                <div className={styles.btn + ' ' + styles.back}>НАЗАД</div>
                                <div className={styles.btn + ' ' + styles.next} onClick={()=>{console.log(inputData)}}>ДАЛЕЕ</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
}
export default createReport;