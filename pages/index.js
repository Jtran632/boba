import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Asdf Boba</title>
        <meta name="" content="header" />
        <link rel="icon" href="/milkTea.png" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className=" font-Heaters text-9xl pb-10">Welcome</h1>
        <Link href={'/menu'}>
          <Image
            src={"/1.png"}
            alt={"image"}
            width={350}
            height={200}
            className="border-straight border-4 hover:border-black border-white rounded-full p-1 duration-500"
          ></Image>
        </Link>
        <Link href={"/explore"}>
          <h1 className=" font-Heaters text-9xl pt-14 navItems">Explore</h1>
        </Link>
      </main>

      <Footer />
    </div>
  );
}
