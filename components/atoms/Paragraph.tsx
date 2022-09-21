import classNames from "classnames";
import React, { FC } from "react";

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

const Paragraph: FC<Props> = ({
  children,
  className,
  size = "sm",
  ...props
}) => {
  return (
    <p
      className={classNames(
        className,
        { "text-sm": size === "sm" },
        { "text-base": size === "md" },
        { "text-lg": size === "lg" }
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;
