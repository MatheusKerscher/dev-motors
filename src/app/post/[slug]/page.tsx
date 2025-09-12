import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";

import { getPostBySlug } from "@/utils/actions/get-data";
import Article from "@/components/article";
import Hero from "@/components/hero";
import Container from "@/components/container";

type PostProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    const postProps = (await getPostBySlug(slug)).objects[0];

    if (postProps === null) {
      return {
        title: "Dev Motors",
        description: "Site do Dev Motors, a melhor oficina do país",
      };
    }

    return {
      title: `Dev Motors | ${postProps.metadata.hero.title}`,
      description: `${postProps.metadata.post.description.slice(0, 100)}...`,
      keywords: [
        "Dev Motors",
        `Dev Motors ${postProps.metadata.hero.title}`,
        postProps.metadata.hero.title,
      ],
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        },
      },
      openGraph: {
        title: `Dev Motors | ${postProps.metadata.hero.title}`,
        images: [postProps.metadata.hero.banner.url],
      },
    };
  } catch (error) {
    return {
      title: "Dev Motors",
      description: "Site do Dev Motors, a melhor oficina do país",
    };
  }
}

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
