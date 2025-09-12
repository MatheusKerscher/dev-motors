import { MessageCircle } from "lucide-react";

import Article from "@/components/article";
import Hero from "@/components/hero";
import { getPostBySlug } from "@/utils/actions/get-data";
import Container from "@/components/container";

type ContentProps = {
  slug: string;
};

const Content = async ({ slug }: ContentProps) => {
  const postProps = (await getPostBySlug(slug)).objects[0];

  return (
    <>
      <Hero
        title={postProps.metadata.hero.title}
        bannerUrl={postProps.metadata.hero.banner.url}
        buttonLabel={postProps.metadata.hero.button_label}
        buttonUrl={postProps.metadata.hero.button_url}
        buttonBackground={postProps.metadata.hero.button_background}
        buttonColor={postProps.metadata.hero.button_text_color}
        icon={
          <MessageCircle
            color={postProps.metadata.hero.button_text_color}
            size={20}
          />
        }
      />

      <Container>
        <Article
          title={postProps.metadata.post.title}
          description={postProps.metadata.post.description}
          imgUrl={postProps.metadata.post.banner.url}
          showButton={postProps.metadata.post.show_button}
          buttonLabel={postProps.metadata.post.button_label}
          buttonUrl={postProps.metadata.post.button_url}
        />
      </Container>
    </>
  );
};

export default Content;
