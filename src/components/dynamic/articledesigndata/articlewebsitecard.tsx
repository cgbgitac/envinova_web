import React from "react";
import Link from "next/link";
import Image from "next/image";

type ArticleCardProps = {
  article: {
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

const extractTextWithLimit = (html: string, wordLimit = 30) => {
  if (!html) return "";
  const doc = new DOMParser().parseFromString(html, "text/html");
  const textContent = doc.body.textContent || "";
  return textContent.split(/\s+/).slice(0, wordLimit).join(" ") + "...";
};

const ArticleWebsiteCard: React.FC<ArticleCardProps> = ({ article }) => {
  const limitedText = extractTextWithLimit(article.post_info, 30);

  return (
    <article className="blog-meta-two style-two mb-50 lg-mb-40">
      <Image
        src={article.imageUrl || article.image}
        alt="icon"
        layout="responsive"
        width={500}
        height={500}
        className="lazy-img me-auto ms-auto"
      />
      <div className="post-data">
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          <Link href={`/article/${article.link}`} className="blog-title">
            <h4 style={{ fontSize: "23px" }} className="text-center">{article.title}</h4>
          </Link>
        </div>
        <p>{limitedText}</p>
        <Link
          href={`/article/${article.link}`}
          className="btn-three d-flex align-items-center justify-content-center tran3s"
        >
          Read More..
        </Link>
      </div>
    </article>
  );
};

export default ArticleWebsiteCard;
