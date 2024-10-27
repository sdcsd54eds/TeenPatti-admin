import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Dashboard from "@/components/Dashboard/Dashboard";
import Login from "@/components/Login/Login";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "TeenPatti Gold Admin",
};

export default function Home() {
  return (
    <>
      {false ? (
        <Login />
      ) : (
        <>
          <DefaultLayout>
            <Dashboard />
          </DefaultLayout>
        </>
      )}
    </>
  );
}
