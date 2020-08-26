import styles from "./profile-picture.module.css";
import React from "react";
import Img from "react-optimized-image";
import ProfileImage from "./profile-picture.jpg";

export default function ProfilePicture({ home, name }) {
  const imageStyle = home ? styles.headerHomeImage : styles.headerImage;

  return (
    <Img
      src={ProfileImage}
      webp
      sizes={[150, 110]}
      densities={[1, 2, 4]}
      inline={false}
      className={`${imageStyle} ${styles.borderCircle}`}
      alt={name}
    />
  );
}
