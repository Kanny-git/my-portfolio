// "use client";
import styles from "./page.module.css";
import Image from "next/image";
import { getSkillsList} from "@/app/_libs/microcms";
import { useEffect, useState } from "react";

export default function SkillPage() {
  
  const [data, setData] = useState<{ contents: any[] } | null>(null);

  useEffect(() => {
    async function fetchData() {
      const result = await getSkillsList();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <>
      <main id="skill" className={styles.container}>
      <h2 className={styles.heading}>Skill</h2>
      <p className={styles.text}>
        これまで勉強した言語や現在学習中の技術は以下の通りです。
      </p>
            <ul className={styles.skillList}>
              {data && data.contents.map((skill) => (
                <li key={skill.id}>
                  <Image src={skill.logo.url} alt={skill.logoname} width={30} height={30} className={styles.logo} />
                  <h4>{skill.logoname}</h4>
                  <p>{skill.skilldescription}</p>
                </li>
              ))}
          </ul>
    </main>
    </>
  );
}
