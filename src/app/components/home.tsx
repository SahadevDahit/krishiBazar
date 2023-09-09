"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion"; // Import Framer Motion
import styles from "./home.module.css";
import Image from "next/image";
import { Courgette } from "next/font/google";

const courgette = Courgette({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Page() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [text, setText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  const imageControls = useAnimation();

  const handleImageLoad = () => {
    setImageLoaded(true);
    imageControls.start({ opacity: 1 });

    const fullText = "We pick, so you don't have to!";

    const timer = setInterval(() => {
      if (textIndex < fullText.length) {
        setText(fullText.slice(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      } else {
        clearInterval(timer);
      }
    }, 50); // Adjust the delay to control the typewriter speed
  };

  return (
    <>
      <div>
        <div className={styles.wrapper}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className={styles.imageContainer}
          >
            <Image
              src="/homeImage.svg"
              objectFit="cover"
              loading="lazy"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="Home Page Image"
              onLoad={handleImageLoad}
            />
          </motion.div>
          {imageLoaded && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className={`${styles.homeText} ${courgette.className} px-2`}
            >
              <p>
                We pick, so you don't have to. <br /> Enjoy hassle-free shopping
                for your greens!
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}
