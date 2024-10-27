"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import { SnackbarProvider } from "notistack";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 100);
  }, []);

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/logo/main-logo.svg"
          type="image/svg+xml"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            autoHideDuration={1000}
          >
            {loading ? <Loader /> : children}
          </SnackbarProvider>
        </div>
      </body>
    </html>
  );
}
