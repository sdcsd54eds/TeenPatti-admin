// import * as React from "react";
// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import DashboardCard1 from "./DashboardCard1";
// import { FaGamepad, FaHeart, FaStore } from "react-icons/fa6";
// import { BsFillHandbagFill } from "react-icons/bs";

// export default function DashboardTable() {
//

//   return (
//     <>
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 2xl:gap-8">
//         <DashboardCard1 className="bg-[#605CFF4D]" title="Players" total="178+">
//           <FaHeart className="h-5 w-5 text-[#6254FF]" />
//         </DashboardCard1>

//         <DashboardCard1
//           className="bg-[#2FE5A74D]"
//           title="Teen Patti"
//           total="20+"
//         >
//           <FaGamepad className="h-6 w-6 text-[#2FE5A7]" />
//         </DashboardCard1>

//         <DashboardCard1 className="bg-[#FF69B44D]" title="Ludo" total="90+">
//           <BsFillHandbagFill className="h-5 w-5 text-[#FF69B4]" />
//         </DashboardCard1>

//         <DashboardCard1 className="bg-[#605CFF4D]" title="Rummy" total="12+">
//           <FaStore className="h-5 w-5 text-white" />
//         </DashboardCard1>
//       </div>
//       <div className="my-8">
//         <h2 className="ps-5.5 text-2xl font-bold dark:text-white">
//           Table Lists
//         </h2>
//       </div>
//       <Paper sx={{ width: "100%" }}>
//         <TableContainer sx={{ maxHeight: 400 }}>
//           <Table stickyHeader aria-label="sticky table">
//             <TableHead>
//               <TableRow>
//                 {columns.map((column) => (
//                   <TableCell
//                     key={column.id}
//                     align={column.align}
//                     className="bg-gray-200"
//                     sx={{
//                       backgroundColor: "#c7c7c7",
//                       fontWeight: "bold",
//                       color: "#333",
//                     }}
//                     style={{ top: 0, minWidth: column.minWidth }}
//                   >
//                     {column.label}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {rows
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((row) => {
//                   return (
//                     <TableRow
//                       hover
//                       role="checkbox"
//                       tabIndex={-1}
//                       key={row.name}
//                     >
//                       {columns.map((column) => {
//                         const value = row[column.id];
//                         return (
//                           <TableCell key={column.id} align={column.align}>
//                             {value}
//                           </TableCell>
//                         );
//                       })}
//                     </TableRow>
//                   );
//                 })}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[10, 25, 100]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>
//     </>
//   );
// }

"use client";
import React from "react";
import { FaGamepad, FaHeart, FaStore } from "react-icons/fa6";
import { BsFillHandbagFill } from "react-icons/bs";
import DashboardCard1 from "./DashboardCard1";
import DashboardCard2 from "./DashboardCard2";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

interface Column {
  id: "name" | "price" | "invoiceDate" | "status";
  label: string;
  minWidth?: number;
  align?: "left" | "center" | "right";
  format?: (value: any) => string;
}

const columns: Column[] = [
  { id: "name", label: "Name", minWidth: 100, align: "center" },
  { id: "price", label: "Price", minWidth: 100, align: "center" },
  { id: "invoiceDate", label: "Invoice Date", minWidth: 150, align: "center" },
  { id: "status", label: "Status", minWidth: 100, align: "center" },
];

interface Data {
  name: number;
  price: number;
  invoiceDate: string;
  status: string;
}

function createData(
  name: number,
  price: number,
  invoiceDate: string,
  status: string,
): Data {
  return { name, price, invoiceDate, status };
}

const rows = [
  createData(50, 0.0, "Jan 13, 2023", "Paid"),
  createData(50, 59.0, "Jan 13, 2023", "Paid"),
  createData(50, 59.0, "Jan 13, 2023", "Paid"),
  createData(50, 59.0, "Jan 13, 2023", "Paid"),
  createData(50, 59.0, "Jan 13, 2023", "Paid"),
  createData(50, 99.0, "Jan 13, 2023", "Unpaid"),
  createData(50, 59.0, "Jan 13, 2023", "Pending"),
];

const DashboardTable: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 2xl:gap-8">
        <div className="grid">
          <DashboardCard1
            className="bg-[#605CFF4D]"
            title="Players"
            total="178+"
          >
            <FaHeart className="h-5 w-5 text-[#6254FF]" />
          </DashboardCard1>
          <div className="mt-4">
            <DashboardCard2 />
          </div>
        </div>
        <div className="grid">
          <DashboardCard1
            className="bg-[#2FE5A74D]"
            title="Teen Patti"
            total="20+"
          >
            <FaGamepad className="h-6 w-6 text-[#2FE5A7]" />
          </DashboardCard1>
          <div className="mt-4">
            <DashboardCard2 />
          </div>
        </div>
        <div className="grid">
          <DashboardCard1 className="bg-[#FF69B44D]" title="Ludo" total="90+">
            <BsFillHandbagFill className="h-5 w-5 text-[#FF69B4]" />
          </DashboardCard1>
          <div className="mt-4">
            <DashboardCard2 />
          </div>
        </div>

        <div className="grid">
          <DashboardCard1 className="bg-[#605CFF4D]" title="Rummy" total="12+">
            <FaStore className="h-5 w-5 text-white" />
          </DashboardCard1>
          <div className="mt-4">
            <DashboardCard2 />
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-6 2xl:gap-8">
        <div className="my-4">
          <h2 className="ps-5.5 text-2xl font-bold dark:text-white">
            Table Lists
          </h2>
        </div>
        <Paper sx={{ width: "100%" }}>
          <TableContainer sx={{ maxHeight: 400 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      className="bg-gray-200"
                      sx={{
                        backgroundColor: "#c7c7c7",
                        fontWeight: "bold",
                        color: "#333",
                      }}
                      style={{ top: 0, minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.name}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </>
  );
};

export default DashboardTable;
