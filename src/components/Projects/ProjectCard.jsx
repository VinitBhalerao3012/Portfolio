import React from 'react';
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

// ✅ Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const ProjectCard = ({
  project: { title, description, imageSrc, skills, demo, source }
}) => {
  return (
    <div className={styles.container}>

      {/* ✅ Swiper image carousel with autoplay and loop */}
      {Array.isArray(imageSrc) ? (
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          className={styles.carousel}
          
        >
          {imageSrc.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={getImageUrl(img)}
                alt={`${title} Slide ${index + 1}`}
                className={styles.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
      )}

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>

      <div className={styles.links}>
        <a
          href={demo}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
        <a
          href={source}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </div>
    </div>
  );
};