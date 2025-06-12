import styles from "./page.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faHtml5, faJava, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";

export default function SkillPage() {
  return (
    <>
    <main id="skill" className={styles.container}>
      <h2 className={styles.heading}>Skill</h2>
      <p className={styles.text}>
        これまで勉強した言語や現在学習中の技術を載せましょう。
        「半分ぐらいしか理解していないけど…」というものでも積極的に書き、学習のモチベーションに変えましょう。
      </p>
      <ul className={styles.skillList}>
        <li>
          <FontAwesomeIcon icon={faHtml5} className={styles.icon} style={{color:"#E34F26"}}/><br />HTML5
        </li>
        <li>
          <FontAwesomeIcon icon={faCss3} className={styles.icon} style={{color:"#1572B6"}} /><br />CSS3
        </li>
        <li>
          <FontAwesomeIcon icon={faJs} className={styles.icon} style={{color:"#F7DF1E"}} /><br />JavaScript
        </li>
        <li>
           <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="javalogo" width={20} height={30} /><br />Java
        </li>
      </ul>
      <ul className={styles.skillList}>
        <li>
          <FontAwesomeIcon icon={faReact} className={styles.icon} style={{color:"#61DAFB"}} /><br />React
        </li>
        <li>
          <FontAwesomeIcon icon={faNodeJs} className={styles.icon} style={{ color: "#339933" }} /><br />Node.js
        </li>
        <li>
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="typescriptlogo" width={20} height={30} /><br/>TypeScript
        </li>
        <li>
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="nextjslogo" width={20} height={30} /><br/>Next.js
        </li>
        {/* 自分の学習中・習得済み技術をリストで追加 */}
      </ul>
    </main>
    <hr />
    </>
  );
}
