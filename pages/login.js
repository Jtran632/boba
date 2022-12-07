import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLoginContext } from "../components/loginContext";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { router } from "next/router";

export default function Explore() {
  const { loggedIn, setLoggedIn } = useLoginContext();
  const [formValid, setFormValid] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const checkForm = () => {
    console.log(formData.email);
    console.log(formData.password);
    setFormValid(true);
    if (/\S+@\S+\.\S+/.test(formData.email) === false || formData.length < 1) {
      toast.error("Email not in valid form xxx@xxx.xxx");
      setFormValid(false);
    }
    if (formData.password.length <= 5) {
      toast.error("Passwords less than 6 characters");
      setFormValid(false);
    }
  };
  async function getUser() {
    checkForm();
    if (formValid === true) {
      const response = await fetch("/api/userLogin", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      var res = await response.json();
      console.log(res);
      if (!response.ok) {
        toast.error(res.msg);
      } else if (response.ok) {
        toast.success(res.msg);
        setLoggedIn({ logged: true, userId: res.body.id });
        return setTimeout(() => {
          console.log(loggedIn);
          console.log(
            `logged in user ${res.body.name}, ` +
              "logged in id:" +
              loggedIn.userId
          );
          router.push("/");
        }, 5000);
      }
    } else {
      return;
    }
  }
  return (
    <div className={styles.container}>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="colored"
      />
      <Head>
        <title>Asdf Boba</title>
        <meta name="" content="header" />
        <link rel="icon" href="/milkTea.png" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className="flex font-mono text-center m-40 scale-150">
          <Image
            src={"/BobaMilkTea.jpg"}
            alt="image"
            position="fixed"
            width={200}
            height={200}
            className="border-2 rounded-lg hidden md:block"
          ></Image>
          <ul>
            <ul className="grid bg-yellow-100 h-full border-2 rounded-xl">
              <div className="grid p-4 ">
                <h1 className="text-2xl ">Login Here</h1>
                <input
                  placeholder="Email"
                  className="text-center mb-1 bg-white border-2 border-gray-400 rounded-xl"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                ></input>
                <input
                  placeholder="Password"
                  className="text-center bg-white border-2 border-gray-400 rounded-xl"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                ></input>
                <Link
                  href={"/createAccount"}
                  className="font-extralight h-1/2 text-xs lg:text-base mb-4"
                >
                  {"Don't have an account yet? Create one here"}
                </Link>
              </div>
              <button className="bg-white" onClick={() => getUser()}>
                {" "}
                Submit{" "}
              </button>
            </ul>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}
