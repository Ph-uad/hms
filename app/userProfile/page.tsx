"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Edit2Icon } from "lucide-react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div>
      <nav>
        <h2 className="page-title">Profile</h2>
        <p className="tagline text-xs my-2">Employee Profile</p>

        <button className="mt-6" onClick={() => router.back()}>
          <ArrowLeft />
        </button>
        <hr />
      </nav>
      <main className=" m-auto max-w-6xl p-4 border border-gray-500 rounded-lg flex flex-col gap-14">
        <header className="flex justify-between items-center border-b border-gray-600 py-4">
          <h3>General information</h3>

          <button>
            <Edit2Icon className="text-black inline " />
            <span className="px-2">Edit</span>
          </button>
        </header>

        <section>
          <div className="flex flex-col md:flex-row gap-24">
            <figure className="self-start bg-red-100 min-w-32 max-w-6xl aspect-square rounded-full overflow-hidden">
              <img
                src=""
                className="bg-green-500 h-ful w-full object-cover"
                alt="Display Picture"
              />
            </figure>

            <ul className="list-none grid grid-cols-2 gap-4">
              <li>
                <h5 className="tagline text-xs my-2">First Name</h5>
                <h4>Serena</h4>
              </li>
              <li>
                <h5 className="tagline text-xs my-2">Last Name</h5>
                <h4>Saliba</h4>
              </li>
              <li>
                <h5 className="tagline text-xs my-2">Date of Birth </h5>
                <h4>26-08-1989</h4>
              </li>
              <li>
                <h5 className="tagline text-xs my-2">Gender</h5>
                <h4>Female</h4>
              </li>

              <li>
                <h5 className="tagline text-xs my-2">Email</h5>
                <h4>ssaliba@workspace.com</h4>
              </li>
              <li>
                <h5 className="tagline text-xs my-2">Phone Number</h5>
                <h4>+44 5674 45333</h4>
              </li>
              <li>
                <h5 className="tagline text-xs my-2">Nationlity </h5>
                <h4>United Kingdom</h4>
              </li>
              <li>
                <h5 className="tagline text-xs my-2">Address</h5>
                <h4>204 Park avenue swansea sa47 4tq</h4>
              </li>
            </ul>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <header className="flex flex-col gap-2 justify-between">
            <h3>Work Experience</h3>
            <hr className="inline-block min-w-[100%]" />
          </header>

          <ul className="list-none grid grid-cols-2 gap-4">
            <li>
              <h5 className="tagline text-xs my-2">Id Number</h5>
              <h4>1109863</h4>
            </li>
            <li>
              <h5 className="tagline text-xs my-2">Role</h5>
              <h4>Nurse</h4>
            </li>
          </ul>

          <header className="flex items-center gap-2 justify-between">
            <p className="inline-block text-sm opacity-75 w-fit">
              Previous Training
            </p>
            <hr className="inline-block min-w-[85%]" />
          </header>

          <ul className="list-none grid grid-cols-2 gap-4">
            <li>
              <h5 className="tagline text-xs my-2">Training</h5>
              <h4>Proffessional Nurse Certification Training</h4>
            </li>
            <li>
              <h5 className="tagline text-xs my-2">First Date</h5>
              <h4>04-07-23</h4>
            </li>
          </ul>

          <header className="flex items-center gap-2 justify-between">
            <p className="inline-block text-sm opacity-75 w-fit">
              DBS information
            </p>
            <hr className="inline-block min-w-[85%]" />
          </header>

          <ul className="list-none grid grid-cols-2 gap-4">
            <li>
              <h5 className="tagline text-xs my-2">DBS Number</h5>
              <h4>860483508520820</h4>
            </li>
            <li>
              <h5 className="tagline text-xs my-2">Update ID Number</h5>
              <h4>860587509</h4>
            </li>
          </ul>
        </section>

        <section>
          <header className="flex flex-col justify-between py-4">
            <p className="inline-block text-sm opacity-75 w-fit">Credentials</p>
            <hr className="inline-block min-w-[100%]" />
          </header>

          <div className="list-none grid grid-cols-2 gap-4">
            <h4>CV</h4>
            <Button variant="ghost" className="w-fit font-bold underline">
              View
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;
