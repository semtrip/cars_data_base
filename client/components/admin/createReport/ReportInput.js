import styles from '../../../styles/components/admin/createReportModule/reportInput.module.scss';
import {useState, useEffect} from 'react'
const ReportInput = (props) => {
    const [value, setValue] = useState('');
    useEffect(() => {
        props.callback(value)
    }, [value]);
    return (
        <div className={styles.reportInput}>
            <input type={props.type} placeholder={props.placeholder} value={value} onChange={event => {setValue(event.target.value)}}/>
        </div>
    );
}

export default ReportInput;