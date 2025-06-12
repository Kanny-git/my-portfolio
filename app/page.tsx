import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import AboutPage from "./_components/about/page";
import ProfilePage from "./_components/profile/page";
import WorkPage from "./_components/work/page";
import SkillPage from "./_components/skill/page";
import StrengthsPage from "./_components/strengths/page";
import HobbyPage from "./_components/hobby/page";
export default function HomePage() {
  return (
    <>
      <header className={styles.header}>
        <Link href="./" className={styles.logoLink}>
          AUNG
        </Link>
      <div>
        <nav className={styles.navLinks}>
          <ul>
              <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#profile">Profile</Link>
              </li>
            <li>
              <Link href="#hobby">Hobby</Link>
            </li>
            <li>
              <Link href="#work">Work</Link>
            </li>
            <li>
              <Link href="#skill">Skill</Link>
            </li>
            <li>
              <Link href="#strengths">Strengths</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      </header>
      <Link href="/"><div className={styles.toTop}>∧</div></Link>
      <main className={styles.container}>
        <section className={styles.hero}>
          <Image
            src="/images/mainvisual.jpg"
            alt="MainVisual"
            width={1200}
            height={600}
            className={styles.heroImage}
          />
          <div className={styles.overlay}></div>
          <div className={styles.title}>
            <h1>
              Welcome to <br />
              my portfolio site
            </h1>
            <p>私のポートフォリオサイトへようこそ。</p>
          </div>
        </section>
      </main>
      <AboutPage />
      <ProfilePage />
      <HobbyPage />
      <WorkPage />
      <SkillPage />
      <StrengthsPage />
    </>
  );
}
