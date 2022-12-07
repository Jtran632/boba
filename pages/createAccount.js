import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { router } from "next/router";
export default function Explore() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formValid, setFormValid] = useState(true);
  const checkForm = () => {
    console.log(formData.password);
    console.log(formData.passwordConfirm);
    setFormValid(true);
    if (formData.name.length <= 3) {
      toast.error(
        "Username too short needs to be greater or equal to 4 characters"
      );
      setFormValid(false);
    }
    if (/\S+@\S+\.\S+/.test(formData.email) === false || formData.length < 1) {
      toast.error("Email not in valid form xxx@xxx.xxx");
      setFormValid(false);
    }
    if (
      formData.password != formData.passwordConfirm ||
      formData.password.length <= 5
    ) {
      toast.error("Passwords don't match or less than 6 characters");
      setFormValid(false);
    }
  };
  async function saveUser() {
    checkForm();
    console.log(formValid);
    if (formValid === true) {
      const response = await fetch("/api/userValid", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      var res = await response.json();
      console.log(res);
      if (!response.ok) {
        toast.error(res.msg);
      } else if (response.ok) {
        toast.success(res.msg);
        return setTimeout(() => {
          router.push("/login");
        }, 5000);
      }
    } else {
      return;
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
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          theme="colored"
        />
        <div className="flex font-mono text-center m-40 scale-150">
          <Image
            src={"/BobaMilkTea2.jpg"}
            alt="image"
            position="fixed"
            width={300}
            height={200}
            className="border-2 rounded-lg hidden md:block"
          ></Image>
          <ul>
            <ul className="grid bg-yellow-100 h-full border-2 rounded-xl">
              <h1 className="text-2xl ">Create Account</h1>
              <div className="grid grid-col-2 p-2 m-2 gap-1">
                <span>
                  <input
                    placeholder="Name (6 or more characters)"
                    className="text-center mb-1 bg-white border-2 border-gray-400 rounded-xl placeholder:text-xs"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  ></input>
                </span>
                <span>
                  <input
                    placeholder="Email (xxx@xxx.xxx)"
                    className="text-center mb-2 bg-white border-2 border-gray-400 rounded-xl placeholder:text-xs"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  ></input>
                </span>

                <div className=" row-start-3 col-span-4 grid">
                  <input
                    placeholder="Password (6 or more characters)"
                    className="text-center bg-white border-2 border-gray-400 rounded-xl mb-2 placeholder:text-xs"
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  ></input>
                  <input
                    placeholder="Confirm Password (6 or more characters)"
                    className="text-center bg-white border-2 border-gray-400 rounded-xl placeholder:text-xs"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        passwordConfirm: e.target.value,
                      })
                    }
                  ></input>
                </div>
              </div>
              <button
                className="bg-blue-300 m-2 border-2 rounded-md"
                onClick={() => saveUser()}
              >
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
