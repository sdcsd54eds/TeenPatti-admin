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
    <div className="ag-theme-alpine-dark h-[400px] w-full bg-[#1a1a2e] text-white">
      <style jsx global>{`
        .ag-theme-alpine-dark {
          --ag-background-color: #1a1a2e;
          --ag-header-background-color: #33334d;
          --ag-odd-row-background-color: #25253d;
          --ag-header-foreground-color: #f1f1f1;
          --ag-foreground-color: #f1f1f1;
          --ag-row-hover-color: #3a3a5a;
          --ag-border-color: #555;
        }
        .ag-theme-alpine-dark .ag-header-cell,
        .ag-theme-alpine-dark .ag-cell {
          padding: 6px 8px;
          border-bottom: 1px solid #333;
        }
        .ag-theme-alpine-dark .ag-row {
          min-height: 30px;
          padding: 0;
        }
      `}</style>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={{
          sortable: true,
          filter: true,
          resizable: true,
        }}
        animateRows={true}
      />
    </div>
  );
};

export default CustomTable;
