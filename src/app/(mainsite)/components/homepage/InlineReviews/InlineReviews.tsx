"use client"
import styles from "./inlinereviews.module.css"
import Review from "../../reviewspage/Reviews/Review"
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from "swiper/modules"
import Link from "next/link"
import reviewData from "@/app/(mainsite)/data/reviewData"
import Proven from "../Proven/Proven";

export default function InlineReviews() {

    const reviewElems = reviewData.map((data, i)=>{
        return <SwiperSlide className={`${styles.reviewSlider}`} key={i}><Review className={styles.review} {...data}  /></SwiperSlide>
    })
   
  return (
    <section className={styles.inlineReviews}>

        <Proven />

        <h1>What People <span className="highlight">Say</span></h1>

        <div className={styles.reviewsWrapper}>
           
           <Swiper
            slidesPerView={"auto"}
            spaceBetween={40}
            centeredSlides
            initialSlide={2}
            // loopAdditionalSlides={1}
            loop
            autoplay={{delay: 5000}}
            modules={[Autoplay]}
           breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            640: {
              slidesPerView: "auto",
              spaceBetween: 40,
            }
           }}
           >
            {reviewElems}
           </Swiper>
        </div>
        <div className={`center ${styles.cta}`}>
            <a target="_blank" className="main-link" href="https://www.facebook.com/profile.php?id=100065116838698&sk=reviews">Leave Review</a>
            <Link className="main-link" href={"/contact"}>Contact</Link>
        </div>
        <img src="/img/reviews.webp" aria-hidden className="bg-img" />
        <div className="shader" style={{backgroundColor: "rgba(255,255,255,0.8)"}}></div>
    </section>
  )
}
