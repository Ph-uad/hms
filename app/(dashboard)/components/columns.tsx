"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string; 
  name: string;
  date_of_birth: string;
  role: string;
  gender: "Female" | "Male" | "Other";
  status: "pending" | "processing" | "success" | "failed";
  nationality: string;
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <ArrowUpDown className="ml-2 h-4 w-4" />
          Name
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="flex flex-col">
        <p>{row.getValue("name")}</p>
        <span className="opacity-75 text-xs">{row.getValue("email")}</span>
      </div>
    ),
  },
  {
    accessorKey: "date_of_birth",
    header: "Date Of Birth",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "nationality",
    header: "Nationility",
  },
  {
    accessorKey: "email",
    header: () => null,
    cell: () => null,
  },
  {
    accessorKey: "action",
    header: () => null,
    cell: ({row}) => <Link href="/userProfile" className="bg-inherit font-bold text-black" onClick={() => console.log("For ID",row.getAllCells())}>View</Link>,
  },
];
