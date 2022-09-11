import classNames from "classnames";
import React, { FC } from "react";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading: FC<Props> = ({ children, level, className, ...props }) => {
  const HeadingTag = `h${level}` as const;

  return (
    <HeadingTag className={classNames("font-bold", className)} {...props}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
