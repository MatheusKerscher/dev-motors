import { MessageCircle } from "lucide-react";

import Article from "@/components/article";
import Container from "@/components/container";
import Hero from "@/components/hero";
import Service from "@/components/home/service";
import { getDataHome } from "@/utils/actions/get-data";
import Submenu from "@/components/home/submenu";

import styles from "./home.module.scss";

export default async function Home() {
  const { object } = await getDataHome();

  return (
    <main>
      <Submenu />

      <Hero
        title={object.metadata.hero.slogan}
        bannerUrl={object.metadata.hero.banner.url}
        buttonLabel={object.metadata.hero.cta_label}
        buttonUrl={object.metadata.hero.cta_url}
        buttonBackground={object.metadata.hero.cta_background}
        buttonColor={object.metadata.hero.cta_text_color}
        icon={
          <MessageCircle
            color={object.metadata.hero.cta_text_color}
            size={20}
          />
        }
      />

      <Container>
        <>
          <Article
            title="SOBRE"
            description={object.metadata.about.description}
            imgUrl={object.metadata.about.banner.url}
          />

          {object.metadata.services.length && (
            <section>
              <h2 className={styles.servicesTitle}>CONHEÇA NOSSOS SERVIÇOS</h2>

              <div className={styles.cardServiceContainer}>
                {object.metadata.services.map((s, i) => (
                  <Service key={i} title={s.title} imgUrl={s.banner.url} />
                ))}
              </div>
            </section>
          )}
        </>
      </Container>
    </main>
  );
}
