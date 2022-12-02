import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

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

  const [drinkData, setDrinkData] = useState({});
  const [selectedFlavor, setSelectedFlavor] = useState([]);
  const [selectedTopping, setSelectedTopping] = useState([]);
  const [selectedTeaBase, setSelectedTeaBase] = useState("Black");
  const [selectedSweetness, setSelectedSweetness] = useState(50);
  const [selectedIce, setSelectedIce] = useState("Regular");
  function checkDrinkSubmit() {
    alert("here");
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
    if(selectedTopping.length > 1)
    {
        cost = cost + (selectedTopping.length *.5) - .5
    }
    alert(cost)
    setDrinkData({flavors: f, toppings: t, teaBase: selectedTeaBase, sweetness: selectedSweetness, ice: selectedIce, cost: cost})
    saveDrink(drinkData)
    return
  }
  async function saveDrink() {
    const response = await fetch("/api/drinks", {
      method: "POST",
      body: JSON.stringify(drinkData),
    });
    if (!response.ok) {
      alert("Bad request");
    } else if (response.ok) {
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
  /* Bugged */
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
        <div className="grid grid-cols-3 gap-5 w-3/4">
          <form type="submit" className=" col-start-1 col-end-3">
            <label className="text-xs md:text-md">
              <div className="text-center mt-4 border-4 border-pink-200 bg-yellow-50">
                <h1 className="underline font-bold">Flavors - Max 3</h1>
                <ul className="grid grid-cols-3 md:grid-cols-6 p-1 bg-yellow-100 text-center gap-1">
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
              <div className="text-center mt-4 border-4 border-pink-300 bg-yellow-50">
                <h1 className="underline font-bold">Toppings - $0.25 for each after one</h1>
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
              <div className="text-center mt-4 border-4 border-pink-300 bg-yellow-50">
                <h1 className="underline font-bold">Tea Base</h1>
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

              <div className="text-center mt-4 border-4 border-pink-300 bg-yellow-50">
                <h1 className="underline font-bold">Sweetness</h1>
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

              <div className="text-center mt-4 border-4 border-pink-300 bg-yellow-50">
                <h1 className="underline font-bold">Ice</h1>
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

          <div className="text-xs border-4 border-black p-2">
            <h1 className="text-center">Selected Items</h1>
            <ul className="border-2 border-black mt-10 p-2 grid grid-cols-4">
              <li>Flavors: </li>
              {selectedFlavor.map((i, j) => (
                <li key={i + j}>{i}</li>
              ))}
            </ul>
            <ul className="border-2 border-black mt-10 p-2 grid grid-cols-6">
              <li>Toppings: </li>
              {selectedTopping.map((i, j) => (
                <li key={i + j}>{i}</li>
              ))}
            </ul>
            <ul className="border-2 border-black mt-10 p-2 grid grid-cols-2">
              <li>Tea Base: </li>
              <li key={selectedTeaBase}>{selectedTeaBase}</li>
            </ul>
            <ul className="border-2 border-black mt-10 p-2 grid grid-cols-2">
              <li>Sweetness: </li>
              <li key={selectedSweetness}>{selectedSweetness}%</li>
            </ul>
            <ul className="border-2 border-black mt-10 p-2 grid grid-cols-2">
              <li>Ice: </li>
              <li key={selectedIce}>{selectedIce}</li>
            </ul>
            <button className="border-8" onClick={() => checkDrinkSubmit()}>
              Submit
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
