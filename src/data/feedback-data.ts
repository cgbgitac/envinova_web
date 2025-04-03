import { StaticImageData } from "next/image";
import user_1 from "@/assets/images/media/img_08.jpg";
import user_2 from "@/assets/images/media/img_09.jpg";
import user_3 from "@/assets/images/media/img_14.jpg";
import user_4 from "@/assets/images/media/img_15.jpg";

// testimonial type
type ITestimonial = {
  id: number;
  user?: StaticImageData;
  name: string;
  location: string;
  desc: string;
  rating: number;
};

export const feed_back_two: ITestimonial[] = [
  {
    id: 1,
    user: user_1,
    name: "Dr Om Prakash Chaurasia",
    location: "(Director, DIHAR-DRDO)",
    desc: `Solar Huts innovatively combines renewable energy with emergency healthcare like BP monitoring, enhancing public accessibility and deserving nationwide deployment.`,
    rating: 5,
  },
  {
    id: 2,
    user: user_2,
    name: "Sh. Bhupinder Bhalla",
    location: "(Secretary, MNRE)",
    desc: `Envinova's Smart Solar Hut is a valuable addition to the MNRE Plaza, providing clean energy
solutions for mobile charging. Keep innovating.`,
    rating: 4,
  },
  {
    id: 3,
    user: user_1,
    name: "By- Dr. Ajay Mathur",
    location: "(Director General, International Solar Alliance (ISA))",
    desc: `Envinova's smart solutions seamlessly integrates green energy into daily life that can significantly
help accelerate the global transition to clean energy.`,
    rating: 5,
  },
  {
    id: 4,
    user: user_2,
    name: "Sh. Vishal Singh, IAS",
    location: "(CEO, Ayodhya Development Authority)",
    desc: `Glad that before Pran Pratishta, ADA provided this modern convenience, reflecting our vision of
free, sustainable amenities for devotees in Ayodhya.`,
    rating: 4,
  },
  {
    id: 5,
    user: user_2,
    name: "Mr. Pawandeep Singh Anand",
    location: "(MD, ALP Nishikawa)",
    desc: `Daily use of electronic gadgets such as mobiles and laptops may run out of battery and could need
immediate solution of charging station. Solar huts are a way forward.`,
    rating: 4,
  },
  {
    id: 6,
    user: user_2,
    name: "CAMPA Team",
    location: "(Reliance)",
    desc: `Happy to see visitors benefiting from these charging stations day and night across the holy city of
Ayodhya. Looking forward to implementing such projects nationwide.`,
    rating: 4,
  },
  {
    id: 7,
    user: user_2,
    name: "Dr YP Verma",
    location: "(Registrar, Panjab University)",
    desc: `Proud to see our Alumni developing technology that brings modern amenities to the masses,
reflecting the entrepreneurial spirit of Panjab University.`,
    rating: 4,
  },
  {
    id: 8,
    user: user_2,
    name: "Smt. Aashika Jain, IAS",
    location: "(Deputy Commissioner, SAS Nagar)",
    desc: `It is a smart, sustainable, and community-centric hub that harnesses solar power to provide
essential services to the people visiting.`,
    rating: 4,
  },
  {
    id: 9,
    user: user_2,
    name: "Hans-Jörg Hörtnagl",
    location: "(Trade Commissioner, Advantage Austria)",
    desc: `It's a step forward to create smart cities and enhance public comfort.`,
    rating: 4,
  },
  {
    id: 10,
    user: user_2,
    name: "Sh. Amit Agrawal, IAS",
    location: "(Additional Principal Secretary to CM, Haryana)",
    desc: `A valuable innovation providing emergency services and enhancing public connectivity.`,
    rating: 4,
  },
  {
    id: 11,
    user: user_2,
    name: "Vivek Atray",
    location: "(ex IAS, Motivational Speaker)",
    desc: `Its sustainable, solar-powered design makes it a valuable solution for off-grid locations, ensuring
energy access, security, and connectivity.`,
    rating: 4,
  },
  {
    id: 12,
    user: user_2,
    name: "Dr. Radhika Trikha",
    location: "(CEO, Awadh, IIT Ropar)",
    desc: `Feeling pumped to see strides of our startup Envinova Smartech with their Solar Huts providing
solar-powered public amenities that includes charging stations, Wi-Fi hubs, and seating areas,
through their modular, versatile, and eco-friendly technology`,
    rating: 4,
  },

];

// feedback one start
export const feedback_one = [
  {
    id: 1,
    user: user_1,
    name: "Dr. Kiran Malhotra",
    location: "FootCare Clinic",
    desc: `"PiStarTech's FlePS Mat has revolutionized how I diagnose foot issues. The detailed pressure data leads to better, faster treatment decisions."`,
  },
  {
    id: 2,
    user: user_1,
    name: "Dr. Amit Verma",
    location: "Gait & Mobility Center",
    desc: `"The FlePS Mat is incredibly accurate and easy to use. It's become an essential tool in my practice for assessing foot function."`,
  },
  {
    id: 3,
    user: user_1,
    name: "Dr. Neha Kapoor",
    location: "Peak Performance Clinic",
    desc: `"With the FlePS Mat, I can quickly evaluate athletes' foot pressure patterns, helping to prevent injuries and optimize performance."`,
  },
];
// feedback one end

// feedback three
export const feedback_three: { id: number; desc: string }[] = [
  {
    id: 1,
    desc: "Quick solutions coupled with extraordinary performance—a recommendation thats unequivocal.",
  },
  {
    id: 2,
    desc: "We are absolutely thrilled with the services provided by Babun! Their team went above and beyond to transform.",
  },
  {
    id: 3,
    desc: "Babun Solutions has truly been a game changer for our business. Their expertise in developing our mobile app",
  },
];

// feedback four
export const feedback_four: ITestimonial[] = [
  {
    id: 1,
    desc: "Game-changer! Boosted efficiency, simplified tasks, and saved time. Highly recommended!",
    name: "John Smith",
    location: "Claifornia",
    user: user_1,
    rating: 5,
  },
  {
    id: 2,
    desc: "Game-changer! Boosted efficiency, simplified tasks, and saved time. Highly recommended!",
    name: "Zephyrlyn",
    location: "Valeria",
    user: user_3,
    rating: 4,
  },
  {
    id: 3,
    desc: "Game-changer! Boosted efficiency, simplified tasks, and saved time. Highly recommended!",
    name: "Quinvera",
    location: "Aqualuna",
    user: user_4,
    rating: 4.5,
  },
];

// feedback five
export const feedback_five: ITestimonial[] = [
  {
    id: 1,
    desc: `"Extraordinary performance!  Quick solutions. Highly recommended."`,
    name: "James Bond.",
    location: "CEO & Head of Sky Tech Inc.",
    rating: 5,
  },
  {
    id: 2,
    desc: `"Babun Solutions has truly been a game changer for our business."`,
    name: "John Smith",
    location: "CEO & Head of Sky Tech Inc.",
    rating: 4,
  },
  {
    id: 3,
    desc: `"Quick solutions coupled with extraordinary performance—a recommendation."`,
    name: "Mark John",
    location: "CEO & Head of Sky Tech Inc.",
    rating: 4.5,
  },
];

// feedback six
export const feedback_six: ITestimonial[] = [
  {
    id: 1,
    desc: "Having a home based business is  wonderful asset to your life. The problem still stands comes time your business. Quis lorem elite.",
    name: "James Bond.",
    location: "Moscow, Russia",
    rating: 5,
  },
  {
    id: 2,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga sed nobis eveniet nisi provident aut excepturi reiciendis tuo.",
    name: "John Smith",
    location: "Cairo, Egypt",
    rating: 4,
  },
  {
    id: 3,
    desc: "Efficient problem-solving, insightful market analysis, and actionable plans made the consulting experience business's success.",
    name: "Jesica Harris",
    location: "Tokyo, Japan",
    rating: 4.5,
  },
];
