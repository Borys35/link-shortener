import { Link } from "@prisma/client";
import classNames from "classnames";
import { FC } from "react";
import Heading from "../../../../components/atoms/Heading";
import NewLinkForm from "./NewLinkForm";
import OverviewGeneral from "./OverviewGeneral";
import OverviewStats from "./OverviewStats";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  currentLink?: Link;
  newLink?: Partial<Link> | null;
}

const OverviewSection: FC<Props> = ({
  currentLink,
  newLink,
  className,
  ...props
}) => {
  return (
    <div className={classNames("", className)} {...props}>
      {currentLink ? (
        <div className="flex flex-col gap-12">
          <OverviewGeneral currentLink={currentLink} />
          <OverviewStats currentLink={currentLink as any} />
        </div>
      ) : newLink ? (
        <NewLinkForm />
      ) : (
        <Heading level={5}>There is no link selected.</Heading>
      )}
    </div>
  );
};

export default OverviewSection;
