"use client";
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/app/_libs/firebase";

import Link from "next/link";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
  const [form, setForm] = useState({
    lastname: "",
    firstname: "",
    email: "",
    message: "",
  });

  interface ContactForm {
    lastname: string;
    firstname: string;
    email: string;
    message: string;
  }

  const handleSubmit = async (
    e: import("react").FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contacts"), {
        ...(form as ContactForm),
        createdAt: serverTimestamp(),
      });
      alert("Message sent!");
      setForm({ lastname: "", firstname: "", email: "", message: "" });
    } catch (error: unknown) {
      console.error(error);
      alert("Failed to send message");
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.heading}>Contact</h2>
      <p>
        いつでもお気軽にご連絡ください。お待ちしています。
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.horizontal}>
          <div className={styles.item}>
            <input
              className={styles.textfield}
              type="text"
              placeholder="姓"
              value={form.lastname}
              onChange={(e) => setForm({ ...form, lastname: e.target.value })}
              required
            />
          </div>

          <div className={styles.item}>
            <input
              className={styles.textfield}
              type="text"
              placeholder="名"
              value={form.firstname}
              onChange={(e) => setForm({ ...form, firstname: e.target.value })}
              required
            />
          </div>
        </div>

        <div className={styles.item}>
          <input
            className={styles.textfield}
            type="email"
            placeholder="メールアドレス"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>

        <div className={styles.item}>
          <textarea
            className={styles.textarea}
            placeholder="メッセージ"
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />
        </div>

        <div className={styles.horizontal}>
          <ul className={styles.iconlink}>
            <li className={styles.icon}>
              <Link
                href="https://mail.google.com/mail/?view=cm&to=w24001@osfl.ac.jp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Gmail"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </Link>
            </li>
            <li className={styles.icon}>
              <Link
                href="https://github.com/Kanny-git"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </li>
          </ul>

          <input type="submit" value="Send" className={styles.button} />
        </div>
      </form>
    </section>
  );
}
