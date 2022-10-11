import classNames from "classnames";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../assets/logo-with-name.svg";
import Button from "../atoms/Button";
import NavLink from "../atoms/NavLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { status, data: session } = useSession();

  function handleToggle() {
    setOpen(!open);
  }

  return (
    <nav className="content flex items-center justify-between my-6 lg:my-2 w-full">
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <div
        className={classNames(
          {
            "absolute z-10 p-4 gap-y-4 border-2 border-bg-200 flex flex-col top-16 right-8 items-end":
              open,
          },
          { hidden: !open },
          "lg:static lg:flex lg:flex-row bg-bg-100 lg:py-4 lg:border-none lg:px-10 rounded-lg lg:items-center gap-x-8"
        )}
      >
        <NavLink href="/">Home</NavLink>
        <NavLink href="mailto:boryskac10@gmail.com">Contact</NavLink>
        {status === "authenticated" ? (
          <>
            <Button to="/dashboard" className="lg:ml-12">
              Dashboard
            </Button>
          </>
        ) : status === "unauthenticated" ? (
          <>
            <Button to="/login" variant="secondary" className="lg:ml-12">
              Login
            </Button>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="lg:hidden cursor-pointer" onClick={handleToggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
