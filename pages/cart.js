import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default function Cart({ dataDrinks }) {
  console.log(dataDrinks);
  return (
    <div>
      <Header />
      <main>
        {dataDrinks.length > 0 ? (
          <div className="flex ml-40 mr-40 mt-10 justify-between">
            <div className="flex w-1/2">
              <ul className="grid grid-cols-2 gap-2">
                {dataDrinks.map((i, index) => (
                  <li
                    key={i.id}
                    className="grid font-mono border-4 border-double border-blue-400 bg-green-200 p-2"
                  >
                    Order#{index + 1} - ${i.cost}
                    <span>Flavors: {i.flavors}</span>
                    <span>Toppings: {i.toppings}</span>
                    <span>Base: {i.teaBase} Tea</span>
                    <span>Sweetness: {i.sweetness}%</span>
                    <span>Ice: {i.ice}</span>
                  </li>
                ))}
              </ul>
            </div>
              <div>Hello</div>
          </div>
        ) : (
          <div className="flex justify-center m-10 text-2xl font-bold">
            Nothing in Cart
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const drinks = await prisma.drink.findMany();
  return {
    props: {
      dataDrinks: drinks,
    },
  };
}
