"use client";
import React from "react";
import { FaGamepad, FaHeart, FaStore } from "react-icons/fa6";
import { BsFillHandbagFill } from "react-icons/bs";
import DashboardCard1 from "./DashboardCard1";
import DashboardCard2 from "./DashboardCard2";

const DashboardTable: React.FC = () => {
  return (
    <>
      {/* Main grid for Dashboard Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 2xl:gap-8">
        {/* Dashboard Card 1 - Players */}
        <div className="grid">
          <DashboardCard1
            ClassName="bg-[#605CFF4D]"
            title="Players"
            total="178+"
          >
            <FaHeart className="h-5 w-5 text-[#6254FF]" />
          </DashboardCard1>
          <div className="mt-4">
            <DashboardCard2 />
          </div>
        </div>

        {/* Dashboard Card 2 - Teen Patti */}
        <div className="grid">
          <DashboardCard1
            ClassName="bg-[#2FE5A74D]"
            title="Teen Patti"
            total="20+"
          >
            <FaGamepad className="h-6 w-6 text-[#2FE5A7]" />
          </DashboardCard1>
          <div className="mt-4">
            <DashboardCard2 />
          </div>
        </div>

        {/* Dashboard Card 3 - Ludo */}
        <div className="grid">
          <DashboardCard1 ClassName="bg-[#FF69B44D]" title="Ludo" total="90+">
            <BsFillHandbagFill className="h-5 w-5 text-[#FF69B4]" />
          </DashboardCard1>
          <div className="mt-4">
            <DashboardCard2 />
          </div>
        </div>

        {/* Dashboard Card 4 - Rummy */}
        <div className="grid">
          <DashboardCard1 ClassName="bg-[#605CFF4D]" title="Rummy" total="12+">
            <FaStore className="h-5 w-5 text-white" />
          </DashboardCard1>
          <div className="mt-4">
            <DashboardCard2 />
          </div>
        </div>
      </div>

      {/* Placeholder for additional charts or components */}
      <div className="mt-6 grid grid-cols-1 gap-6 2xl:gap-8">
        {/* Additional components (e.g., charts, maps, etc.) */}
        {/* <ChartOne /> */}
        {/* <ChartTwo /> */}
        {/* <ChartThree /> */}
        {/* <MapOne /> */}
        {/* <ChatCard /> */}
      </div>
    </>
  );
};

export default DashboardTable;
