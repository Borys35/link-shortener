import classNames from "classnames";
import React, { FC } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Section: FC<Props> = ({ children, className, ...props }) => {
  return (
    <section
      className={classNames("max-w-7xl mx-auto px-8 lg:px-12 py-24", className)}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
