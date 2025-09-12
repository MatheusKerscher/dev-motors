"use client";

import Link from "next/link";

import styles from "./error.module.scss";

const Error = () => {
  return (
    <main className={styles.errorContainer}>
      <h1>Ops! Essa pagina não existe</h1>

      <Link href="/">Voltar para página inicial</Link>
    </main>
  );
};

export default Error;
