"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function WorkPage() {
  return (
    <>
    <main id="work" className={styles.container}>
      <h2 className={styles.heading}>Work</h2>
      <p className={styles.text}>
        これまでに作ってきたアプリやWebサイトを紹介しています。
サムネイルと一緒に、簡単な説明やGitHubへのリンクも載せているので、ぜひご覧ください！
      </p>
      <ul className={styles.workList}>
        <li className={styles.workItem}>
          <Image src="/images/project1.png" alt="project1" width={300} height={150} className={styles.img} />
            <div className={styles.work}>
              <h3 className={styles.workTitle}>Design4U</h3>
              <p>HTML,CSS を使って1年生の時作ったサイト</p>
              <Link href="https://github.com/Kanny-git/Design4U" target="_blank" className={styles.link}>GitHub リポジトリはこちら→</Link>
              <br />
               <Link href="https://design4-u.vercel.app" target="_blank">
                <div className={styles.demoLink}>View Demo</div>
              </Link>
            </div>
        </li>
        {/* 必要に応じてリストを追加 */}
      </ul>
      </main>
      <hr />
      </>
  );
}
