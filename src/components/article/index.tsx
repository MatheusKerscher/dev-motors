import Image from "next/image";

import styles from "./article.module.scss";

type ArticleProps = {
  title: string;
  description: string;
  imgUrl: string;
  showButton?: boolean;
  buttonLabel?: string;
  buttonUrl?: string;
};

const Article = ({
  title,
  description,
  imgUrl,
  showButton = false,
  buttonLabel,
  buttonUrl,
}: ArticleProps) => {
  return (
    <section className={styles.articleContainer}>
      <article>
        <h2 className={styles.articleTitle}>{title}</h2>
        <p className={styles.articleDescription}>{description}</p>

        {showButton && (
          <div>
            <a
              target="_blank"
              href={buttonUrl}
              className={styles.buttonArticle}
            >
              {buttonLabel}
            </a>
          </div>
        )}
      </article>

      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={imgUrl}
          alt="Imagem da empresa"
          quality={100}
          priority
          fill
        />
      </div>
    </section>
  );
};

export default Article;
