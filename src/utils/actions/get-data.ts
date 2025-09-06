import type { HomeProps } from "../types/home.type";

const getDataHome = async (): Promise<HomeProps> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/68bc3d16285c02bfe718ddf5?pretty=true&props=metadata&read_key=${process.env.COSMIC_READ_KEY}`
    );

    if (!res.ok) {
      throw new Error("Fail to fetch home page data");
    }

    return res.json();
  } catch (error) {
    throw new Error("Fail to fetch home page data");
  }
};

export { getDataHome };
