import { IMenu } from "@/types/menu-d-t";

const menu_data: IMenu[] = [
  {
    id: 1,
    link: "/",
    title: "Home",
  },
  {
    id: 2,
    link: "/products",
    title: "Products",
    sub_dropdown: true,
    dropdown_submenus: [
      { link: "/products", title: "View All Products" },
      {link:'/products/smart-solar-spaces',title:'Smart Solar Spaces'},
      {link:'/products/solar-ev-charging-stations',title:'Solar EV Charging Stations'},
      {link:'/products/solar-prefab-cabins',title:'Solar Prefab Cabins'},
      {link: "/products/solar-conversion-solutions", title: "Solar Conversion Solutions " },
      {link: "/products/solar-rooftop", title: "Solar Rooftop" },
      {link: "/products/plug-play-kits", title: "Plug & Play Kits" },
    ],
  },
  {
    id: 3,
    link: "/projects",
    title: "Projects",
  },
  {
    id: 2,
    link: "/about-us",
    title: "About Us",
  },                                                                                                                                                   
  {
    id: 5,
    link: "/article",
    title: "Media",
  },
  {
    id: 6,
    link: "/contact",
    title: "Contact Us",
  },
];

export default menu_data;
