import styles from "./page.module.css";

export default function StrengthsPage() {
  return (
    <main id="strengths" className={styles.container}>
      <h2 className={styles.heading}>Strengths</h2>
      <p></p>
      <section className={styles.strengthSection}>
        <h3 className={styles.subHeading}>課題解決力</h3>
        <p className={styles.strengthText}>
          状況を的確に捉え、最適な対応策を考える力があります。プログラミング学習中、原因不明のバグに直面した際に、情報を徹底的に調べて自力で解決しました。その後、同じ問題に悩むクラスメイトにも共有し、全体の理解向上につながりました。
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
