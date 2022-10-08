import classNames from "classnames";
import { FC } from "react";

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  asLabel?: boolean;
}

const Caption: FC<Props> = ({
  children,
  className,
  asLabel = false,
  ...props
}) => {
  const Tag = !asLabel ? "span" : "label";
  return (
    <Tag
      className={classNames("text-sm opacity-60 font-bold", className)}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Caption;
