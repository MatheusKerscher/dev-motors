import styles from "./loadingPost.module.scss";

const LoadingPost = () => {
  return (
    <section className={styles.loadingContainer}>
      <h2>Carregando post...</h2>
    </section>
  );
};

export default LoadingPost;
