export interface NavItem {
  name: string;
  newColor: string;
}

export interface BannerItem {
  text: string;
  link: string;
}

export interface Data {
  navItems: NavItem[];
  menuItems: string[];
  titles: string[];
  bannerData: BannerItem[];
}


const navItems: NavItem[] = [
  { name: "Nav color 1", newColor: "#f28b82" },
  { name: "Nav color 2", newColor: "#fbbc04" },
  { name: "Nav color 3", newColor: "#34a853" },
];

const menuItems: string[] = ["Menu button 1", "Menu button 2", "Menu button 3"];

const titles: string[] = [
  "Random Generated Content 1",
  "Random Generated Content 2",
  "Random Generated Content 3",
];

const bannerData: BannerItem[] = [
  { text: "Banner 1", link: "#!" },
  { text: "Banner 2", link: "#!" },
  { text: "Banner 3", link: "#!" },
  { text: "Banner 4", link: "#!" },
  { text: "Banner 5", link: "#!" },
];

export const db: Data = { navItems, menuItems, titles, bannerData };

