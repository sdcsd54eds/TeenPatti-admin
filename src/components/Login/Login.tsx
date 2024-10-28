"use client";
import { loginAdmin } from "@/api/api";
import useSnackbar from "@/hooks/useSnackbar";
import { getCookie, setCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LoaderFullScreen from "../common/Loader/LoaderFullScreen";
import useAuth from "@/app/context/AuthContext";

export default function Login() {
  const router = useRouter();
  const token = getCookie("token");
  const { setUser } = useAuth();
  const { showSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const [loader, setLoader] = useState<boolean>(false);

  // useEffect(() => {
  //   if (token) {
  //     router.push("/dashboard");
  //   }
  // }, [token, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrors({ username: "", password: "" });
    const newErrors = { username: "", password: "" };
    if (!formData.username || formData.username.length < 3) {
      newErrors.username = "Username must be require";
    }

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be require.";
    }

    if (newErrors.username || newErrors.password) {
      setErrors(newErrors);
      return;
    }
    try {
      setLoader(true);
      const response: any = await loginAdmin(
        formData.username,
        formData.password,
      );
      setUser(response.user);
      router.push("/dashboard");
      setCookie("token", response.token, { maxAge: 60 * 60 * 24 * 30 });
      setCookie("userId", response.user._id, { maxAge: 60 * 60 * 24 * 30 });
      showSnackbar("Login successful", "success");
    } catch (error: any) {
      showSnackbar(error.response.data.message, "error");
      setErrors((prev) => ({ ...prev, password: error.response.data.message }));
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="bg-opacity-00 relative flex h-screen items-center justify-center bg-black">
      <div className="absolute inset-0">
        <Image
          src={require("../../../public/images/logo/Image.png")}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      <div className="relative z-10 mx-4 w-full max-w-lg rounded-lg bg-white bg-opacity-30 p-8 shadow-lg backdrop-blur-md sm:mx-auto">
        <h2 className="text-center text-2xl font-bold leading-tight text-gray-900">
          Sign in to your account
        </h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                autoComplete="username"
                className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              />
              {errors.username && (
                <p className="py-1 text-sm font-bold text-red-500">
                  {errors.username}
                </p>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900"
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
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
                className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              />
              {errors.password && (
                <p className="py-1 text-sm font-bold text-red-500">
                  {errors.password}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition duration-150 ease-in-out hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      {loader && <LoaderFullScreen />}
    </div>
  );
}
