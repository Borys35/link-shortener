import { signOut } from "next-auth/react";
import AppLink from "next/link";
import Logo from "../../../../assets/logo.svg";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  function handleSignOut() {
    signOut();
  }

  return (
    <aside className="fixed top-6 bottom-6 box flex flex-col items-center justify-between py-10 px-4">
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
  );
};

export default Sidebar;
