import Head from "next/head";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
  pageTitle: string;
}

const Layout: FC<Props> = ({ children, pageTitle }) => {
  return (
    <div>
      <Head>
        <title>{pageTitle} - SHRT</title>
        <meta name="description" content={pageTitle} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
