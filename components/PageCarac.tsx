"use client";

import Image from "next/image";

import { PageCaracProps } from "@/common.types";

const PageCarac = ({ image, ident, title, text }: PageCaracProps) => {
  return (
    <article
      className={`w-[320px] ${
        ident === "accessAnywhere"
          ? "desktop:w-[349px]"
          : ident === "security"
          ? "desktop:w-[384px]"
          : ident === "collaboration"
          ? "desktop:w-[363px]"
          : ident === "anyFile"
          ? "desktop:w-[363px]"
          : ""
      } pt-3 desktop:pt-[15px]`}
    >
      <Image
        src={image}
        alt="icon"
        className={`mx-auto ${
          ident === "accessAnywhere"
            ? "w-16 desktop:w-[83px]"
            : ident === "security"
            ? "w-[53px] desktop:w-[69px]"
            : ident === "collaboration"
            ? "w-[66px] desktop:w-[86px]"
            : ident === "anyFile"
            ? "w-[71px] desktop:w-[92px]"
            : ""
        }`}
      />
      <h4 className="text-white text-center font-Raleway text-[18px] desktop:text-[20px] font-bold leading-6 mt-6 desktop:mt-4">
        {title}
      </h4>
      <p className="text-white text-center font-OpenSans text-[14px] font-normal leading-[21px] mt-2">
        {text}
      </p>
    </article>
  );
};

export default PageCarac;
