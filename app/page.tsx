"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import cx from "classnames";
import styles from "./page.module.css";
import NewsPage from "./_components/news/page";
import ProfilePage from "./_components/profile/page";
import WorkPage from "./_components/work/page";
import SkillPage from "./_components/skill/page";
import StrengthsPage from "./_components/strengths/page";
import HobbyPage from "./_components/hobby/page";
import ContactPage from "./_components/contact/page";

export default function HomePage() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);

  return (
    <>
      <header className={styles.header}>
        <Link href="./" className={styles.logoLink}>
          AUNG
        </Link>
        <div>
          <nav className={cx(styles.navLinks, isOpen && styles.open)}>
            <ul>
              <li>
                <Link href="#news">News</Link>
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
            <button className={cx(styles.button, styles.close)} onClick={close}>
              <Image
                src="images/close.svg"
                alt="closemenu"
                width={24}
                height={24}
                priority
              />
            </button>
          </nav>
          <button className={styles.button} onClick={open}>
            <Image
              src="images/menu.svg"
              alt="menu"
              width={24}
              height={24}
              priority
            />
          </button>
        </div>
      </header>
      <Link href=".">
        <div className={styles.toTop}>∧</div>
      </Link>
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
        <NewsPage />
        <ProfilePage />
        <HobbyPage />
        <WorkPage />
        <SkillPage />
        <StrengthsPage />
        <ContactPage/>
    </>
  );
}
