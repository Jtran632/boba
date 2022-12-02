import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Explore() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Asdf Boba</title>
        <meta name="" content="header" />
        <link rel="icon" href="/milkTea.png" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className="grid font-Heaters text-center text-7xl md:text-9xl">
          <Link href={"/menu"} className="navItems">
            Menu
          </Link>
          <Link href={"/hours"} className="navItems">
            Hours/Locations
          </Link>
          {/* <Link href={"/gallery"} className="navItems">
            Gallery{" "}
          </Link> */}
          <Link href={"/orderDrink"} className="navItems">
            Order Now
          </Link>
          <Link href={"/about"} className="navItems">
            About
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
