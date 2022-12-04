import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { PrismaClient } from "@prisma/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const prisma = new PrismaClient();
export default function Cart({ dataDrinks }) {
  const [pageItems, setPageItems] = useState(dataDrinks);
  const [total, setTotal] = useState();
  const notify = () => toast("Deleted!!");
  useEffect(() => {
    function TotalCost() {
      var totalC = 0;
      pageItems.map((i) => (totalC += i.cost));
      setTotal(totalC);
    }
    TotalCost();
  }, [pageItems]);

  async function deleteItem(data) {
    const response = await fetch("/api/drinks", {
      method: "DELETE",
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      // alert("Bad request");
    } else if (response.ok) {
      await response.json();
      getItems();
      notify();
    }
  }

  async function getItems() {
    const response = await fetch("/api/drinks", {
      method: "GET",
    });
    setPageItems(await response.json());
  }

  return (
    <div>
      <Header />
      <main className="font-mono">
        <ToastContainer
          position="bottom-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          theme="colored"
        />
        {pageItems.length > 0 ? (
          <div className="flex ml-40 mr-40 mt-10 justify-between text-xs">
            <div className="flex w-1/2">
              <ul className="grid grid-cols-3 gap-2">
                {pageItems.map((i, index) => (
                  <li
                    key={i.id}
                    className="grid border-4 border-double border-blue-400 bg-green-200 p-2"
                  >
                    <div className="flex justify-between">
                      <span>
                        Order#{index + 1} - ${i.cost}
                      </span>
                      <button
                        className="border-2 bg-red-300 pl-2 pr-2 font-bold"
                        onClick={() => deleteItem(i.id)}
                      >
                        {" "}
                        Delete{" "}
                      </button>
                    </div>
                    <span>Flavors: {i.flavors}</span>
                    <span>Toppings: {i.toppings}</span>
                    <span>Base: {i.teaBase} Tea</span>
                    <span>Sweetness: {i.sweetness}%</span>
                    <span>Ice: {i.ice}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-1/4 text-center">
              <div className="border-8 border-blue-300 border-double">
                <form className="grid grid-cols-1 w-full bg-green-100 items-center">
                  <input
                    placeholder="Name"
                    className="border-2 border-pink-100 bg-white text-center mt-1 mb-1 p-1"
                  ></input>
                  <input
                    placeholder="Email"
                    className="border-2 border-pink-100  bg-white text-center mt-1 mb-1 p-1"
                  ></input>
                  <input
                    placeholder=""
                    className="border-2 border-pink-100  bg-white text-center mt-1 mb-1 p-1"
                  ></input>
                </form>
                <div className="font-bold bg-green-100">
                  Drinks Total: ${total}
                </div>
                <button className="border-2 border-gray-400 bg-white w-full p-1 ">
                  Submit
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center m-10 text-2xl font-bold">
            Nothing in Cart
          </div>
        )}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export async function getServerSideProps() {
  const drinks = await prisma.drink.findMany();
  console.log(drinks);
  return {
    props: {
      dataDrinks: drinks,
    },
  };
}
