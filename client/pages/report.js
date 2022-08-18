import Image from 'next/image';
import {useState, useEffect} from 'react'

import Footer from '../components/footer.module';
import Header from '../components/Header.module';
import Schem from '../components/schem.module';
import styles from '../styles/report.module.scss';

const myLoader = ({ src }) => {
    return `./img/cars/gl500/${src}`
}
const myLoader2 = ({ src }) => {
    return `./img/cars/gl500/damage/${src}`
}
const data = [
    {   
        x: '337',
        y: '589',
        type: 'red',
        name: 'Задняя правая дверь',
        description: 'Вмятина 5-10см',
        description2: 'без кузовного ремента',
        img: '0.jpg'
    },
    {   
        x: '588',
        y: '555',
        type: 'yellow',
        name: 'Переднее правое крыло',
        description: 'Царапина 5-10см',
        description2: 'без кузовного ремента',
        img: '1.jpg'
    }
]

const report = () => {
    const [position, setPosition] = useState(0)
    const [modalDamage, setModalDamage] = useState(false)
    const [modalDamageData, setModalDamageData] = useState({})

    useEffect(() => {
        window.addEventListener('scroll', function() {
            setPosition(this.scrollY)
        });
        if(modalDamage) {
            document.body.classList.add('show-modal')
        } else {
            document.body.classList.remove('show-modal')
        }
    }, [modalDamage]);
    const showModalDamage = (id) => {
        setModalDamageData({name: data[id].name, description: data[id].description + ' ' + data[id].description2, img: data[id].img})
        setModalDamage(true)
    }
    const closeModalDamage = () => {
        setModalDamageData({})
        setModalDamage(false)
    }
    return (
        <>
            <Header title={'Отчет по MERSEDES GL500 номер A001AA777'}/>
            <div className={styles.report}>
                <div className={styles.head} id="info">
                    <div className="container">
                        <div className={styles.content}>
                            <div className={position < 100 ? styles.nav : styles.nav + ' ' + styles.active}>
                                <a href="#info">Информация</a>
                                <a href="#photo">Фотографии</a>
                                <a href="#pts">ПТС</a>
                                <a href="#base">Базовые данные</a>
                                <a href="#damage_block">Состояние кузова</a>
                            </div>  
                            <div className={styles.main_info}>
                                <div className={styles.top}>
                                    <span>Отчёт ID 000000 от 18.07.2021 12:00</span>
                                    <div className={styles.btns}>
                                        <div className='btn print'/>
                                        <div className='btn pdf'/>
                                    </div>
                                </div>
                                <span className={styles.name}>MERSEDES GL500</span>
                                <div className={styles.info_block}>
                                    <div className={styles.items}>
                                        <div className={styles.item}>
                                            <span>Гос.номер:</span>
                                            <div className={styles.line}/>
                                            <span>A001AA777</span>
                                        </div>
                                        <div className={styles.item}>
                                            <span>Гос.номер:</span>
                                            <div className={styles.line}/>
                                            <span>A001AA777</span>
                                        </div>
                                        <div className={styles.item}>
                                            <span>Гос.номер:</span>
                                            <div className={styles.line}/>
                                            <span>A001AA777</span>
                                        </div>
                                        <div className={styles.item}>
                                            <span>Гос.номер:</span>
                                            <div className={styles.line}/>
                                            <span>A001AA777</span>
                                        </div>
                                        <div className={styles.item}>
                                            <span>Гос.номер:</span>
                                            <div className={styles.line}/>
                                            <span>A001AA777</span>
                                        </div>
                                        <div className={styles.item}>
                                            <span>Гос.номер:</span>
                                            <div className={styles.line}/>
                                            <span>A001AA777</span>
                                        </div>
                                        <div className={styles.item}>
                                            <span>Гос.номер:</span>
                                            <div className={styles.line}/>
                                            <span>A001AA777</span>
                                        </div>
                                        <div className={styles.item}>
                                            <span>Гос.номер:</span>
                                            <div className={styles.line}/>
                                            <span>A001AA777</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className={styles.photo} id='photo'>
                        <span className={styles.title}>Фото транспортного средства</span>
                        <div className={styles.items}>
                            <div className={styles.item}>
                                <Image
                                    loader={myLoader}
                                    src={`1.png`}
                                    alt="MERSEDES GL500"
                                    layout="fill"
                                    objectFit='contain'
                                    priority={true}
                                />
                            </div>
                            <div className={styles.item}>
                                <Image
                                    loader={myLoader}
                                    src={`1.png`}
                                    alt="MERSEDES GL500"
                                    layout="fill"
                                    objectFit='contain'
                                    priority={true}
                                />
                            </div>
                            <div className={styles.item}>
                                <Image
                                    loader={myLoader}
                                    src={`1.png`}
                                    alt="MERSEDES GL500"
                                    layout="fill"
                                    objectFit='contain'
                                    priority={true}
                                />
                            </div>
                            <div className={styles.item}>
                                <Image
                                    loader={myLoader}
                                    src={`1.png`}
                                    alt="MERSEDES GL500"
                                    layout="fill"
                                    objectFit='contain'
                                    priority={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className={styles.info} id="pts">
                        <span className={styles.title}>ПТС</span>
                        <div className={styles.info_block}>
                            <div className={styles.items}>
                                <div className={styles.item}>
                                    <span>Гос.номер:</span>
                                    <div className={styles.line}/>
                                    <span>A001AA777</span>
                                </div>
                                <div className={styles.item}>
                                    <span>Гос.номер:</span>
                                    <div className={styles.line}/>
                                    <span>A001AA777</span>
                                </div>
                                <div className={styles.item}>
                                    <span>Гос.номер:</span>
                                    <div className={styles.line}/>
                                    <span>A001AA777</span>
                                </div>
                                <div className={styles.item}>
                                    <span>Гос.номер:</span>
                                    <div className={styles.line}/>
                                    <span>A001AA777</span>
                                </div>
                                <div className={styles.item}>
                                    <span>Гос.номер:</span>
                                    <div className={styles.line}/>
                                    <span>A001AA777</span>
                                </div>
                                <div className={styles.item}>
                                    <span>Гос.номер:</span>
                                    <div className={styles.line}/>
                                    <span>A001AA777</span>
                                </div>
                                <div className={styles.item}>
                                    <span>Гос.номер:</span>
                                    <div className={styles.line}/>
                                    <span>A001AA777</span>
                                </div>
                                <div className={styles.item}>
                                    <span>Гос.номер:</span>
                                    <div className={styles.line}/>
                                    <span>A001AA777</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className={styles.info} id="base">
                        <span className={styles.title}>Базовые данные</span>
                        <div className={styles.info_block}>
                            <div className={styles.items}>
                                <div className={styles.item}>
                                    <span>Гос.номер:</span>
                                    <div className={styles.line}/>
                                    <span>A001AA777</span>
                                </div>
                                <div className={styles.item}>
                                    <span>Гос.номер:</span>
                                    <div className={styles.line}/>
                                    <span>A001AA777</span>
                                </div>
                                <div className={styles.item}>
                                    <span>Гос.номер:</span>
                                    <div className={styles.line}/>
                                    <span>A001AA777</span>
                                </div>
                                <div className={styles.item}>
                                    <span>Гос.номер:</span>
                                    <div className={styles.line}/>
                                    <span>A001AA777</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className={styles.damage} id='damage_block'>
                        <span className={styles.title}>Состояние кузова</span>
                        <div className={styles.items}>
                            <div className={styles.text}>
                            {
                                data.map((item, i) =>{
                                    return (
                                        <div className={styles.item} key={i} onClick={()=>{showModalDamage(i)}}>
                                            <span>{item.name}:</span>
                                            <div className={styles.line}/>
                                            <span>{item.description}</span>
                                        </div>
                                    ) 
                                })
                            }
                            </div>
                            <div className={styles.schem}>
                                <Schem
                                    damage={data}
                                    event={showModalDamage}
                                />
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <b>Нажмите на точку обозначенную цветом на схеме чтобы посмотреть детальное описание.</b>
                            <span className={styles.red}>Какое-то описание</span>
                            <span className={styles.yellow}>Какое-то описание</span>
                            <span className={styles.blue}>Какое-то описание</span>
                            <span className={styles.green}>Какое-то описание</span>
                            <span className={styles.pink}>Какое-то описание</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            {
                modalDamage ?
                    <div className={styles.modal}>
                        <div className={styles.block}>
                            <div className={styles.close} onClick={closeModalDamage}/>
                            <span className={styles.name}>{modalDamageData.name}</span>
                            <span className={styles.title}>Описание:</span>
                            <span className={styles.description}>{modalDamageData.description}</span>
                            <div className={styles.image}>
                                <Image
                                    loader={myLoader2}
                                    src={modalDamageData.img}
                                    alt={modalDamageData.name}
                                    layout="fill"
                                    objectFit='contain'
                                    priority={true}
                                />
                            </div>
                        </div>
                    </div>
                :null
            }
        </>
    );
}

export default report;