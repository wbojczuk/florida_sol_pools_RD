import Link from 'next/link';
import styles from './whyus.module.css';

export default function WhyUs(){
return (
 <div className={styles.community}>
    <div className={styles.textWrapper}>
        <h4>Why We’re the best</h4>
        <h2>Why Choose Us</h2>
        <p>Choose Florida Sol Pools for unparalleled quality and dedication. We use in-house employees, not subcontractors, ensuring consistent, high-quality workmanship from start to finish. Our 3D drawings let you visualize your future pool with precision, aligning your vision with the final product. At Florida Sol Pools, we're committed to turning your dream pool into a reality with professional, reliable service.</p>
        <Link className='main-link' href={"/contact"}>Contact Us</Link>
    </div>
    <div className={styles.imgWrapper}>
        <img src="/img/whyus.webp" alt="image of an indoor pool" className="bg-img" />
        <div className={`shader ${styles.shader}`}></div>
    </div>
 </div>
)};