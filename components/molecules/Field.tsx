import classNames from "classnames";
import { FC } from "react";
import { FieldError } from "react-hook-form";
import Caption from "../atoms/Caption";
import Input, { InputProps } from "../atoms/Input";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  inputProps?: InputProps & React.RefAttributes<HTMLInputElement>;
  error?: FieldError;
}

const Field: FC<Props> = ({
  label,
  inputProps,
  error,
  className,
  ...props
}) => {
  return (
    <div
      className={classNames("flex flex-col gap-y-0.5", className)}
      {...props}
    >
      <Caption asLabel>{label}</Caption>
      <Input {...inputProps} />
      {error && (
        <span className="font-bold text-red-600 text-sm">{error.message}</span>
      )}
    </div>
  );
};

export default Field;
