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

const BlogItemTwo: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <article className="blog-meta-one mt-35 sm-mt-30 wow fadeInUp">
       <div className="post-data">
        <div className="post-info">
          {/* <span className="fw-500 text-dark">{news.author} -</span>    */}
          {news.date.split(" ")[0]} {news.date.split(" ")[1]}
        </div>
        <Link href={`/projects/${news.link}`} className="mt-15">
          <h4 className="tran3s blog-title">{news.title}</h4>
        </Link>
      </div>
      <figure
        className="post-img position-relative d-flex justify-content-end align-items-end m0"
        style={{ backgroundImage: `url(${news.imageUrl || news.image})`, height: "252px" }}
      >
        <Link href={`/projects/${news.link}}`}
          className="round-btn stretched-link rounded-circle d-flex align-items-center justify-content-center tran3s"
        >
          <i className="bi bi-arrow-up-right"></i>
        </Link>
      </figure>
    </article>
  );
};

export default BlogItemTwo;
