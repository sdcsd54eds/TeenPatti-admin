"use client";
import { welcomeChips } from "@/api/api";
import React, { useEffect, useState } from "react";
import Loader from "../common/Loader";

function WelcomeChips() {
  const [welcomeChip, setWelcomeChips] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const FetchData = async () => {
      setLoading(true);
      try {
        const response = await welcomeChips();
        setWelcomeChips(response.welcome_chips);
      } catch (error) {
        console.error("Failed to fetch welcome chips:", error);
      } finally {
        setLoading(false);
      }
    };
    FetchData();
  }, []);

  return (
    <div>
      <p className="mx-auto pt-5 text-center text-lg font-bold">
        {!loading ? `Welcome Chips: ${welcomeChip}` : <Loader />}
      </p>
    </div>
  );
}

export default WelcomeChips;
