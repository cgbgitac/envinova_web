import React from "react";
import Link from "next/link";

type NewsCardProps = {
  news: {
    id?: string;
    image: string;
    imageUrl?: string;
    date: string;
    title: string;
    author: string;
    category: string;
    link: string;
    post_info: string;
  };
};

const NewsWebsiteCard: React.FC<NewsCardProps> = ({ news }) => {
  // console.log(news.date)
//   const today = new Date();
// const formattedDate = `${today.getDate()}' ${today.toLocaleString('default', { month: 'short' })}`;
// console.log(news.date)
const s_date = new Date(news.date);
const month = s_date.toLocaleString('en-us', { month: 'short' });
const year = s_date.getFullYear();
const formattedDate = `${month} ' ${year}`;

  return (
    <article className="blog-meta-two mb-80 lg-mb-50 wow fadeInUp"
    data-wow-delay="0.1s"
    >
      <figure
        className="post-img rounded-5 position-relative d-flex align-items-end m0"
        style={{ backgroundImage: `url(${news.imageUrl || news.image})`}}
      >
        <Link href={`/projects/${news.link}`} className="stretched-link rounded-5 date tran3s">
          {/* {news.date.split(" ")[0]} {news.date.split(" ")[1]} */}
         <span style={{textTransform:'capitalize'}}>{formattedDate}</span> 
        </Link>
      </figure>
      <div className="post-data">
        {/* <div className="post-info">{news.category}</div> */}
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          <Link href={`/projects/${news.link}`} className="blog-title text-center pb-20">
            <h4 style={{ fontSize: "23px" }}>{news.title}</h4>
          </Link>
          <Link href={`/projects/${news.link}`}
            className="btn-one tran3s"
          >
           Read More
          </Link>
          {/* <Link href={`/projects/${news.link}`}
            className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"
          >
            <i className="bi bi-arrow-up-right"></i>
          </Link> */}
        </div>
        {/* <div className="post-info">{news.category}</div> */}
      </div>
    </article>
  );
};

export default NewsWebsiteCard;
