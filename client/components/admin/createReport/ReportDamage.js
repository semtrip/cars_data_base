import {useState, useEffect} from 'react'

import styles from '../../../styles/components/admin/createReportModule/reportDamage.module.scss';
import ReportPhoto from './reportPhoto';

const ReportDamage = () => {
    const [position, setPosition] = useState({x:0, y:0})
    const [count, setCount] = useState(0)
    const [isMouseDown, setIsMouseDown] = useState(false)
    const [damageArray, setDamageArray] = useState([])
    const getPos = (event) => {
        let box = document.getElementById('pole').getBoundingClientRect()
        let x = event.clientX - box.x
        let y = event.clientY - box.y
        setPosition({x, y})
        if(isMouseDown) {
            console.log('COUNT GET: ', count)
            let mark = document.getElementById(`mark${count}`)
            mark.setAttributeNS(null, 'cx', x);
            mark.setAttributeNS(null, 'cy', y);
        }
    }

    const createmark = () => {
        setIsMouseDown(true)
        let id = new Date().valueOf()
        const group = document.getElementById('marks')
        var svgns = "http://www.w3.org/2000/svg"
        var circle = document.createElementNS(svgns, 'circle');
        circle.setAttributeNS(null, 'cx', position.x);
        circle.setAttributeNS(null, 'cy', position.y);
        circle.setAttributeNS(null, 'r', 7);
        circle.setAttributeNS(null, 'style', 'fill: #F03249; content: 1;');
        circle.setAttributeNS(null, 'id', 'mark'+ id)
        group.appendChild(circle);
        console.log('COUNT CREATE: ', id) 
        setCount(id)
        createBlock()        
    }
    const savemark = () => {
        setIsMouseDown(false)
    }
    const createBlock = () => {
        let data = damageArray
        data.push({type: 0, photo: {}, commnt: ''})
        setDamageArray(data)
    }
    useEffect(() => {
        document.getElementById('pole').onmousemove = getPos
        document.getElementById('pole').onmousedown = createmark
        document.getElementById('pole').onmouseup = savemark
    });
    return (
        <div className={styles.reportDamage}>
            <div className={styles.pole} id={'pole'}>
                <svg width="100%" height="350px" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id='marks'></g>
                    <rect width="525" height="350"/>
                </svg>
            </div>
            {JSON.stringify(position)}
            <div className={styles.infoMark}>
            <   ReportPhoto text={''}/>
            </div>
        </div>
    );
}

export default ReportDamage;