import React from 'react';
import Footer from '../../components/footer.module';
import Header from '../../components/Header.module';
import HeaderAdmin from '../../components/HeaderAdmin.module';

import styles from '../../styles/Settings.module.scss'

import {useState, useEffect, useReducer} from 'react';

import SettingInput from '../../components/admin/settingsReport/settingInput';
import SetingSelect from '../../components/admin/settingsReport/settingSelect';

const testData = [
    {name: 'Тестовый этап 1', items: [
        {type: 'input', name: 'Введите пробег авто'},
        // {type: 'hint', name: 'Введите пробег авто'},
        // {type: 'photo', name: 'Введите пробег авто'},
        // {type: 'damage', name: 'Введите пробег авто'},
        // {type: 'input', name: 'Введите пробег авто'}
    ]},
    {name: 'Тестовый этап 2', items: [
        {type: 'input', name: 'Введите пробег авто'}
    ]}
]


const SettingsReportComponent = () => {
    const [data, setData] = useState(testData);
    const [modalShow, setModalShow]  = useState(false)
    const [modalValue, setModalValue] = useState('')
    const [_, forceUpdate] = useReducer((x) => x + 1, 0);

    useEffect(() => {
        if(modalShow) {
            document.body.classList.add('show-modal')
        } else {
            document.body.classList.remove('show-modal')
        }
        setModalValue('')
    }, [data, modalShow]);

    const addStage = () => {
        let localData = data
        localData.push({name: modalValue, items: [{type: 'input', name: 'Введите пробег авто'}]})
        setData(localData)
        setModalShow(false)
    }
    const delStage = (i) => {
        let localData = data
        localData.splice(i, 1)
        setData(localData)
        forceUpdate()
    }
    const addOption = (i) => {
        let localData = data
        localData[i].items.push({type: 'input', name: ''})
        setData(localData)
        forceUpdate()
    }
    const delOption = (i, b) => {
        if(confirm('Вы точно хотите удалить элемент?')) {
            let localData = data
            localData[i].items.splice(b, 1)
            setData(localData)
            forceUpdate()
        }
    }
    const changeSelect = (i, b, type) => {
        let localData = data
        localData[i].items[b].type = type
        setData(localData)
        forceUpdate()
    }
    const changeTitle = (i, b, text) => {
        let localData = data
        localData[i].items[b].name = text
        setData(localData)
        forceUpdate()
    }
    return (
        <>
            <Header title={'Создание отчета'}/>
            <HeaderAdmin/>
            <div className="container">
                <div className={styles.loyout}>
                <span className={styles.main_title}>Настройки отчета</span>
                    <div className={styles.stages}>
                        {
                            data.map((item, i)=>{
                                return(
                                    <div className={styles.stage} key={i}>
                                        <div className={styles.head}>
                                            <span className={styles.title}>Этап {i +1} | {item.name}</span>
                                            <div className={styles.btns}>
                                                <div className={styles.add} onClick={()=>{addOption(i)}}></div>
                                                <div className={styles.del} onClick={()=>{delStage(i)}}></div>
                                            </div>
                                        </div>
                                        {
                                            item.items.map((option, b)=>{
                                                return (
                                                        <div className={styles.option} key={b}>
                                                            <div className={styles.info}>Элемент {b+1} <span className={styles.del} onClick={()=>{delOption(i, b)}}>удалить</span></div>
                                                            <SettingInput
                                                                value={option.name}
                                                                change={changeTitle}
                                                                i={i}
                                                                b={b}
                                                            />
                                                            <SetingSelect
                                                                data={['Поле для ввода', 'Фото', 'Подсказка', 'Повреждения']}
                                                                dataIndex={option.type}
                                                                change={changeSelect}
                                                                i={i}
                                                                b={b}
                                                            />
                                                        </div>
                                                    )                                                
                                            })
                                        }
                                    </div>
                                ) 
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={styles.btns_settings}>
                <div className={styles.btn_option} onClick={()=>{setModalShow(true)}}>Создать<br/>этап</div>
                <div className={styles.btn_option + " " + styles.green }>Сохранить</div>
                <div className={styles.btn_option + " " + styles.red }>Сбросить</div>
            </div>
            {
                modalShow &&
                <div className={styles.modal_add_stage}>
                    <div className={styles.block}>
                        <span className={styles.title}>Создание этапа</span>
                        <div className={styles.content}>
                            <input type="text" value={modalValue} onChange={event => setModalValue(event.target.value)}/>
                            <div className={styles.btns}>
                                <div className="btn green" onClick={()=>{addStage()}}>Создать</div>
                                <div className="btn red" onClick={()=>{setModalShow(false)}}>Отмена</div>
                            </div>
                        </div>
                    </div>
                </div> 
            }
            <Footer/>
        </>
    );
}

export default SettingsReportComponent;
