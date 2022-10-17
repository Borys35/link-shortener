import { Link } from "@prisma/client";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import Loading from "../assets/loading.svg";
import Heading from "../components/atoms/Heading";
import Layout from "../components/organisms/Layout";
import SessionStatus from "../components/organisms/SessionStatus";
import LinksSection from "../features/dashboard/components/links/LinksSection";
import { NewLinkInputs } from "../features/dashboard/components/overview/NewLinkForm";
import OverviewSection from "../features/dashboard/components/overview/OverviewSection";
import Sidebar from "../features/dashboard/components/sidebar/Sidebar";
import { createLink, getAllLinks } from "../lib/api";

const Dashboard = () => {
  const [linkIndex, setLinkIndex] = useState(-1);
  const [newLink, setNewLink] = useState<Partial<Link> | null>(null);

  const queryClient = useQueryClient();
  const linksQuery = useQuery("links", getAllLinks);
  const linksMutation = useMutation(createLink, {
    onSuccess() {
      queryClient.invalidateQueries("links");
    },
  });

  function handleChangeLink(i: number) {
    setNewLink(null);
    setLinkIndex(i);
  }

  function handleAddNewLink() {
    setNewLink({ name: "", url: "" });
    setLinkIndex(-1);
  }

  function handleCreateNewLink(data: NewLinkInputs) {
    linksMutation.mutate(data);
    setNewLink(null);
  }

  return (
    <SessionStatus when="authenticated" replacePath="/login">
      <Layout pageTitle="Dashboard" showNavbarAndFooter={false}>
        {!linksQuery.isLoading ? (
          <div className="relative flex p-6">
            <Sidebar />
            <div className="flex-1 md:ml-16 md:px-20 py-10">
              <Heading level={3} className="mb-24">
                Welcome to <span className="text-primary">Dashboard</span>!
              </Heading>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
                <LinksSection
                  links={linksQuery.data?.links || []}
                  linkIndex={linkIndex}
                  isNewLinkCreating={!!newLink}
                  onLinkChange={handleChangeLink}
                  onAddClick={handleAddNewLink}
                />
                <OverviewSection
                  currentLink={linksQuery.data?.links[linkIndex]}
                  newLink={newLink}
                  onCreateClick={handleCreateNewLink}
                  className="lg:col-start-2 lg:col-end-4"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Loading className="animate-spin" />
          </div>
        )}
      </Layout>
    </SessionStatus>
  );
};

export default Dashboard;
