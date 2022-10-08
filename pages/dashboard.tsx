import { Link } from "@prisma/client";
import AppLink from "next/link";
import { useState } from "react";
import Logo from "../assets/logo.svg";
import Heading from "../components/atoms/Heading";
import Layout from "../components/organisms/Layout";
import SessionStatus from "../components/organisms/SessionStatus";
import LinksSection from "../features/dashboard/components/links/LinksSection";
import OverviewSection from "../features/dashboard/components/overview/OverviewSection";

const links = [
  {
    name: "AAAA",
    id: "sfsdf",
    url: "dsfs",
    slug: "sdfsdf",
    createdAt: new Date(),
    ownerId: "dsfsdf",
    clicks: [],
  },
  {
    name: "AAAA2",
    id: "sfsdf",
    url: "dsfs",
    slug: "sdfsdf",
    createdAt: new Date(),
    ownerId: "dsfsdf",
    clicks: [],
  },
  {
    name: "AAAA3",
    id: "sfsdf",
    url: "dsfs",
    slug: "sdfsdf",
    createdAt: new Date(),
    ownerId: "dsfsdf",
    clicks: [],
  },
];

const Dashboard = () => {
  const [linkIndex, setLinkIndex] = useState(-1);
  const [newLink, setNewLink] = useState<Partial<Link> | null>(null);

  function handleChangeLink(i: number) {
    setNewLink(null);
    setLinkIndex(i);
  }

  function handleAddNewLink() {
    setLinkIndex(-1);
    setNewLink({ name: "", url: "" });
  }

  return (
    <SessionStatus when="authenticated" replacePath="/login">
      <Layout pageTitle="Dashboard" showNavbarAndFooter={false}>
        <div className="flex p-6 min-h-screen">
          <aside className="self-stretch box flex flex-col items-center py-10 px-4">
            <AppLink href="/">
              <a>
                <Logo />
              </a>
            </AppLink>
          </aside>
          <div className="flex-1 px-20 py-10">
            <Heading level={3} className="mb-24">
              Welcome to <span className="text-primary">Dashboard</span>!
            </Heading>
            <div className="grid grid-cols-3 gap-24">
              <LinksSection
                links={links}
                linkIndex={linkIndex}
                isNewLinkCreating={!!newLink}
                onLinkChange={handleChangeLink}
                onAddClick={handleAddNewLink}
              />
              <OverviewSection
                currentLink={links[linkIndex]}
                newLink={newLink}
                className="col-start-2 col-end-4"
              />
            </div>
          </div>
        </div>
      </Layout>
    </SessionStatus>
  );
};

export default Dashboard;
