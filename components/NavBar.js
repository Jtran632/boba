import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
export default function NavBar() {
  return (
    <div>
      <div className="flex place-content-between items-center">
        <div>
          <ul className="flex items-center">
            <Image src={"/milkTea.png"} alt="" width={40} height={2}></Image>
            <li>Tracies UwU Cafe</li>
          </ul>
        </div>
        <ul className="flex items-center gap-5">
          <li className="navItems">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="navItems">
            {" "}
            <Link href={"/menu"}>Menu</Link>
          </li>
          <li className="navItems">
            {" "}
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
