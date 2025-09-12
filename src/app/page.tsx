import { MessageCircle } from "lucide-react";

import Article from "@/components/article";
import Container from "@/components/container";
import Hero from "@/components/hero";
import Service from "@/components/home/service";
import { getDataHome, getSubmenuItems } from "@/utils/actions/get-data";
import Submenu from "@/components/home/submenu";

import styles from "./home.module.scss";
import Contact from "@/components/home/contact";

export default async function Home() {
  const { object: homeProps } = await getDataHome();
  const { objects: submenuProps } = await getSubmenuItems();

  return (
    <main>
      {submenuProps.length > 0 && <Submenu submenuItems={submenuProps} />}

      <Hero
        title={homeProps.metadata.hero.slogan}
        bannerUrl={homeProps.metadata.hero.banner.url}
        buttonLabel={homeProps.metadata.hero.cta_label}
        buttonUrl={homeProps.metadata.hero.cta_url}
        buttonBackground={homeProps.metadata.hero.cta_background}
        buttonColor={homeProps.metadata.hero.cta_text_color}
        icon={
          <MessageCircle
            color={homeProps.metadata.hero.cta_text_color}
            size={20}
          />
        }
      />

      <Container>
        <>
          <Article
            title="SOBRE"
            description={homeProps.metadata.about.description}
            imgUrl={homeProps.metadata.about.banner.url}
          />

          {homeProps.metadata.services.length && (
            <section id="services">
              <h2 className={styles.servicesTitle}>CONHEÇA NOSSOS SERVIÇOS</h2>

              <div className={styles.cardServiceContainer}>
                {homeProps.metadata.services.map((s, i) => (
                  <Service key={i} title={s.title} imgUrl={s.banner.url} />
                ))}
              </div>
            </section>
          )}

          <Contact
            phone={homeProps.metadata.contact.phone}
            email={homeProps.metadata.contact.email}
            address={homeProps.metadata.contact.address}
            time={homeProps.metadata.contact.time}
            buttonLabel={homeProps.metadata.hero.cta_label}
            buttonUrl={homeProps.metadata.hero.cta_url}
            buttonBackground={homeProps.metadata.hero.cta_background}
            buttonColor={homeProps.metadata.hero.cta_text_color}
            icon={
              <MessageCircle
                color={homeProps.metadata.hero.cta_text_color}
                size={20}
              />
            }
          />
        </>
      </Container>
    </main>
  );
}
