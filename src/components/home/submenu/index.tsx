"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";

import styles from "./submenu.module.scss";
import { useEffect, useState } from "react";
import type { SubmenuItem } from "@/utils/types/submenu.type";

type SubmenuProps = {
  submenuItems: SubmenuItem[];
};

const Submenu = ({ submenuItems }: SubmenuProps) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 680) {
        setSubmenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <section className={styles.submenuContainer}>
      <div>
        <button onClick={toggleMenu} className={styles.buttonMenu}>
          <Menu />
          Menu
        </button>
      </div>

      <nav className={`${styles.submenu} ${submenuOpen ? styles.open : ""}`}>
        {submenuOpen && (
          <button onClick={toggleMenu} className={styles.buttonCloseMenu}>
            <X />
          </button>
        )}
        <ul className={styles.listLinks}>
          {submenuItems.map((s) => (
            <li key={s.slug}>
              <Link href={`/post/${s.slug}`}>{s.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Submenu;
