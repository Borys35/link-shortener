import type { NextPage } from "next";
import Image from "next/image";
import Button from "../components/atoms/Button";
import Heading from "../components/atoms/Heading";
import Paragraph from "../components/atoms/Paragraph";
import Section from "../components/atoms/Section";
import Layout from "../components/organisms/Layout";
import Arrow from "../features/home/assets/arrow.svg";
import graph from "../features/home/assets/graph.jpg";
import hero from "../features/home/assets/hero.jpg";
import ShorteningForm from "../features/home/components/ShorteningForm";

const Home: NextPage = () => {
  return (
    <Layout pageTitle="Home">
      <header>
        <Section>
          <div className="md:w-1/2">
            <Heading level={1} className="mb-8">
              Shorten <span className="text-primary">ANY</span> link you want!
            </Heading>
            <Paragraph size="lg" className="mb-16">
              Shorten any link or sign up and get info about traffic of your
              short urls.
            </Paragraph>
            <Button contentOnly={true} variant="secondary" size="xl">
              Learn more
            </Button>
          </div>

          <div className="-z-10 absolute -top-20 right-0 bottom-0 lg:bottom-auto w-7/12">
            <Image
              src={hero}
              alt="Hero"
              className="opacity-20 mix-blend-luminosity"
            />
            <div className="hidden lg:block absolute bg-secondary mix-blend-multiply rounded-3xl top-1/2 bottom-0 md:-bottom-12 right-12 w-7/12"></div>
          </div>
        </Section>
      </header>
      <Section>
        <div className="relative w-fit">
          <Heading level={2} className="mb-8">
            Try <span className="text-primary">NOW</span>!
          </Heading>
          <Arrow className="absolute hidden lg:block pointer-events-none -top-16 left-full translate-x-6" />
        </div>
        <Paragraph size="lg" className="mb-16">
          Paste link and check how it works!
        </Paragraph>
        <ShorteningForm />
      </Section>
      <Section>
        <div className="-z-10 absolute top-0 right-0 left-0 lg:left-8 h-3/4">
          <Image
            src={graph}
            alt="Graph"
            layout="fill"
            objectFit="cover"
            className="opacity-10 mix-blend-luminosity"
          />
        </div>
        <div className="flex gap-16">
          <div className="hidden lg:block">
            <div className="bg-secondary mix-blend-multiply rounded-3xl w-64 h-full -ml-8 mt-8"></div>
          </div>
          <div className="max-w-md">
            <Heading level={2} className="mb-8">
              <span className="text-primary">Analyze</span> your links
            </Heading>
            <Paragraph size="lg" className="mb-16">
              Receive data and analytics of your short links.
            </Paragraph>
            <Button contentOnly={true} variant="secondary" size="xl">
              Create account
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Home;
