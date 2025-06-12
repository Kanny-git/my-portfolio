import Image from "next/image";
import styles from "./page.module.css";

export default function ProfilePage() {
  return (
    <main id="profile" className={styles.container}>
      <h2 className={styles.heading}>Profile</h2>
      <section className={styles.profileSection}>
        <Image
          src="/images/profile.png"
          alt="My Profile"
          width={200}
          height={200}
          className={styles.profileImage}
        />
        <div className={styles.profileText}>
          <p><strong>名前：</strong>AUNG WIN PHYO</p>
          <p><strong>年齢：</strong>24歳</p>
          <p><strong>所在地：</strong>沖縄県那覇市</p>
          <p><strong>出身：</strong>ミャンマー</p>
          <p>
            専門学校沖縄ビジネス外語学院 Web プログラミングコースを専攻し、現在はエンジニアを目指して勉強中。
          </p>
        </div>
      </section>
    </main>
  );
}
