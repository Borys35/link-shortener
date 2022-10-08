import { Click, Link } from "@prisma/client";
import classNames from "classnames";
import { FC } from "react";
import Button from "../../../../components/atoms/Button";
import Caption from "../../../../components/atoms/Caption";
import Heading from "../../../../components/atoms/Heading";
import LinkItem from "./LinkItem";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  links: (Link & { clicks: Click[] })[];
  linkIndex: number;
  isNewLinkCreating: boolean;
  onLinkChange: (i: number) => void;
  onAddClick: () => void;
}

const LinksSection: FC<Props> = ({
  links,
  linkIndex,
  isNewLinkCreating,
  onLinkChange,
  onAddClick,
  className,
  ...props
}) => {
  return (
    <div className={classNames("", className)} {...props}>
      <div className="flex justify-between items-center mb-8">
        <Heading level={5}>Links</Heading>
        <Button buttonType="add" onClick={onAddClick}>
          New
        </Button>
      </div>

      <div className="flex flex-col gap-y-4">
        <Caption>
          {links.length || "No"} link{links.length !== 1 && "s"}
        </Caption>
        {links.map((link, i) => (
          <LinkItem
            key={link.id}
            name={link.name}
            clicks={link.clicks.length}
            selected={linkIndex === i}
            onClick={() => onLinkChange(i)}
          />
        ))}
        {isNewLinkCreating && <LinkItem name="New link..." selected={true} />}
      </div>
    </div>
  );
};

export default LinksSection;
