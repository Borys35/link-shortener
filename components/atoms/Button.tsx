import classNames from "classnames";
import Link from "next/link";
import React, { FC } from "react";

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  to?: string;
  href?: string;
  toNewPage?: boolean;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg" | "xl";
  contentOnly?: boolean;
  buttonType?: "click" | "add";
}

const Arrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 ml-5 group-hover:translate-x-2 transition-transform"
  >
    <path
      fillRule="evenodd"
      d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

const Plus = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 mr-2 group-hover:rotate-90 group-hover:scale-125 transition-transform"
  >
    <path
      fillRule="evenodd"
      d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
      clipRule="evenodd"
    />
  </svg>
);

const Button: FC<Props> = ({
  children,
  to,
  href,
  toNewPage,
  disabled = false,
  variant = "primary",
  contentOnly = false,
  buttonType = "click",
  size = "sm",
  className,
  ...props
}) => {
  const classes = classNames(
    "font-bold group inline-block",
    { "text-primary": variant === "primary" },
    { "text-secondary": variant === "secondary" },
    { "text-base": size === "sm" },
    { "text-lg": size === "md" },
    { "text-xl": size === "lg" },
    { "text-2xl": size === "xl" },
    {
      "px-4 py-2 rounded-lg bg-primary-light hover:bg-primary-hover":
        contentOnly === false,
    },
    {
      "bg-secondary-light hover:bg-secondary-hover":
        contentOnly === false && variant === "secondary",
    },
    className
  );
  const content = (
    <span className="flex items-center">
      {buttonType === "add" && <Plus />}
      {children}
      {buttonType === "click" && <Arrow />}
    </span>
  );

  if (to)
    return (
      <Link href={to} {...props}>
        <a className={classes}>{content}</a>
      </Link>
    );

  if (href) {
    if (toNewPage)
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noreferrer"
          {...props}
        >
          {content}
        </a>
      );
    else
      return (
        <a href={href} className={classes} {...props}>
          {content}
        </a>
      );
  }

  return (
    <button className={classes} disabled={disabled} {...props}>
      {content}
    </button>
  );
};

export default Button;
