import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Todos direitos reservados Dev Peças @{new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
