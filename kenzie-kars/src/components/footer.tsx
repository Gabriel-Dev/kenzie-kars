import Image from "next/image";
import logoWhite from "../assets/LogoWhite.png";

const Footer = () => {

  return (
    <footer className="bg-grey-0 p-8 flex flex-col gap-8 items-center justify-center text-grey-7 md:flex-row md:justify-between">
         <Image className="" width={153} height={27} src={logoWhite} alt="logo motors shop" />
         <p className="body-2-400">© 2022 -  Todos os direitos reservados.</p>
         <button className="medium-45 w-[53px] h-[50px]">{"^"}</button>
    </footer>
  );
};

export default Footer;