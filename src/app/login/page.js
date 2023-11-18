"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
const axios = require("axios").default;
import React, { useEffect } from "react";

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShow(true);
      const storedRole = localStorage.getItem("role");
      if (storedRole) {
        router.push("/"); // Change '/dashboard' to your actual dashboard route
      }
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    const res = await axios
      .post("http://localhost:4000/api/user/login", {
        email,
        password,
      })
      .then((res) => {
        if (res.status === 200) {
          const user = res.data;
          console.log(user);
          localStorage.setItem("role", user.role);

          switch (user.role) {
            case "admin":
              router.push("overview/");
              break;
            case "manager":
              router.push("projects/admin");
              break;
            case "employee":
              router.push("projects/");
              break;
            default:
              router.push("employees/");
          }
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        setError(true);
      });
  };
  return (
    <>
      {show && (
        <div className="flex flex-col gap-16 items-center md:flex-row md:h-screen">
          <div className="flex flex-col gap-8 items-center justify-center w-full md:w-1/2 bg-primary h-screen text-white">
            <h1 className="font-semibold text-5xl">Welcome back !</h1>
            <p className="text-2xl max-w-[25rem] text-center">
              Enter your personal details and start your journey with us
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-1/4">
            <div className="w-full max-w-md space-y-8">
              <div>
                <h1 className="text-2xl font-bold">Welcome back!</h1>
                <p className="mt-2 text-gray-600">
                  Please sign in to your account.
                </p>
              </div>
              {error ? (
                <p className="text-red-400">
                  Email or password incorrect, Please try again!
                </p>
              ) : (
                <></>
              )}
              <form
                className="mt-8 space-y-6"
                onSubmit={(e) => handleSubmit(e)}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block font-bold text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 mt-1 border-2 outline-none border-gray-300 rounded-md focus:border-indigo-500 focus:ring-0 focus:ring-indigo-200"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block font-bold text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 mt-1 border-2 outline-none border-gray-300 rounded-md focus:border-indigo-500 focus:ring-0 focus:ring-indigo-200"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full px-4 py-3 font-bold text-white  bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
