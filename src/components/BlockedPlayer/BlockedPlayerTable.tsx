// BlockedPlayerTable.tsx
"use client";

import React from "react";
import { ColDef } from "ag-grid-community";
import { CiClock2, CiMail } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import Image from "next/image";
import CustomTable from "../common/Table/CustomTable";

interface RowData {
  name: string;
  invoiceId: string;
  chips: number;
  loginType: string;
  version: string;
  lastLogin: string;
  createdAt: string;
  email: string;
  avatar: string;
}

export default function BlockedPlayerTable() {
  const rowData: RowData[] = [
    {
      name: "Arrora gaur",
      invoiceId: "#876369",
      chips: 1000,
      loginType: "Guest",
      version: "1.0",
      lastLogin: "12 Dec, 2020",
      createdAt: "12 Dec, 2020",
      email: "Arrora@gmail.com",
      avatar: "https://i.pravatar.cc/50?img=1",
    },
    {
      name: "James",
      invoiceId: "#876369",
      chips: 1000,
      loginType: "Facebook",
      version: "1.0",
      lastLogin: "12 Dec, 2020",
      createdAt: "12 Dec, 2020",
      email: "James@gmail.com",
      avatar: "https://i.pravatar.cc/50?img=3",
    },
  ];

  const columnDefs: Array<ColDef<RowData>> = [
    {
      field: "name",
      headerName: "Name",
      cellRenderer: (params: any) => (
        <div className="flex items-center gap-2">
          <Image
            src={params.data.avatar}
            alt="avatar"
            height={24}
            width={24}
            className="rounded-full"
          />
          <span>{params.value}</span>
        </div>
      ),
    },
    { field: "invoiceId", headerName: "Invoice Id" },
    { field: "chips", headerName: "Chips" },
    { field: "loginType", headerName: "Login type" },
    { field: "version", headerName: "Version" },
    {
      field: "lastLogin",
      headerName: "Last Login",
      cellRenderer: (params: any) => (
        <div className="flex items-center gap-2">
          <CiClock2 className="h-4 w-4 text-green-500" />
          <span>{params.value}</span>
        </div>
      ),
    },
    {
      field: "createdAt",
      headerName: "Created at",
      cellRenderer: (params: any) => (
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="h-4 w-4 text-green-500" />
          <span>{params.value}</span>
        </div>
      ),
    },
    {
      field: "email",
      headerName: "Email",
      cellRenderer: (params: any) => (
        <div className="flex items-center gap-2">
          <CiMail className="h-4 w-4 text-blue-500" />
          <span>{params.value}</span>
        </div>
      ),
    },
    {
      headerName: "Action",
      cellRenderer: () => (
        <button className="text-gray-400 hover:text-gray-600">
          <FiMoreHorizontal className="h-5 w-5" />
        </button>
      ),
      cellStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        textAlign: "center",
      },
    },
  ];

  return <CustomTable rowData={rowData} columnDefs={columnDefs} />;
}
