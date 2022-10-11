import Link from "next/link";
import Logo from "../../assets/logo-with-name.svg";
import Paragraph from "../atoms/Paragraph";

const Footer = () => {
  return (
    <footer className="content w-full py-6 flex flex-col md:flex-row gap-y-4 justify-between">
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <Paragraph>&copy; {new Date().getFullYear()}, Borys Kaczmarek</Paragraph>
    </footer>
  );
};

export default Footer;
