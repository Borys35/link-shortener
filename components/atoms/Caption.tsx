import classNames from "classnames";
import { FC } from "react";

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

const Caption: FC<Props> = ({ children, className, ...props }) => {
  return (
    <span
      className={classNames("text-sm opacity-60 font-bold", className)}
      {...props}
    >
      {children}
    </span>
  );
};

export default Caption;
