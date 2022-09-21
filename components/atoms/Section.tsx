import classNames from "classnames";
import React, { FC } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Section: FC<Props> = ({ children, className, ...props }) => {
  return (
    <section
      className={classNames("content py-32 relative", className)}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
