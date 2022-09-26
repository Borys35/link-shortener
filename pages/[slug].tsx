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

  if (foundLink)
    return {
      redirect: {
        destination: foundLink.url,
        permanent: true,
      },
    };

  return { notFound: true };
};

const Redirect = () => {
  return <div>Redirecting...</div>;
};

export default Redirect;
