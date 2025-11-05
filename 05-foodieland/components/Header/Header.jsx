import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerMain}>
        <div className={styles.logo}>
          Foodieland<span>.</span>
        </div>
        <div className={styles.header_links}>
          <Link href={"/"}>Home</Link>
          <Link href={"/recipies"}>Recipies</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/about"}>About us</Link>
        </div>
        <div className={styles.socialMedia}>
            <a href="#"><img src="/images/social/instagram.svg" alt="Instagram" /></a>
            <a href="#"><img src="/images/social/instagram.svg" alt="Instagram" /></a>
            <a href="#"><img src="/images/social/instagram.svg" alt="Instagram" /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
