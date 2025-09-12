import Image from "next/image";

import styles from "./service.module.scss";

type ServiceProps = {
  title: string;
  imgUrl: string;
};

const Service = ({ title, imgUrl }: ServiceProps) => {
  return (
    <article className={styles.serviceContainer}>
      <Image
        src={imgUrl}
        alt={`Imagem do serviço ${title}`}
        width={240}
        height={160}
        quality={100}
        priority
      />

      <h3>{title}</h3>
    </article>
  );
};

export default Service;
