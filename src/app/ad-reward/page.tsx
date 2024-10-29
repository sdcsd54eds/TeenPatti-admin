import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import AdReward from "@/components/AdReward/AdReward";

export const metadata: Metadata = {
  title: "AD-reward",
  description: "AD-reward page",
};

const BasicChartPage: React.FC = () => {
  return (
    <DefaultLayout>
      <AdReward />
    </DefaultLayout>
  );
};

export default BasicChartPage;
