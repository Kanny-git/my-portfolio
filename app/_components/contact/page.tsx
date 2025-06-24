import Link from "next/link";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle, faLine} from "@fortawesome/free-brands-svg-icons";

export default function ContactPage() {
    return (
        <section id="contact" className={styles.contactSection}>
            <h2 className={styles.heading}>Contact</h2>
            <p>​いつでもお気軽にご連絡ください。
お待ちしています。</p>
         <form className={styles.form}>
            <div className={styles.horizontal}>
                <div className={styles.item}>
                    <input className={styles.textfield} type="text" id="lastname" name="lastname" placeholder="姓"/>
                </div>
                <div className={styles.item}>
                    <input className={styles.textfield} type="text" id="firstname" name="firstname" placeholder="名"/>
                </div>
            </div>
            <div className={styles.item}>
                <input className={styles.textfield} type="text" id="email" name="email" placeholder="メールアドレス"/>
            </div>
            <div className={styles.item}>
                <textarea className={styles.textarea} id="message" name="message" placeholder="メッセージ" rows={5} />
            </div>
                <div className={styles.horizontal}>
                    <ul className={styles.iconlink}>
                        <li className={styles.icon}><Link href="#"><FontAwesomeIcon icon={faGoogle}/></Link></li>
                        <li className={styles.icon}><Link href="#"><FontAwesomeIcon icon={faLine}/></Link></li>
                        <li className={styles.icon}><Link href="#"><FontAwesomeIcon icon={faGithub}/></Link></li>
                    </ul>
                <input type="submit" value="Send" className={styles.button} />
            </div>
            </form>
        </section>
    )
}