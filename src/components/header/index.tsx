import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1 style={{ letterSpacing: "1px", textAlign: "left" }}>
          <Link href="/">
            <a>
              <span style={{ fontWeight: 250 }}>Simple</span>
              <span style={{ fontWeight: 100 }}>News</span>
            </a>
          </Link>
        </h1>
      </header>
    </section>
  );
}

export default Header;
