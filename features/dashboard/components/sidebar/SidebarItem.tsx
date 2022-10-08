import classNames from "classnames";
import React, { FC } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  tooltip: string;
}

const SidebarItem: FC<Props> = ({ children, tooltip, className, ...props }) => {
  return (
    <div className={classNames("group relative", className)} {...props}>
      {children}
      <span
        className={`absolute left-full bottom-1/3 w-max px-3 py-1.5 text-sm rounded-lg rounded-bl-none bg-text text-bg-50 translate-x-1 opacity-0
                    origin-left transition-all group-hover:opacity-100 group-hover:translate-x-3`}
      >
        {tooltip}
      </span>
    </div>
  );
};

export default SidebarItem;
