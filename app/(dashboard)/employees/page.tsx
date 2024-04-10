import Link from "next/link";
import { Payment, columns } from "../components/columns";
import { DataTable } from "../components/data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "110534",
      status: "pending",
      email: "m@example.com",
      date_of_birth: "12-03-20",
      gender: "Male",
      name: "John Doe",
      nationality: "Nigerian",
      role: "Nurse",
    },
    {
      id: "110548", 
      status: "pending",
      email: "m@example.com",
      date_of_birth: "04-10-99",
      gender: "Female",
      name: "Diana Fox",
      nationality: "Nigerian",
      role: "receptionist",
    },
    {
      id: "411745", 
      status: "pending",
      email: "kelvin.victorson@example.com",
      date_of_birth: "31-01-970",
      gender: "Male",
      name: "Kelvin Victorson",
      nationality: "Nigerian",
      role: "Doctor",
    },
    // ...
  ];
}

const Page = async () => {
  const data = await getData();

  return (
    <div className="flex flex-col gap-6">
      <header className="flex items-start justify-between">
        <div>
          <h2 className="page-title">Employees</h2>
          <p className="tagline">Manage Your employees here</p>
        </div>
        <Link
          href="/newEmployee"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
        >
          + Add New
        </Link>
      </header>

      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Page;
