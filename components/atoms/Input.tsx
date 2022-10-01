import classNames from "classnames";
import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }, ref) => {
    const { readOnly } = props;

    return (
      <input
        ref={ref}
        className={classNames(
          className,
          { "cursor-default": readOnly },
          "px-6 py-3 box focus-visible:outline-none focus-visible:shadow-xl transition-shadow"
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
