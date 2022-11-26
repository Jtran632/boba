import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Menu() {
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
  const ice = ["None", "Less", "Regular", "Extra"];
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
        <title>Asdf Boba</title>
        <meta name="" content="header" />
        <link rel="icon" href="/milkTea.png" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className="flex contentText items-center">
          <div className="gap-y-2 grid col-span-2">
            <div>
              <h1 className="text-7xl flex itemTitle">Flavors</h1>
              <ul className="grid grid-cols-3 md:grid-cols-5 gap-x-2">
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
                  <h1 className="text-5xl itemTitle">Toppings</h1>
                  {toppings.map((i) => (
                    <li key={i}>
                      {"- "}
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h1 className="text-5xl itemTitle">Tea Base</h1>
                <ul className="grid grid-cols-1">
                  {tea.map((i) => (
                    <li key={i}>- {i}</li>
                  ))}
                </ul>
              </div>
            </div>

            <ul>
              <h1 className="text-5xl itemTitle">Sweetness</h1>
              <ul className="flex gap-1">
                {sweetness.map((i) => (
                  <li key={i}>- {i}%</li>
                ))}
              </ul>
            </ul>
            <ul>
              <h1 className="text-5xl itemTitle">Ice</h1>
              <ul className="flex gap-1">
                {ice.map((i) => (
                  <li key={i}>- {i}</li>
                ))}
              </ul>
            </ul>
          </div>

          <Image
            src={"/boba.jpg"}
            alt="image"
            position="fixed"
            width={400}
            height={200}
            className="menuImg"
          ></Image>
        </div>
      </main>

      <Footer />
    </div>
  );
}
