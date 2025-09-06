import Image from "next/image";

import styles from "./hero.module.scss";
import type { ReactNode } from "react";

type HeroProps = {
  title: string;
  bannerUrl: string;
  buttonLabel: string;
  buttonUrl: string;
  buttonBackground: string;
  buttonColor: string;
  icon: ReactNode;
};

const Hero = ({
  title,
  bannerUrl,
  buttonLabel,
  buttonUrl,
  buttonBackground,
  buttonColor,
  icon,
}: HeroProps) => {
  return (
    <section className={styles.main}>
      <div className={styles.heroContainer}>
        <h1>{title}</h1>

        <a
          href={buttonUrl}
          target="_blank"
          style={{ backgroundColor: buttonBackground, color: buttonColor }}
        >
          {icon}
          {buttonLabel}
        </a>
      </div>

      <div className={styles.heroBanner}>
        <Image
          alt={title}
          src={bannerUrl}
          quality={100}
          priority
          fill
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default Hero;
