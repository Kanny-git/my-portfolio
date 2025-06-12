import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <main id="about" className={styles.container}>
      <h2 className={styles.heading}>About</h2>
      <p className={styles.text}>
        このサイトは、教科書の内容を振り返りながら、Next.js や CSS モジュールの基本を実践するために制作したサンプルプロジェクトです。
基礎を確認しつつ、自分のスタイルを取り入れたポートフォリオとして仕上げました。
      </p>
    </main>
  );
}
