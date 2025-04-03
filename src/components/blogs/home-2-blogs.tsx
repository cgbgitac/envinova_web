"use client";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/database/firebase";
// import ArticleWebsiteCard from "./articlewebsitecard";
import ArticleWebsiteCard from "../dynamic/articledesigndata/articlewebsitecard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";
import BlogItemTwo from "./blog-item/blog-item-two";

type News = {
  id?: string;
  image: string;
  imageUrl?: string;
  date: string;
  title: string;
  author: string;
  post_info: string;
  category: string;
  metaKeywords: string;
  metaDescription: string;
  link: string;
};

const NewsList = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsSnapshot = await getDocs(collection(db, "news"));
        const newsData = newsSnapshot.docs.map(
          (doc) => ({ id: doc.id, ...doc.data() } as News)
        );
        setNews(newsData);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const parseDate = (dateString: string): Date => {
    return new Date(dateString);
  };

  const sortedNews = news.sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  // Limit to 3 articles
  const limitedArticles = sortedNews.slice(0, 3);

  return (
    <div className="blog-section-one service-details position-relative lg-mt-80 pt-120 lg-pt-80">
      <div className="container">
        <div className="position-relative">
          <div className="title-one details-meta mb-20 lg-mb-10">
            <h3>Latest Projects.</h3>
          </div>
          <p className="text-lg mb-40 lg-mb-10">
            Explore how we&apos;re transforming spaces with smart, sustainable
            innovations!
          </p>
          <div className="row gx-xxl-5">
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="col-md-4 mb-5">
                    <Skeleton height={250} />
                    <Skeleton count={3} />
                  </div>
                ))
              : limitedArticles.map((newsItem) => (
                  <div key={newsItem.id} className="col-md-4">
                    <BlogItemTwo news={newsItem} />
                    {/* <ArticleWebsiteCard article={article} /> */}
                  </div>
                ))}
          </div>
          <div className="section-btn sm-mt-40">
            <Link href="/projects" className="btn-five icon-link">
              <span className="text">See all Projects</span>
              <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-right"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsList;
