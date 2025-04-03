import { IMenu } from "@/types/menu-d-t";

const admin_menu_data: IMenu[] = [
  {
    id: 1,
    link: "/",
    title: "Home",
  },
  {
    id: 2,
    link: "/dashboard",
    title: "Dashboard",
  },
  {
    id: 4,
    link: "#",
    title: "Products",
    sub_dropdown: true,
    dropdown_submenus: [
      { link: "/dashboard/products", title: "Add New Products" },
      { link: "/products", title: "Your Proudcts" },
    ],
  },
  {
    id: 5,
    link: "#",
    title: "Projects",
    sub_dropdown: true,
    dropdown_submenus: [
      { link: "/dashboard/projects", title: "Add New Projects" },
      { link: "/projects", title: "Your projects" },
    ],
  },
  {
    id: 6,
    link: "#",
    title: "Article",
    sub_dropdown: true,
    dropdown_submenus: [
      { link: "/dashboard/article", title: "Create New Article" },
      { link: "/article", title: "Your Article" },
    ],
  },
  {
    id: 7,
    link: "/dashboard/image-gallery",
    title: "Assest Gallery",
  },
  
];

export default admin_menu_data;
