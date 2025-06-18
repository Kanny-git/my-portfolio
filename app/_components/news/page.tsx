"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";

export default function NewsPage() {
  const [data, setData] = useState<{ contents: any[] } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getNewsList();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <main id="news" className={styles.container}>
      <h2 className={styles.heading}>News</h2>
      <ul>
        {data?.contents?.map((news) => (
          <li key={news.id} className={styles.list}>
            <div className={styles.link}>
              <Image src={news.image.url} alt="" width={300} height={150} className={styles.image} />
              <dl className={styles.content}>
                <dt className={styles.newsItemTitle}>
                  <h3>{news.title}</h3>
                </dt>
                <dd className={styles.newsItem}>{news.content}</dd>
              </dl>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
