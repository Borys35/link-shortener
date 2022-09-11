import classNames from "classnames";
import React, { FC } from "react";

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const Paragraph: FC<Props> = ({ children, className, ...props }) => {
  return (
    <p className={classNames(className)} {...props}>
      {children}
    </p>
  );
};

export default Paragraph;
