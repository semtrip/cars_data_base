import React from 'react';

import styles from '../../../styles/components/admin/settingsReportModule/settingSelect.module.scss'

import {useState, useEffect} from 'react'
const SetingSelect = ({data, dataIndex, i, b, change}) => {

    useEffect(() => {
        dataIndex === 'input' ? setIndex(0) 
        :dataIndex === 'photo' ? setIndex(1) 
        :dataIndex === 'hint'? setIndex(2) 
        :dataIndex === 'damage'? setIndex(3)
        : setIndex(0) 
    }, [dataIndex]);

    const [show, setShow] = useState(false);
    const [index, setIndex] = useState(0)

    const changeItem = (a) => {
        setIndex(a)
        switch (a) {
            case 0:
                change(i, b, 'input')
                break;
            case 1:
                change(i, b, 'photo')
                break;
            case 2:
                change(i, b, 'hint')
                break;
            case 3:
                change(i, b, 'damage')
                break;
        
            default:
                change(i, b, 'input')
                break;
        }
    }

    return (
        <div className={styles.select} onClick={()=>{setShow(!show)}}>
            {data[index]}
            {
                show &&
                <div className={styles.items}>
                    {
                        data.map((item, a)=>{
                            return <div className={styles.item} key={a} onClick={()=>{changeItem(a)}}>{item}</div>
                        })
                    }
                </div>
            }

        </div>
    );
}

export default SetingSelect;
