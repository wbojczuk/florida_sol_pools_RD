import Link from 'next/link';
import styles from './whyus.module.css';

export default function WhyUs(){
return (
 <div className={styles.community}>
    <div className={styles.textWrapper}>
        <h4>Why We’re the best</h4>
        <h2>Why Choose Us</h2>
        <p>At Blue Village Property Services LLC, we believe in turning your property maintenance needs into a hassle-free experience. Our team is dedicated to delivering top-notch service with efficiency and professionalism. No task is too big or too small for us—whether it's routine upkeep or a major repair, we’re ready to tackle it all. Let's get it done right the first time, so you can enjoy a well-maintained property without the stress. Trust us to keep your property in prime condition, every day.</p>
        <Link className='main-link' href={"/contact"}>Contact Us</Link>
    </div>
    <div className={styles.imgWrapper}>
        <img src="/img/whyus.png" alt="image of an indoor pool" className="bg-img" />
        <div className={`shader ${styles.shader}`}></div>
    </div>
 </div>
)};