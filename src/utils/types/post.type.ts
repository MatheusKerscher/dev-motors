import type { CosmicImage } from "./cosmicImage.type";

export interface PostProps {
  objects: ObjectPost[];
}

interface ObjectPost {
  metadata: {
    hero: {
      banner: CosmicImage;
      title: string;
      button_background: string;
      button_text_color: string;
      button_label: string;
      button_url: string;
    };
    post: {
      banner: CosmicImage;
      title: string;
      description: string;
      show_button: boolean;
      button_label: string;
      button_url: string;
      button_background: string;
      button_text_color: string;
    };
  };
}
