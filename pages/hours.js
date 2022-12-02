import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Hours() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Asdf Boba</title>
        <meta name="" content="header" />
        <link rel="icon" href="/milkTea.png" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className="grid grid-cols-2">
          <div>
            <ul className="grid font-heaters text-center">
              <li>
                <h1 className="text-5xl md:text-7xl font-Heaters">
                  Regular Hours
                </h1>
                <ul className="grid gap-y-2 contentText text-xs md:text-base">
                  <li>Monday: 8am - 8pm</li>
                  <li>Tuesday: 8am - 8pm</li>
                  <li>Wednesday: 8am - 8pm</li>
                  <li>Thursday: 8am - 8pm</li>
                  <li>Friday: 8am - 8pm</li>
                  <li>Saturday: 10am - 6pm</li>
                  <li>Sunday: 10am - 6pm</li>
                </ul>
              </li>
              <li>
                <h1 className="text-5xl md:text-7xl font-Heaters">
                  Holiday Hours
                </h1>
                <ul className="grid gap-y-2 contentText text-xs md:text-base">
                  <li>Thanksgiving: 10am - 3pm</li>
                  <li>Christmas Eve: 10am - 5pm</li>
                  <li>Christmas Day: 10am - 3pm</li>
                  <li>{"New Year's Eve: 10am - 5pm"}</li>
                  <li>{"New Year's Day: 10am - 3pm"}</li>
                </ul>
              </li>
            </ul>
          </div>
          <ul className="grid">
            <li>
              <h1 className="text-5xl md:text-7xl font-Heaters text-center">Locations</h1>
              <div className="contentText grid gap-y-2 text-xs md:text-base">
                <a
                  href="https://www.google.com/maps/dir//Eiffel+Tower,+Champ+de+Mars,+5+Av.+Anatole+France,+75007+Paris,+France/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {"- Champ de Mars, 5 Av. Anatole France, 75007 Paris, France"}
                </a>
                <a
                  href="https://www.google.com/maps/place/The+White+House/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {"- 1600 Pennsylvania Avenue NW, Washington, DC 20500"}
                </a>
                <a
                  href="https://www.google.com/maps/place/Ryongsong+Residence,+Pyongyang,+North+Korea/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {"- Ryongsong Residence: Residence No. 55, North Korea"}
                </a>
                <a
                  href="https://www.google.com/maps/place/Lake+Victoria/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {"- Lake Victoria, Uganda"}
                </a>
                <Image
                  src={"/shack.png"}
                  alt="image"
                  width={300}
                  height={300}
                 className="rotate-12 scale-75 hover:-rotate-0 duration-500"
                ></Image>
              </div>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}
