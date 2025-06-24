import styles from "./page.module.css";

export default function StrengthsPage() {
  return (
    <main id="strengths" className={styles.container}>
      <h2 className={styles.heading}>Strengths</h2>
      <p></p>
      <section className={styles.strengthSection}>
        <h3 className={styles.subHeading}>課題解決力</h3>
        <p className={styles.strengthText}>
          私の強みは、課題に対して冷静に分析し、解決策を見つける力です。大学時代に開発プロジェクトのリーダーを務めた際、進行が遅れていた部分を特定し、タスクを細分化してチームで共有することでスムーズに挽回することができました。この経験から、状況を客観的に見て判断し、行動に移す力を身につけました。
        </p>
      </section>
      <section className={styles.strengthSection}>
        <h3 className={styles.subHeading}>継続力</h3>
        <p className={styles.strengthText}>
          目標に向かって地道に努力を続けられる継続力です。プログラミングを独学で学び始めた当初は、エラーばかりで思うように進みませんでしたが、毎日学習を続けた結果、半年後にはポートフォリオサイトを一人で作成できるようになりました。この経験から、継続する力が成果につながることを実感しました。
        </p>
      </section>
    </main>
  );
}
