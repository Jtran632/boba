import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import NavBar from "../components/NavBar";
export default function Home() {
  const flavors = [
    "Honeydew",
    "Lychee",
    "Mango",
    "Passion Fruit",
    "Peach",
    "Plum",
    "Strawberry",
    "Avocado",
    "Banana",
    "Cantaloupe",
    "Coconut",
    "Grape",
    "Green Apple",
    "Jackfruit",
    "Kiwi",
    "Lemon",
    "Pineapple",
    "Watermelon",
    "Almond",
    "Coffee",
    "Ginger",
    "Taro",
    "Barley",
    "Caramel",
    "Chocolate",
    "Lavender",
    "Mocha",
    "Rose",
    "Sesame",
  ];
  const sweetness = [0, 25, 50, 75, 100];
  const tea = ["Black", "Green", "Oolong", "White"];
  const toppings = [
    "Tapioca Pearls",
    "Jelly",
    "Taro Balls",
    "Pudding",
    "Popping Boba",
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="" content="header" />
        <link rel="icon" href="/milkTea.png" />
      </Head>

      <header className={styles.header}>
        <NavBar />
      </header>

      <main className={styles.main}>
        <div className="grid menu items-center justify-center grid-cols-3 border-8 border-white">
          <div className="gap-y-10 grid col-span-2">
            <div>
              <h1 className="text-5xl justify-center flex">Flavors</h1>
              <ul className="grid grid-cols-5 gap-x-2">
                {flavors.map((i) => (
                  <li key={i}>
                    {"- "}
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex">
              <div className="grid grid-cols-2">
                <ul>
                  <h1 className="text-4xl ">Toppings</h1>
                  {toppings.map((i) => (
                    <li key={i}>
                      {"- "}
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h1 className="text-4xl">Tea</h1>
                <ul className="grid grid-cols-1">
                  {tea.map((i) => (
                    <li key={i}>- {i}</li>
                  ))}
                </ul>
              </div>
            </div>
            <ul className="">
              <h1 className="text-4xl">Sweetness</h1>
              <ul className="flex gap-4">
                {sweetness.map((i) => (
                  <li key={i}>- {i}%</li>
                ))}
              </ul>
            </ul>
          </div>
          <div className="col-span-1">
            <Image
              src={"/boba.jpg"}
              alt="image"
              position="fixed"
              width={400}
              height={200}
              className="img1"
            ></Image>
          </div>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
