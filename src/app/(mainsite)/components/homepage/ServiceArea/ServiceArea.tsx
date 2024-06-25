import Link from 'next/link';
import styles from './servicearea.module.css';

export default function ServiceArea(){
return (
 <div className={styles.serviceArea}>
    <div className={styles.textWrapper}>
        <h2>
            <span className="underline">Serving All</span> <br />
            <span className="underline">Of Brevard,</span> <br />
            <span className="underline">Florida!</span>
        </h2>
        <Link href={"/contact"} className="main-link">Contact Us</Link>
    </div>
    <div className={styles.mapWrapper}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d899256.9780831499!2d-80.68615945!3d28.306727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88ddfdbc3bfd766d%3A0x329bf0bb89d26b91!2sBrevard%20County%2C%20FL!5e0!3m2!1sen!2sus!4v1719358252880!5m2!1sen!2sus" style={{"border":0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
 </div>
)};