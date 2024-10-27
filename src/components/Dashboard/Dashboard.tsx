"use client";
import React, { useState } from "react";
import DashboardTable from "./DashboardTable";
import { CiSettings } from "react-icons/ci";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Switch from "@mui/material/Switch";
import useSnackbar from "@/hooks/useSnackbar";

const Dashboard: React.FC = () => {
  const [serverDown, setServerDown] = useState(false);
  const [playerLimit, setPlayerLimit] = useState(false);
  const { showSnackbar } = useSnackbar();

  const handleServerDownChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setServerDown(event.target.checked);
    showSnackbar("server down", "default");
  };

  const handlePlayerLimitChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPlayerLimit(event.target.checked);
    showSnackbar("Player limit", "default");
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <style>
        {`
          input::placeholder {
            color: #fff;
            opacity: 0.7;
          }
        `}
      </style>

      <div className="flex flex-col items-center justify-between space-y-4 px-4 py-4 md:flex-row md:space-x-6 md:space-y-0 md:px-6 md:py-5">
        <div className="text-dark text-xl font-semibold md:text-2xl">
          Dashboard Overview
        </div>
        <div className="flex w-full flex-col items-center space-y-4 md:w-auto md:flex-row md:space-x-4 md:space-y-0">
          <div className="flex items-center">
            <label className="inline-flex cursor-pointer items-center">
              <span className="text-md font-medium text-gray-900 dark:text-gray-300">
                Server Down
              </span>
              <Switch
                size="medium"
                checked={serverDown}
                onChange={handleServerDownChange}
                color="primary"
              />
            </label>
          </div>
          <div className="flex items-center">
            <label className="inline-flex cursor-pointer items-center">
              <span className="text-md font-medium text-gray-900 dark:text-gray-300">
                Player Limit
              </span>
              <Switch
                checked={playerLimit}
                size="medium"
                onChange={handlePlayerLimitChange}
                color="primary"
              />
            </label>
          </div>
        </div>
      </div>

      <DashboardTable />
    </div>
  );
};

export default Dashboard;
