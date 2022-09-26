import Image from "next/image";
import Button from "../components/atoms/Button";
import Heading from "../components/atoms/Heading";
import Paragraph from "../components/atoms/Paragraph";
import Section from "../components/atoms/Section";
import Layout from "../components/organisms/Layout";
import ArrowLeft from "../features/404/assets/arrowl.svg";
import ArrowRight from "../features/404/assets/arrowr.svg";
import bg from "../features/404/assets/bg.png";
import Block from "../features/404/components/Block";

const NotFound = () => {
  return (
    <Layout pageTitle="Not found">
      <Section className="text-center">
        <div className="absolute -z-10 -top-20 -bottom-20 w-screen left-1/2 -translate-x-1/2">
          <Image src={bg} alt="Background" layout="fill" />
        </div>
        {/* <Background className="absolute -z-10 top-0 w-screen left-1/2 -translate-x-1/2" /> */}
        <Heading level={1} className="mb-6">
          <span className="relative w-fit">
            <ArrowLeft className="hidden lg:block absolute right-full -translate-x-12 translate-y-8" />
            <ArrowRight className="hidden lg:block absolute left-full translate-x-12 translate-y-8" />
            Page <span className="text-secondary">not found</span>.
          </span>
        </Heading>
        <Paragraph size="lg">
          Don{"'"}t worry though. We{"'"}ll figure it out
        </Paragraph>
      </Section>
      <Section>
        <div className="flex flex-col lg:flex-row gap-y-36 items-center lg:items-start lg:justify-around">
          <Block
            heading="If you are lost..."
            text="Go home. If you believe there is a bug, contact me."
            buttonComponent={
              <Button to="/" contentOnly={true} variant="secondary" size="md">
                Home
              </Button>
            }
          />
          <Block
            heading="If short link isn't working..."
            text="It it's yours go to your dashboard. If it's not, let the owner know about this problem"
            buttonComponent={
              <Button
                to="/dashboard"
                contentOnly={true}
                variant="secondary"
                size="md"
              >
                Dashboard
              </Button>
            }
          />
        </div>
      </Section>
    </Layout>
  );
};

export default NotFound;
