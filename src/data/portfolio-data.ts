// portfolio one
import port_1 from "@/assets/images/gallery/img_05.jpg";
import port_2 from "@/assets/images/gallery/portfolio_2.jpg";
import port_3 from "@/assets/images/gallery/portfolio_3.jpg";
import port_4 from "@/assets/images/gallery/portfolio_5.jpg";
import port_5 from "@/assets/images/gallery/img_20.jpg";
import port_6 from "@/assets/images/gallery/img_21.jpg";
import port_7 from "@/assets/images/gallery/img_22.jpg";
import port_8 from "@/assets/images/gallery/img_08.jpg";
import port_9 from "@/assets/images/gallery/portfolio_4.jpg";
import port_10 from "@/assets/images/gallery/img_11.jpg";
import port_11 from "@/assets/images/gallery/img_12.jpg";
import port_12 from "@/assets/images/gallery/img_13.jpg";
import port_13 from "@/assets/images/gallery/img_14.jpg";
import port_14 from "@/assets/images/gallery/img_15.jpg";
import port_15 from "@/assets/images/gallery/img_16.jpg";
import { IPortfolio } from "@/types/portfolio-d-t";

// offices images
import img_1 from "@/assets/images/gallery/gifting-momita.jpeg";
import img_2 from "@/assets/images/gallery/bengaluru-womens-group.jpeg";

const portfolio_data: IPortfolio[] = [
  {
    id: 1,
    img: img_1,
    tags: ["PRINT", "DESIGN"],
    para: "Designed for café owners, societies, sports complexes, IT parks, and malls, these solutions attract and engage customers or residents. They offer comfortable spaces to sit, chat, work, or have coffee. Café owners can provide a 360-degree marketing experience to their patrons, with services like Wi-Fi and personalized offers based on customer preferences.",
    title: "Businesses",
    portfolio: "portfolio-one",
  },
  {
    id: 2,
    img: img_2,
    tags: ["Mobile", "UI/UX"],
    para: "",
    title: "Investment Planning",
    portfolio: "portfolio-one",
  },
  {
    id: 3,
    img: port_3,
    tags: ["Branding", "UI/UX"],
    para: "",
    title: "Case Studies & Branding",
    portfolio: "portfolio-one1",
  },
  {
    id: 4,
    img: port_4,
    tags: ["BANNER", "WEB DESIGN"],
    para: "",
    title: "Online Banking",
    portfolio: "portfolio-one1",
  },
  // portfolio two
  {
    id: 5,
    img: port_5,
    tags: ["BANNER", "WEB DESIGN"],
    sub_title: "User Interface",
    para: "",
    title: "Landing for Creative Agency",
    portfolio: "portfolio-two",
  },
  {
    id: 6,
    img: port_6,
    tags: ["BANNER", "WEB DESIGN"],
    sub_title: "LANDING PAGE",
    para: "",
    title: "Babun- Landing Page Template",
    portfolio: "portfolio-two",
  },
  {
    id: 7,
    img: port_7,
    tags: ["BANNER", "WEB DESIGN"],
    sub_title: "User Interface",
    para: "",
    title: "Agency Minima Design",
    portfolio: "portfolio-two",
  },
  {
    id: 8,
    img: port_6,
    tags: ["BANNER", "WEB DESIGN"],
    sub_title: "User Interface",
    para: "",
    title: "Landing for Creative Agency",
    portfolio: "portfolio-two",
  },
  {
    id: 8,
    img: port_6,
    tags: ["BANNER", "WEB DESIGN"],
    sub_title: "User Interface",
    para: "",
    title: "Landing for Creative Agency",
    portfolio: "portfolio-two",
  },
  {
    id: 8,
    img: port_6,
    tags: ["BANNER", "WEB DESIGN"],
    sub_title: "User Interface",
    para: "",
    title: "Landing for Creative Agency",
    portfolio: "portfolio-two",
  },
  // project v2 page
  {
    id: 9,
    img: port_1,
    tags: ["PRINT", "DESIGN"],
    sub_title: "User Interface",
    para: "Designed for café owners, societies, sports complexes, IT parks, and malls, these solutions attract and engage customers or residents. They offer comfortable spaces to sit, chat, work, or have coffee. Café owners can provide a 360-degree marketing experience to their patrons, with services like Wi-Fi and personalized offers based on customer preferences.",
    title: "Businesses",
    portfolio: "portfolio-v2-page",
  },
  {
    id: 10,
    img: port_2,
    tags: ["Mobile", "UI/UX"],
    sub_title: "User Interface",
    para: "We collaborate with smart cities, defense organizations, tourism departments, bus stands, and railways to help achieve developmental goals. Our solutions contribute to building smarter cities and enhancing the quality of life for citizens.",
    title: "Government",
    portfolio: "portfolio-v2-page",
  },
  {
    id: 11,
    img: port_3,
    tags: ["Branding", "UI/UX"],
    sub_title: "User Interface",
    para: "Our products are ideal for social and educational gatherings in village settings. They serve as hubs for educational programs, emergency services, and community activities, making them perfect spots for village panchayats.",
    title: "Rural Communities",
    portfolio: "portfolio-v2-page",
  },
  {
    id: 12,
    img: port_9,
    tags: ["BANNER", "WEB DESIGN"],
    sub_title: "User Interface",
    para: "We provide thoughtful solutions for pilgrimage sites, offering devotees a place to sit, relax, and learn more about the cultural and historical essence of the city and religious landmarks. ",
    title: "Pilgrimage Trusts",
    portfolio: "portfolio-v2-page",
  },
  {
    id: 13,
    img: port_4,
    tags: ["Mobile", "UI/UX"],
    sub_title: "User Interface",
    para: "For organizations looking to contribute to social causes, we offer partnerships to install these solar-powered amenities at public gathering spots. This helps improve community welfare while promoting sustainability through solar energy solutions.",
    title: "CSR (Corporate Social Responsibility)",
    portfolio: "portfolio-v2-page",
  },
  {
    id: 14,
    img: port_8,
    tags: ["PRINT", "DESIGN"],
    sub_title: "User Interface",
    para: "",
    title: "Business Consulting",
    portfolio: "portfolio-v-page",
  },
  // project v3 page
  {
    id: 15,
    img: port_10,
    tags: ["PRINT", "DESIGN"],
    sub_title: "User Interface",
    para: "Designed for café owners, societies, sports complexes, IT parks, and malls, these solutions attract and engage customers or residents. They offer comfortable spaces to sit, chat, work, or have coffee. Café owners can provide a 360-degree marketing experience to their patrons, with services like Wi-Fi and personalized offers based on customer preferences.",
    title: "Businesses",
    portfolio: "portfolio-v3-page",
  },
  {
    id: 16,
    img: port_11,
    tags: ["Mobile", "UI/UX"],
    sub_title: "User Interface",
    para: "",
    title: "Investment Planning",
    portfolio: "portfolio-v3-page",
  },
  {
    id: 17,
    img: port_12,
    tags: ["Branding", "UI/UX"],
    sub_title: "User Interface",
    para: "",
    title: "Case Studies & Branding",
    portfolio: "portfolio-v3-page",
  },
  {
    id: 18,
    img: port_13,
    tags: ["BANNER", "WEB DESIGN"],
    sub_title: "User Interface",
    para: "",
    title: "Online Banking",
    portfolio: "portfolio-v3-page",
  },
  {
    id: 19,
    img: port_14,
    tags: ["Mobile", "UI/UX"],
    sub_title: "User Interface",
    para: "",
    title: "Market Analysis",
    portfolio: "portfolio-v3-page",
  },
  {
    id: 20,
    img: port_15,
    tags: ["PRINT", "DESIGN"],
    sub_title: "User Interface",
    para: "",
    title: "Business Consulting",
    portfolio: "portfolio-v3-page",
  },
];

export default portfolio_data;
