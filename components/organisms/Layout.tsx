import Head from "next/head";
import { FC } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
  pageTitle: string;
}

const Layout: FC<Props> = ({ children, pageTitle }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{pageTitle} - SHRT</title>
        <meta name="description" content={pageTitle} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
