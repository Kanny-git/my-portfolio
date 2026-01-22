import Image from "next/image"
import styles from "./page.module.css"

export default function HobbyPage() {
  return (
      <>
        <section id="hobby" className={styles.hobbySection}>
        <h2 className={styles.heading}>Hobby</h2>
        <p>趣味は写真撮影、オンラインゲーム、バスケットボールです。
写真では観察力を、ゲームやバスケットボールでは仲間と協力する楽しさを感じています。</p>
        <div className={styles.hobbyList}>
          <article className={styles.hobbyItem}>
            <Image
              src="/images/photoshoot.jpg"
              alt="趣味1"
              width={200}
              height={200}
              className={styles.hobbyImage}
            />
            <p className={styles.hobbyText}>写真撮影</p>
          </article>
          <article className={styles.hobbyItem}>
            <Image
              src="/images/game.jpg"
              alt="趣味2"
              width={200}
              height={200}
              className={styles.hobbyImage}
            />
            <p className={styles.hobbyText}>ゲーム</p>
          </article>
          <article className={styles.hobbyItem}>
            <Image
              src="/images/basketball.jpg"
              alt="趣味3"
              width={200}
              height={200}
              className={styles.hobbyImage}
            />
            <p className={styles.hobbyText}>バスケットボール</p>
          </article>
          {/* 必要に応じてカードを追加 */}
        </div>
      </section>
      </>
    )
}