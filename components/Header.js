import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
export default function Header() {
  return (
    
    <header className={styles.header}>
      <div className="flex place-content-between items-center">
        <div>
          <ul className="flex items-center gap-x-4">
            <Link href={"/"}>
              <Image
                src={"/bobaNav.png"}
                alt=""
                width={40}
                height={1}
                className="border-dashed border-2 border-white rounded-full"
              ></Image>
            </Link>
            <li className="text-base md:text-2xl">{"Asdf Boba"}</li>
          </ul>
        </div>
        <ul className="flex items-center gap-1 md:gap-5 text-xs md:text-base">
          <li className="headerItem">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="headerItem">
            {" "}
            <Link href={"/menu"}>Menu</Link>
          </li>
          <li className="headerItem">
            <Link href={"/hours"}>Hours/Locations</Link>
          </li>
          <li className="headerItem">
            {" "}
            <Link href={"/gallery"}>Gallery</Link>
          </li>
          <li className="headerItem">
            {" "}
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
