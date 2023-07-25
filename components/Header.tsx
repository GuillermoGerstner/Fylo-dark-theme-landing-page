import Link from "next/link";
import Image from "next/image";

import logo from "@/public/logo.svg";

import { headerLinks } from "@/constants";

const Header = () => {
  return (
    <header className="mt-6 ml-5 mr-6 desktop:mt-[73px] desktop:mx-auto desktop:max-w-[1280px] flex justify-between items-center">
      <Link href={"/"}>
        <Image src={logo} alt="logo" className="w-20 desktop:w-[176px]" />
      </Link>

      <nav className="flex gap-6asd desktop:gap-[58px]asd w-1/2 h-5 relative">
        {headerLinks.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className={`text-white font-Raleway text-[12px] desktop:text-[16px] font-normal hover:font-bold hover:underline absolute top-1/2 -translate-y-1/2 ${
              link.text === "Sign In"
                ? "right-0"
                : link.text === "Team"
                ? "right-[63px] desktop:right-[107px]"
                : link.text === "Features"
                ? "right-[118px] desktop:right-[206px]"
                : ""
            }`}
          >
            {link.text}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
