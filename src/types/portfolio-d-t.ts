import { StaticImageData } from "next/image";

export interface IPortfolio {
  id: number;
  img: StaticImageData;
  tags: string[];
  title: string;
  para: string;
  portfolio: string;
  sub_title?: string;
}