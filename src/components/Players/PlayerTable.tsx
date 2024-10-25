"use client";
import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ColDef } from "ag-grid-community";
import "./customAgGrid.css"; // Import your custom CSS

// Define a type for your row data
interface RowData {
  invoiceId: string;
  name: string;
  email: string;
  date: string;
  loginType: string;
  version: string;
  lastLogin: string;
  createdAt: string;
  avatar: string;
}

const AdGridTable: React.FC = () => {
  const rowData: RowData[] = [
    {
      invoiceId: "#876369",
      name: "Arrora Gaur",
      email: "Arrora@gmail.com",
      date: "12 Dec, 2020",
      loginType: "Guest",
      version: "1.0",
      lastLogin: "12 Dec, 2020",
      createdAt: "12 Dec, 2020",
      avatar: "https://i.pravatar.cc/50?img=1",
    },
    {
      invoiceId: "#876369",
      name: "James",
      email: "James@gmail.com",
      date: "11 Dec, 2020",
      loginType: "Facebook",
      version: "1.0",
      lastLogin: "12 Dec, 2020",
      createdAt: "12 Dec, 2020",
      avatar: "https://i.pravatar.cc/50?img=2",
    },
    {
      invoiceId: "#876369",
      name: "Robert Bacins",
      email: "Robert@gmail.com",
      date: "13 Dec, 2020",
      loginType: "Google",
      version: "3.0",
      lastLogin: "12 Dec, 2020",
      createdAt: "12 Dec, 2020",
      avatar: "https://i.pravatar.cc/50?img=3",
    },
    {
      invoiceId: "#876369",
      name: "Bethany Jackson",
      email: "Bethany@gmail.com",
      date: "14 Dec, 2020",
      loginType: "Guest",
      version: "2.0",
      lastLogin: "12 Dec, 2020",
      createdAt: "12 Dec, 2020",
      avatar: "https://i.pravatar.cc/50?img=4",
    },
    {
      invoiceId: "#876369",
      name: "Arrora Gaur",
      email: "Arrora@gmail.com",
      date: "12 Dec, 2020",
      loginType: "Guest",
      version: "1.0",
      lastLogin: "12 Dec, 2020",
      createdAt: "12 Dec, 2020",
      avatar: "https://i.pravatar.cc/50?img=1",
    },
    {
      invoiceId: "#876369",
      name: "James",
      email: "James@gmail.com",
      date: "11 Dec, 2020",
      loginType: "Facebook",
      version: "1.0",
      lastLogin: "12 Dec, 2020",
      createdAt: "12 Dec, 2020",
      avatar: "https://i.pravatar.cc/50?img=2",
    },
    {
      invoiceId: "#876369",
      name: "Robert Bacins",
      email: "Robert@gmail.com",
      date: "13 Dec, 2020",
      loginType: "Google",
      version: "3.0",
      lastLogin: "12 Dec, 2020",
      createdAt: "12 Dec, 2020",
      avatar: "https://i.pravatar.cc/50?img=3",
    },
    {
      invoiceId: "#876369",
      name: "Bethany Jackson",
      email: "Bethany@gmail.com",
      date: "14 Dec, 2020",
      loginType: "Guest",
      version: "2.0",
      lastLogin: "12 Dec, 2020",
      createdAt: "12 Dec, 2020",
      avatar: "https://i.pravatar.cc/50?img=4",
    },
    {
      invoiceId: "#876369",
      name: "Arrora Gaur",
      email: "Arrora@gmail.com",
      date: "12 Dec, 2020",
      loginType: "Guest",
      version: "1.0",
      lastLogin: "12 Dec, 2020",
      createdAt: "12 Dec, 2020",
      avatar: "https://i.pravatar.cc/50?img=1",
    },
    {
      invoiceId: "#876369",
      name: "James",
      email: "James@gmail.com",
      date: "11 Dec, 2020",
      loginType: "Facebook",
      version: "1.0",
      lastLogin: "12 Dec, 2020",
      createdAt: "12 Dec, 2020",
      avatar: "https://i.pravatar.cc/50?img=2",
    },
    {
      invoiceId: "#876369",
      name: "Robert Bacins",
      email: "Robert@gmail.com",
      date: "13 Dec, 2020",
      loginType: "Google",
      version: "3.0",
      lastLogin: "12 Dec, 2020",
      createdAt: "12 Dec, 2020",
      avatar: "https://i.pravatar.cc/50?img=3",
    },
    {
      invoiceId: "#876369",
      name: "Bethany Jackson",
      email: "Bethany@gmail.com",
      date: "14 Dec, 2020",
      loginType: "Guest",
      version: "2.0",
      lastLogin: "12 Dec, 2020",
      createdAt: "12 Dec, 2020",
      avatar: "https://i.pravatar.cc/50?img=4",
    },
  ];

  const columnDefs: Array<ColDef<RowData>> = [
    { field: "invoiceId", headerName: "Invoice ID" },
    {
      field: "name",
      headerName: "Name",
      cellRenderer: (params: any) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={params.data.avatar}
            alt="avatar"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />
          {params.value}
        </div>
      ),
    },
    { field: "email", headerName: "Email" },
    { field: "date", headerName: "Date" },
    { field: "loginType", headerName: "Login Type" },
    { field: "version", headerName: "Version" },
    { field: "lastLogin", headerName: "Last Login" },
    { field: "createdAt", headerName: "Created At" },
  ];

  return (
    <div
      className={`ag-theme-alpine overflow-auto ${true ? "dark:bg-form-input dark:text-white" : "bg-white text-black"}`}
      style={{ height: 400, width: "100%" }}
    >
      <AgGridReact<RowData> rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
};

export default AdGridTable;
