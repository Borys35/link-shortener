import classNames from "classnames";
import Link from "next/link";
import { FC } from "react";

interface Props {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const NavLink: FC<Props> = ({ children, href, className }) => {
  return (
    <Link href={href}>
      <a
        className={classNames(
          `font-bold relative before:absolute before:h-0.5 before:w-full before:left-0 before:top-full
           before:bg-text before:scale-x-0 hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform`,
          className
        )}
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
