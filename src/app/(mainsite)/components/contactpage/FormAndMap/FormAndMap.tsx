import styles from './formandmap.module.css';
import FreeEstimateForm from '../../homepage/Header/FreeEstimateForm/FreeEstimateForm';

export default function FormAndMap(){
return (
 <div className={styles.formAndMap}>
    <div className={styles.formWrapper}>
        <FreeEstimateForm />
    </div>

    <div className={styles.mapWrapper}>
        <div className={styles.menuCover} >
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d899256.9780831499!2d-80.68615945!3d28.306727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88ddfdbc3bfd766d%3A0x329bf0bb89d26b91!2sBrevard%20County%2C%20FL!5e0!3m2!1sen!2sus!4v1719358252880!5m2!1sen!2sus" width="600" height="450" style={{border: 0}}  loading="lazy" ></iframe>
        </div>
    </div>
 </div>
)};