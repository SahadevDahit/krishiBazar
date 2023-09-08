"use client";
import React from "react";
import styles from "./home.module.css";
import Image from "next/image";
import { Courgette } from "next/font/google";
const courgette = Courgette({
  weight: "400",
  subsets: ["latin"],
  display: 'swap',
});

export default function Page() {
  return (
    <>
      <div>
        <div className={styles.wrapper}>
          <Image
            src="/homeImage.svg"
            objectFit="cover"
            loading="lazy"
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Home Page Image"
          />
          <p className={`${styles.homeText} ${courgette.className} mx-auto`}>
            We pick, so you don't have to. <br /> Enjoy hassle-free shopping for
            your greens!
          </p>
        </div>
      </div>
    </>
  );
}
