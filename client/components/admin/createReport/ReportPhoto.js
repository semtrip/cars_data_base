import styles from '../../../styles/components/admin/createReportModule/reportPhoto.module.scss';
import Image from 'next/image';
import {useState, useEffect} from 'react'
const ReportPhoto = (props) => {
    const [image, setImage] = useState('');
    useEffect(() => {
        document.getElementById('image').innerHTML = ''
        if (image) {
            var files = image.target.files;
            for (var i = 0, f; f = files[i]; i++) {
                if (!f.type.match('image.*')) continue;
                var fr = new FileReader();
                fr.onload = (function(theFile) {
                return function(e) {
                    var img = document.createElement('img');
                    img.src = e.target.result;
                    document.getElementById('image').insertBefore(img, null);
                };
                })(f);
                fr.readAsDataURL(f);
            }
        }
    }, [image]);
    return (
        <div className={styles.reportPhoto}>
            <span className={styles.description}>{props.text}</span>
            <input type="file" name="file" id="input__file" onChange={event => {setImage(event)}}/>
            <label htmlFor="input__file">добавить фото</label>
            <div className={styles.image} id={'image'}/>
        </div>
    );
}

export default ReportPhoto;