"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import stayProductive from "@/public/illustration-stay-productive.png";
import iconArrow from "@/public/icon-arrow.svg";
import iconArrowWhite from "@/public/icon-arrow-white.svg";

const Location = () => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <section className="mt-40 desktop:mt-[137.37px] mx-7 desktop:mx-auto desktop:w-[1235px] desktop:flex">
      <Image
        src={stayProductive}
        alt="illustration"
        className="mx-auto desktop:mx-0 w-[95.3%] desktop:w-[614.755px]"
      />

      <div className="mt-12 desktop:mt-[115px] desktop:ml-[57px]">
        <h2 className="text-white font-Raleway text-[18px] desktop:text-[40px] font-bold leading-6 desktop:leading-[50px] ml-[5.5px] desktop:ml-0 desktop:pr-20">
          Stay productive, wherever you are
        </h2>
        <p className="text-white font-OpenSans text-[14px] desktop:text-[16px] font-normal leading-[21px] desktop:leading-6 mt-4 desktop:mt-[19px]">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="text-white font-OpenSans text-[14px] desktop:text-[16px] font-normal leading-[21px] desktop:leading-6 mt-4">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>

        <Link
          href="/"
          className="w-[130px] desktop:w-[166px] h-[23px] desktop:h-[27px] flex mt-4 desktop:mt-6 border-[#62E0D9] hover:border-white border-b-[1px] items-start"
          onMouseOver={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}
        >
          <span
            className={`${
              hovered ? "text-white" : "text-[#62E0D9]"
            } font-OpenSans text-[12px] desktop:text-[16px] font-normal block`}
          >
            See how Fylo works
          </span>
          <Image
            src={hovered ? iconArrowWhite : iconArrow}
            alt="arrow"
            className="w-[13px] desktop:w-3 mt-[2.73px] desktop:mt-[7px] ml-[7px] desktop:ml-2"
          />
        </Link>
      </div>
    </section>
  );
};

export default Location;
