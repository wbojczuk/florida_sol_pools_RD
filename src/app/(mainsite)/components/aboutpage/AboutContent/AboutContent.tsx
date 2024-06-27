import Link from 'next/link';
import styles from './aboutcontent.module.css';

export default function AboutContent(){
return (
 <div className={styles.community}>
    <div className={styles.textWrapper}>
        <h4>Who We Are</h4>
        <h2>About Us</h2>
        <p>Florida Sol Pools, serving Brevard County, FL, delivers high-quality, custom-built pools using in-house employees for consistent craftsmanship. Our experienced team manages the entire process, ensuring precision and care in every installation.
<br /><br />
We provide 3D drawings to visualize your dream pool before construction begins, offering a clear preview of the final result. At Florida Sol Pools, we combine expertise, creativity, and personalized service to create stunning, tailored pools.</p>
        <Link className='main-link' href={"/contact"}>Contact Us</Link>
    </div>
    <div className={styles.imgWrapper}>
        <img src="/img/about.webp" alt="image of an indoor pool" className="bg-img" />
        <div className={`shader ${styles.shader}`}></div>
    </div>
 </div>
)};