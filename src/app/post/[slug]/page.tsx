import Article from "@/components/article";
import Container from "@/components/container";
import Hero from "@/components/hero";
import { getPostBySlug } from "@/utils/actions/get-data";
import { MessageCircle } from "lucide-react";

type PostProps = {
  params: {
    slug: string;
  };
};

const Post = async ({ params }: PostProps) => {
  const { slug } = await params;
  const postProps = (await getPostBySlug(slug)).objects[0];

  return (
    <main>
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
    </main>
  );
};

export default Post;
