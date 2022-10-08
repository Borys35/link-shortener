import classNames from "classnames";
import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "inset";
  inputSize?: "default" | "large";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { variant = "default", inputSize = "default", className, ...props },
    ref
  ) => {
    const { readOnly } = props;

    return (
      <input
        ref={ref}
        className={classNames(
          { "cursor-default": readOnly },
          { "bg-bg-50": variant === "default" },
          { "bg-bg-100": variant === "inset" },
          { "px-5 py-2": inputSize === "default" },
          { "px-6 py-4": inputSize === "large" },
          "rounded-lg focus-visible:outline-none border-2 border-bg-200 hover:border-bg-300 focus-visible:border-bg-400",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
