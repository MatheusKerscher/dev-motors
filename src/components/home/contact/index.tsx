import type { ReactNode } from "react";

import styles from "./contact.module.scss";
import Item from "./item";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

type ContactProps = {
  email: string;
  phone: string;
  address: string;
  time: string;
  buttonLabel: string;
  buttonUrl: string;
  buttonBackground: string;
  buttonColor: string;
  icon: ReactNode;
};

const iconProps = {
  size: 28,
};

const Contact = ({
  email,
  phone,
  address,
  time,
  buttonLabel,
  buttonUrl,
  buttonBackground,
  buttonColor,
  icon,
}: ContactProps) => {
  return (
    <section id="contact" className={styles.contactContainer}>
      <div className={styles.contactLinks}>
        <h2>CONTATOS</h2>

        <div className={styles.contactLinksContainer}>
          <Item
            icon={<Mail {...iconProps} />}
            label="E-mail"
            contactValue={email}
          />

          <Item
            icon={<Phone {...iconProps} />}
            label="Telefone"
            contactValue={phone}
          />

          <Item
            icon={<Clock {...iconProps} />}
            label="Horário de funcionamento"
            contactValue={time}
          />

          <Item
            icon={<MapPin {...iconProps} />}
            label="Endereço"
            contactValue={address}
          />
        </div>
      </div>

      <a
        href={buttonUrl}
        target="_blank"
        style={{ backgroundColor: buttonBackground, color: buttonColor }}
        className={styles.buttonContact}
      >
        {icon}
        {buttonLabel}
      </a>
    </section>
  );
};

export default Contact;
