import { Suspense } from "react";
import type { Metadata } from "next";

import { getPostBySlug } from "@/utils/actions/get-data";
import Content from "./components/content";
import LoadingPost from "./components/loadingPost";

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

  return (
    <main>
      <Suspense fallback={<LoadingPost />}>
        <Content slug={slug} />
      </Suspense>
    </main>
  );
};

export default Post;
