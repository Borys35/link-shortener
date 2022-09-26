import { FC } from "react";
import Heading from "../../../components/atoms/Heading";
import Paragraph from "../../../components/atoms/Paragraph";

interface Props {
  heading: string;
  text: string;
  buttonComponent: JSX.Element;
}

const Block: FC<Props> = ({ heading, text, buttonComponent }) => {
  return (
    <div className="md:w-96 text-center">
      <Heading level={4} className="mb-5">
        {heading}
      </Heading>
      <Paragraph size="md" className="mb-5 lg:mb-10">
        {text}
      </Paragraph>
      {buttonComponent}
    </div>
  );
};

export default Block;
