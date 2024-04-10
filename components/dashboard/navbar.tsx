import { BellAlertIcon } from "@heroicons/react/24/solid";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between text-primary-foreground bg-primary px-[10%] py-4">
      <div>
        <h3>Logo</h3>
      </div>

      <Link href="/userProfile" className="flex items-center gap-2 cursor-pointer">
        <BellAlertIcon className="w-6" />
        <div className="bg-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-primary p-3">
          <h3>CA</h3>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
