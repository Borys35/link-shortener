import { Link } from "@prisma/client";
import classNames from "classnames";
import { FC } from "react";
import Heading from "../../../../components/atoms/Heading";
import NewLinkForm, { NewLinkInputs } from "./NewLinkForm";
import OverviewGeneral from "./OverviewGeneral";
import OverviewStats from "./OverviewStats";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  currentLink?: Link;
  newLink?: Partial<Link> | null;
  onCreateClick: (data: NewLinkInputs) => void;
}

const OverviewSection: FC<Props> = ({
  currentLink,
  newLink,
  onCreateClick,
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
        <NewLinkForm onCreateClick={onCreateClick} />
      ) : (
        <Heading level={5}>There is no link selected.</Heading>
      )}
    </div>
  );
};

export default OverviewSection;
