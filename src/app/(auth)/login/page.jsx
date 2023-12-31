"use client";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Link from "next/link.js";
import React, { useState } from "react";
import RootLayout from "../layout";


const Login = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    telephone: "",
    password: "",
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });

      setInputs({
        email: "",
        telephone: "",
        name: "",
        password: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));

    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    axios({
      method: "POST",
      url: "http://localhost:8080",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(true, "Merci, votre message a été soumis.");
      })

      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <RootLayout>
      <div>
        <div className=" bg-white rounded-md overflow-y-hidden">
          <div className="m-auto   flex flex-col items-center justify-center">
            <div className="bg-footerBg w-full drop-shadow-2xl">
              <h1 className="text-3xl pb-4 text-white text-center shadow-xl font-semibold pl-4 pt-4">
                Saisissez votre e-mail pour vous connecter
              </h1>
            </div>
            <form
              onSubmit={handleOnSubmit}
              className="mt-5 m-auto grid gap-y-2 px-4 bg-white rounded-xl items-center p-5 justify-center"
            >
              <label
                htmlFor="email"
                className="text-gray-600 text-xs font-semibold uppercase"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="_replyto"
                onChange={handleOnChange}
                required
                value={inputs.email}
                className="border border-gray-300 rounded py-1 px-2 transition-all duration-200 focus:outline-none focus:border-blue-500 w-full md:w-auto"
              />

              <label
                htmlFor="password"
                className="text-gray-600 text-xs font-semibold uppercase"
              >
                Mot de passe
              </label>
              <input
                id="password"
                name="password"
                onChange={handleOnChange}
                required
                value={inputs.password}
                className="border border-gray-300 rounded px-2 py-1 transition-all duration-200 focus:outline-none focus:border-blue-500 w-full md:w-auto"
              />

              <button
                type="submit"
                disabled={status.submitting}
                className={`${
                  status.submitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-700"
                } text-white px-4 py-2 rounded font-semibold transition-all duration-200`}
              >
                {!status.submitting
                  ? !status.submitted
                    ? "Connexion"
                    : "Connecté!"
                  : "Connexion..."}
              </button>
              <button>mot de passe oublié?</button>
            </form>
            <div className="flex items-center justify-center">
              <div className="h-[1px] w-auto md:w-10 bg-gray-600 rounded-lg"></div>
              <small className="px-5">Nouveau chez la Fondation TSF?</small>
              <div className="h-[1px] w-auto md:w-10 bg-gray-600 rounded-lg"></div>
            </div>
            <Link href={"/register"} className="py-5">
              <button className="inline-block mx-auto px-4 py-2 rounded m-auto cursor-pointer text-center font-semibold  text-white bg-green-400 hover:bg-green-600 transition-all duration-200">
                Créez votre compte
              </button>
            </Link>
            <div className="flex items-center justify-center">
              <div className="h-[1px] w-auto md:w-10 bg-gray-600 rounded-lg"></div>
              <small className="px-5">ou</small>
              <div className="h-[1px] w-auto md:w-10 bg-gray-600 rounded-lg"></div>
            </div>
            <button className="text-white bg-red-400 h-14 px-4 my-4  rounded-lg m-auto">
              <div>
                Se connecter avec Google
                <FontAwesomeIcon className="px-4" icon={faGoogle} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}

Login.getLayout = (page) => {
  return <body>{page}</body>;
};

export default Login