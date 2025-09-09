import type { HomeProps } from "../types/home.type";
import type { SubmenuProps } from "../types/submenu.type";

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

const getSubmenuItems = async (): Promise<SubmenuProps> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B"type"%3A"pages"%7D&limit=10&skip=0&depth=1&props=slug%2Ctitle&sort=-order&read_key=${process.env.COSMIC_READ_KEY}`
    );

    if (!res.ok) {
      throw new Error("Fail to fetch submenu items");
    }

    return res.json();
  } catch (error) {
    throw new Error("Fail to fetch submenu items");
  }
};

export { getDataHome, getSubmenuItems };
