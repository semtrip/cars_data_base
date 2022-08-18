import React from 'react';

import styles from '../../../styles/components/admin/settingsReportModule/settingInput.module.scss'
import {useState} from 'react'
const SettingInput = ({value, i, b, change}) => {
    const [localValue, setLocalValue] = useState(value);
    const changeText = (text) => {
        setLocalValue(text)
        change(i, b, text)
    }
    return (
        <div className={styles.title}>
            <input type="text" placeholder={'Введите заголовок'} value={localValue} onChange={event=>changeText(event.target.value)}/>
        </div>
    );
}

export default SettingInput;
