"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader/index";
import { SnackbarProvider } from "notistack";
import { AuthProvider } from "./context/AuthContext";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const router = useRouter();
  const token = getCookie("token");
  // useEffect(() => {
  //   if (!token) {
  //     router.push("/login");
  //   }
  //   console.log("object :>> ");
  // }, [token, router]);

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/logo/main-logo.svg"
          type="image/svg+xml"
        />
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests; default-src * 'unsafe-inline' 'unsafe-eval' data: blob:"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          <AuthProvider>
            <SnackbarProvider
              maxSnack={3}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              autoHideDuration={1000}
            >
              {loading ? <Loader /> : children}
            </SnackbarProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
