import styles from "./page.module.css";
import Image from "next/image";
import { getSkillsList } from "@/app/_libs/microcms";

export default async function SkillPage() {
  const data = await getSkillsList();
  return (
    <>
      <main id="skill" className={styles.container}>
      <h2 className={styles.heading}>Skill</h2>
      <p className={styles.text}>
        これまで勉強した言語や現在学習中の技術を載せましょう。
        「半分ぐらいしか理解していないけど…」というものでも積極的に書き、学習のモチベーションに変えましょう。
      </p>
            <ul className={styles.skillList}>
              {data.contents.map((skill) => (
                <li key={skill.id}>
                  <Image src={skill.logo.url} alt={skill.logoname} width={30} height={30} className={styles.logo} />
                  <h4>{skill.logoname}</h4>
                  <p>{skill.skilldescription}</p>
                </li>
              ))}
          </ul>
    </main>
    <hr />
    </>
  );
}
