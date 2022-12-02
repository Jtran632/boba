import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient()
export default function Order() {
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

  const [drinkData, setDrinkData] = useState({});
  const [selectedFlavor, setSelectedFlavor] = useState([]);
  const [selectedTopping, setSelectedTopping] = useState([]);
  const [selectedTeaBase, setSelectedTeaBase] = useState("Black");
  const [selectedSweetness, setSelectedSweetness] = useState(50);
  const [selectedIce, setSelectedIce] = useState("Regular");
  function checkDrinkSubmit() {
    var cost = 5.0;
    var f = "";
    var t = "";
    if (selectedFlavor.length > 0) {
      selectedFlavor.map((i) => (f = f + i + " "));
    } else {
      return;
    }
    if (selectedTopping.length > 0) {
      selectedTopping.map((i) => (t = t + i + " "));
    }
    else{
      t = "None"
    }
    if (selectedTopping.length > 1) {
      cost = cost + selectedTopping.length * 0.5 - 0.5;
    }
    return setDrinkData({
      flavors: f,
      toppings: t,
      teaBase: selectedTeaBase,
      sweetness: selectedSweetness,
      ice: selectedIce,
      cost: cost,
    });
  }
  /*bugged have to click button twice when entering page or refresh*/
  async function saveDrink() {
    checkDrinkSubmit()
    console.log(drinkData)
    const response = await fetch("/api/drinks", {
      method: "POST",
      body: JSON.stringify(drinkData),
    });
    if (!response.ok) {
      alert("Bad request");
    } else if (response.ok) {
      alert("Order Received");
      return await response.json();
    }
  }

  function itemAdd(item) {
    if (
      flavors.includes(item) &
      !selectedFlavor.includes(item) &
      (selectedFlavor.length < 3)
    ) {
      return setSelectedFlavor([...selectedFlavor, item]);
    } else if (toppings.includes(item) & !selectedTopping.includes(item)) {
      return setSelectedTopping([...selectedTopping, item]);
    } else if (tea.includes(item)) {
      return setSelectedTeaBase(item);
    } else if (sweetness.includes(item)) {
      return setSelectedSweetness(item);
    } else if (ice.includes(item)) {
      return setSelectedIce(item);
    }
  }
  /* Bugged does not properly remove items from state*/
  function itemDelete(item) {
    if (selectedFlavor.includes(item)) {
      var index = selectedFlavor.indexOf(item);
      return setSelectedFlavor(selectedFlavor.splice(index, 1));
    } else if (selectedTopping.includes(item)) {
      var index = selectedTopping.indexOf(item);
      return setSelectedTopping(selectedTopping.splice(item, index));
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Asdf Boba</title>
        <meta name="" content="header" />
        <link rel="icon" href="/milkTea.png" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className="w-3/4 mt-4 border-8 border-green-300 border-double bg-green-100">
          <div className="grid grid-cols-3 p-2">
            <form
              type="submit"
              className=" col-start-1 col-end-3 border-4 border-double bg-yellow-200 text-center"
            >
              <label className="text-xs">
                <div>
                  <h1 className="underline font-bold bg-yellow-200">
                    Flavors - $5 Mix & Match (Max 3)
                  </h1>
                  <ul className="grid grid-cols-3 md:grid-cols-6 p-2 bg-yellow-100 text-center gap-2">
                    {flavors.map((i) =>
                      !selectedFlavor.includes(i) ? (
                        <li
                          key={i}
                          className="border-2 p-1"
                          onClick={() => itemAdd(i)}
                        >
                          {i}
                        </li>
                      ) : (
                        <li
                          key={i}
                          className="border-2 border-red-200 p-1 bg-green-200"
                          onClick={() => itemDelete(i)}
                        >
                          {i}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div>
                  <h1 className="underline font-bold mt-4 bg-yellow-200">
                    Toppings - $0.50 for each after one
                  </h1>
                  <ul className="grid grid-cols-5 p-1 bg-yellow-100 text-center">
                    {toppings.map((i) =>
                      !selectedTopping.includes(i) ? (
                        <li
                          key={i}
                          className="border-2 p-1"
                          onClick={() => itemAdd(i)}
                        >
                          {i}
                        </li>
                      ) : (
                        <li
                          key={i}
                          className="border-2 border-red-200 p-1 bg-green-200"
                          onClick={() => itemDelete(i)}
                        >
                          {i}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div>
                  <h1 className="underline font-bold mt-4 bg-yellow-200">
                    Tea Base
                  </h1>
                  <ul className="grid grid-cols-4 p-1 bg-yellow-100 text-center">
                    {tea.map((i) =>
                      !selectedTeaBase.includes(i) ? (
                        <li
                          key={i}
                          className="border-2 p-1"
                          onClick={() => itemAdd(i)}
                        >
                          {i}
                        </li>
                      ) : (
                        <li
                          key={i}
                          className="border-2 border-red-200 p-1 bg-green-200"
                          onClick={() => itemAdd(i)}
                        >
                          {i}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div>
                  <h1 className="underline font-bold mt-4 bg-yellow-200">
                    Sweetness
                  </h1>
                  <ul className="grid grid-cols-5 p-1 bg-yellow-100 text-center">
                    {sweetness.map((i) =>
                      i != selectedSweetness ? (
                        <li
                          key={i}
                          className="border-2 p-1"
                          onClick={() => itemAdd(i)}
                        >
                          {i}
                        </li>
                      ) : (
                        <li
                          key={i}
                          className="border-2 border-red-200 p-1 bg-green-200"
                          onClick={() => itemAdd(i)}
                        >
                          {i}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div>
                  <h1 className="underline font-bold mt-4 bg-yellow-200">
                    Ice
                  </h1>
                  <ul className="grid grid-cols-4 p-1 bg-yellow-100 text-center">
                    {ice.map((i) =>
                      i != selectedIce ? (
                        <li
                          key={i}
                          className="border-2 p-1"
                          onClick={() => itemAdd(i)}
                        >
                          {i}
                        </li>
                      ) : (
                        <li
                          key={i}
                          className="border-2 border-red-200 p-1 bg-green-200"
                          onClick={() => itemAdd(i)}
                        >
                          {i}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </label>
            </form>

            <div className="text-xs p-4 bg-blue-200 border-4 border-double">
              <h1 className="text-center text-xl font-semibold">Selections</h1>
              <h1 className="text-center border-2 bg-blue-300">Flavors</h1>
              <ul className="border-2 mb-5 p-2 grid grid-cols-1 md:grid-cols-3 bg-pink-100 text-center">
                {selectedFlavor.map((i, j) => (
                  <li key={i + j}>{i}</li>
                ))}
              </ul>
              <h1 className="text-center border-2 bg-blue-300">Toppings</h1>
              <ul className="border-2 mb-5 p-2 grid grid-cols-1 lg:grid-cols-5 bg-pink-100 text-center">
                {selectedTopping.map((i, j) => (
                  <li key={i + j}>{i}</li>
                ))}
              </ul>

              <h1 className="text-center border-2 bg-blue-300">Tea Base</h1>
              <ul className="border-2 mb-5 p-2 grid grid-cols-1 bg-pink-100 text-center">
                <li key={selectedTeaBase}>{selectedTeaBase}</li>
              </ul>

              <h1 className="text-center border-2 bg-blue-300">Sweetness</h1>
              <ul className="border-2 mb-5 p-2 grid grid-cols-1 bg-pink-100 text-center">
                <li key={selectedSweetness}>{selectedSweetness}%</li>
              </ul>

              <h1 className="text-center border-2 bg-blue-300">Ice</h1>
              <ul className="border-2 mb-5 p-2 grid grid-cols-15 bg-pink-100 text-center">
                <li key={selectedIce}>{selectedIce}</li>
              </ul>
            </div>
          </div>
          <button
            className="grid border-2 p-2 mt-2 border-gray-400 bg-white w-full"
            onClick={saveDrink}
          >
            Submit
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
