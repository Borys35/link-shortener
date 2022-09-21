import classNames from "classnames";
import React, { FC } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<Props> = ({ className, ...props }) => {
  return (
    <input
      className={classNames(
        className,
        "px-6 py-3 box focus-visible:outline-none focus-visible:shadow-xl transition-shadow"
      )}
      {...props}
    />
  );
};

export default Input;
