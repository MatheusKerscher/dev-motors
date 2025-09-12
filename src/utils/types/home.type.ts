import type { CosmicImage } from "./cosmicImage.type";

export interface HomeProps {
  object: {
    metadata: {
      hero: {
        banner: CosmicImage;
        slogan: string;
        cta_label: string;
        cta_url: string;
        cta_text_color: string;
        cta_background: string;
      };
      about: {
        description: string;
        banner: CosmicImage;
      };
      services: Service[];
      contact: {
        address: string;
        email: string;
        phone: string;
        time: string;
      };
    };
  };
}

interface Service {
  title: string;
  banner: CosmicImage;
}
