import Link from "next/link";

import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <h2>Dev Motors</h2>
        </Link>

        <ul className={styles.listLinks}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#services">Serviços</Link>
          </li>
          <li>
            <Link href="#contact">Contatos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
