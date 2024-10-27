// src/components/Login/Login.tsx
"use client";
import { loginAdmin } from "@/api/api";
import useSnackbar from "@/hooks/useSnackbar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { showSnackbar } = useSnackbar();

  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    try {
      console.log("Navigating to /dashboard");
      showSnackbar("login successfully", "success");
      router.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="relative h-screen">
      <Image
        src={require("../../../public/images/logo/Image.png")}
        alt="User"
        layout="fill"
        objectFit="cover"
        className="relative" // Image is relatively positioned
      />
      <div
        className="absolute max-w-md rounded-md bg-white px-6 py-12 shadow-lg lg:px-8"
        style={{
          top: "40%",
          left: "80%",
          transform: "translate(-70%, -10%)",
        }}
      >
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="text"
                value={username || "abhay123"}
                disabled
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 ps-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password || "abhay@123"}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 ps-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
