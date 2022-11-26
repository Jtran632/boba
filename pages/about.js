import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Asdf Boba</title>
        <meta name="" content="header" />
        <link rel="icon" href="/milkTea.png" />
      </Head>

      <Header />

      <main className={styles.main}>
        <ul className="grid p-20">
          <li>
            <h1 className="font-Heaters text-7xl text-center">History</h1>
            <p1 className="font-serif">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p1>
          </li>
        </ul>
      </main>

      <Footer />
    </div>
  );
}
