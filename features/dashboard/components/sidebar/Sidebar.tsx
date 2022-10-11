import classNames from "classnames";
import { signOut } from "next-auth/react";
import AppLink from "next/link";
import { useState } from "react";
import Logo from "../../../../assets/logo.svg";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  function handleToggle() {
    setOpen(!open);
  }

  function handleSignOut() {
    signOut();
  }

  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={classNames(
          "block md:hidden w-6 h-6 absolute z-30 -translate-x-1/2 -translate-y-1/2 cursor-pointer",
          { "rotate-180": open }
        )}
        onClick={handleToggle}
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
          clipRule="evenodd"
        />
      </svg>

      <aside
        className={classNames(
          "fixed top-6 bottom-6 box md:flex flex-col items-center justify-between py-10 px-4 z-20",
          { flex: open },
          { hidden: !open }
        )}
      >
        <AppLink href="/">
          <a>
            <Logo />
          </a>
        </AppLink>
        <div>
          <SidebarItem tooltip="Sign out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
              onClick={handleSignOut}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
          </SidebarItem>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
