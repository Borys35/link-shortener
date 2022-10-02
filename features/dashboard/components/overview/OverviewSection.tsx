import { Link } from "@prisma/client";
import classNames from "classnames";
import { FC } from "react";
import Heading from "../../../../components/atoms/Heading";
import OverviewGeneral from "./OverviewGeneral";
import OverviewStats from "./OverviewStats";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  currentLink?: Link;
}

const OverviewSection: FC<Props> = ({ currentLink, className, ...props }) => {
  return (
    <div className={classNames("", className)} {...props}>
      {currentLink ? (
        <div className="flex flex-col gap-12">
          <OverviewGeneral currentLink={currentLink} />
          <OverviewStats currentLink={currentLink as any} />
        </div>
      ) : (
        <Heading level={5}>There is no link selected.</Heading>
      )}
    </div>
  );
};

export default OverviewSection;
