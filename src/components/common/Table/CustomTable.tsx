// CustomBlockedPlayerTable.tsx
import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ColDef } from "ag-grid-community";

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

interface CustomBlockedPlayerTableProps {
  rowData: RowData[];
  columnDefs: ColDef<RowData>[];
}

const CustomTable: React.FC<CustomBlockedPlayerTableProps> = ({
  rowData,
  columnDefs,
}) => {
  return (
    <div className="ag-theme-alpine-dark h-[400px] w-full dark:bg-[#1a1a2e] dark:text-white">
      <style jsx global>{`
        .ag-theme-alpine-dark {
          --ag-background-color: #ffffff;
          --ag-header-background-color: #f1f5f9;
          --ag-header-foreground-color: #000;
          --ag-foreground-color: #111827;
          --ag-border-color: #d1d5db;
        }
        .dark .ag-theme-alpine-dark {
          --ag-background-color: #1a1a2e;
          --ag-header-background-color: #333;
          --ag-header-foreground-color: #ffffff;
          --ag-foreground-color: #d1d5db;
          --ag-border-color: #444;
        }
        .ag-theme-alpine-dark .ag-header-cell,
        .ag-theme-alpine-dark .ag-cell {
          padding: 6px 8px;
          border-bottom: 1px solid var(--ag-border-color);
          font-weight: bold;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ag-theme-alpine-dark .ag-body-viewport,
        .ag-theme-alpine-dark .ag-body-horizontal-scroll-viewport,
        .ag-theme-alpine-dark .ag-body-vertical-scroll-viewport {
          overflow: hidden !important;
        }
        .ag-theme-alpine-dark .ag-row {
          min-height: 30px;
          background-color: var(--ag-background-color);
        }
      `}</style>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={{
          sortable: true,
          filter: true,
          resizable: true,
          cellStyle: {
            display: "flex",
            alignItems: "left",
            justifyContent: "left",
            fontWeight: "bold",
            textAlign: "left",
          },
        }}
        animateRows={true}
      />
    </div>
  );
};

export default CustomTable;
