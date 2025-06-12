import Image from "next/image"
import styles from "./page.module.css"

export default function HobbyPage() {
    return (
        <section id="hobby" className={styles.hobbySection}>
        <h2 className={styles.heading}>Hobby</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit architecto modi provident sed nostrum deleniti ipsum voluptatibus repellat unde iusto soluta adipisci commodi, accusamus vero ullam exercitationem, amet id sequi.</p>
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
              src="/images/trip.jpg"
              alt="趣味2"
              width={200}
              height={200}
              className={styles.hobbyImage}
            />
            <p className={styles.hobbyText}>旅行</p>
          </article>
          <article className={styles.hobbyItem}>
            <Image
              src="/images/basketball.png"
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
    )
}