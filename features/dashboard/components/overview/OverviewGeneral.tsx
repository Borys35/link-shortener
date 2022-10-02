import { Link } from "@prisma/client";
import { FC } from "react";
import Caption from "../../../../components/atoms/Caption";
import Heading from "../../../../components/atoms/Heading";
import { slugToUrl } from "../../../../utils/slugToUrl";

interface Props {
  currentLink: Link;
}

const OverviewGeneral: FC<Props> = ({ currentLink }) => {
  const { name, createdAt, url, slug } = currentLink;

  return (
    <div>
      <Heading level={5} className="mb-8">
        Overview
      </Heading>
      <div className="box px-8 py-5 mb-4">
        <Heading level={4} className="mb-2">
          {name}
        </Heading>
        <span className="text-sm text-secondary">
          {new Intl.DateTimeFormat("en", {
            dateStyle: "full",
            timeStyle: "long",
          }).format(createdAt)}
        </span>
      </div>
      <div className="box px-8 py-5">
        <div className="mb-5">
          <Caption className="block mb-1">Short link</Caption>
          <a href={slugToUrl(slug)} className="text-lg underline">
            {slugToUrl(slug)}
          </a>
        </div>
        <div>
          <Caption className="block mb-1">Destination</Caption>
          <a href={`${url}`} className="text-lg underline">
            {url}
          </a>
        </div>
      </div>
    </div>
  );
};

export default OverviewGeneral;
