import type { ReactNode } from "react";

import styles from "./item.module.scss";

type ItemProps = {
  icon: ReactNode;
  label: string;
  contactValue: string;
};

const Item = ({ icon, label, contactValue }: ItemProps) => {
  return (
    <div className={styles.itemContainer}>
      {icon}

      <div>
        <span>{label}</span>
        <p>{contactValue}</p>
      </div>
    </div>
  );
};

export default Item;
