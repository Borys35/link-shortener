import { GetServerSideProps, GetServerSidePropsContext } from "next";
import prisma from "../lib/prisma";

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { params } = context;

  if (!params)
    return {
      notFound: true,
    };

  const foundLink = await prisma.link.findFirst({
    where: { slug: params.slug?.toString() },
  });

  if (!foundLink) return { notFound: true };

  await prisma.click.create({
    data: { linkId: foundLink.id, country: "Unknown" },
  });

  return {
    redirect: {
      destination: foundLink.url,
      permanent: true,
    },
  };
};

const Redirect = () => {
  return <div>Redirecting...</div>;
};

export default Redirect;
