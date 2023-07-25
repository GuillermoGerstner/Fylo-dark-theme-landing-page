"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Email from "./Email";

import { footerLinks } from "@/constants";

import logo from "@/public/logo.svg";
import iconLocation from "@/public/icon-location.svg";
import iconPhone from "@/public/icon-phone.svg";
import iconEmail from "@/public/icon-email.svg";
import facebook from "@/public/facebook-f.svg";
import twitter from "@/public/twitter.svg";
import instagram from "@/public/instagram.svg";

const Footer = () => {
  const [footerSocialMedia, setFooterSocialMedia] = useState<string>("");

  return (
    <footer className="bg-[#0b1524] pt-[259px] tablet:pt-[214px] desktop:pt-[169px] pb-[52px] desktop:pb-[53px] relative">
      <div className="mx-7 tablet:mx-14 desktop:mx-auto desktop:max-w-[1240px]">
        <Image
          src={logo}
          alt="logo"
          className="w-[108px] ml-[11px] desktop:ml-0"
        />

        <div className="mt-[35px] desktop:mt-[52px] flex flex-col tablet:flex-row tablet:flex-wrap gap-4 tablet:gap-14 desktop:gap-20">
          <div className="flex w-fit h-fit">
            <Image
              src={iconLocation}
              alt="location"
              className="h-[18px] mt-2"
            />
            <p className="text-white font-OpenSans text-[16px] font-normal leading-6 ml-[27px] max-w-[339px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>

          <div className="w-[164px] desktop:w-[237px] h-[104px] desktop:h-16">
            <div className="flex w-[149px] desktop:w-[158px] h-6">
              <Image
                src={iconPhone}
                alt="phone"
                className="w-[13px] h-[13px] desktop:w-[18px] desktop:h-[18px] ml-[3px] mt-[3px]"
              />
              <p className="text-white text-center font-OpenSans text-[14px] font-normal leading-[21px] ml-[22.5px] desktop:ml-[26.5px]">
                +1-543-123-4567
              </p>
            </div>
            <div className="flex w-[164px] desktop:w-[171px] h-6 mt-4">
              <Image
                src={iconEmail}
                alt="email"
                className="w-[20px] h-[16px] ml-[2px] mt-1"
              />
              <p className="text-white text-center font-OpenSans text-[14px] font-normal leading-[21px] ml-[17px] desktop:ml-[24px]">
                example@fylo.com
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-[72.8px]">
            {footerLinks
              .map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  className="text-white font-OpenSans text-[16px] font-normal hover:font-bold leading-[22px] cursor-pointer"
                >
                  {link.text}
                </Link>
              ))
              .slice(0, 4)}
          </div>

          <div className="flex flex-col gap-4 w-[115px] h-[98px] mt-8 tablet:mt-0">
            {footerLinks
              .map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  className="text-white font-OpenSans text-[16px] font-normal hover:font-bold leading-[22px] cursor-pointer"
                >
                  {link.text}
                </Link>
              ))
              .slice(4)}
          </div>

          <div className="w-[104px] desktop:w-[116px] h-[27px] desktop:h-[31px] flex justify-between mx-auto mt-10 desktop:mt-0">
            <Link
              href="/"
              className="border-[1px] rounded-full border-white hover:border-[#62e0d9] w-[27px] desktop:w-[31px] h-[27px] desktop:h-[31px] flex items-center justify-center"
              onMouseOver={() => setFooterSocialMedia("facebook")}
              onMouseOut={() => setFooterSocialMedia("")}
            >
              <Image
                src={facebook}
                alt="facebook"
                className={`w-[9px] desktop:w-[10px] ${
                  footerSocialMedia === "facebook" ? "filter-none" : "toWhite"
                }`}
              />
            </Link>
            <Link
              href="/"
              className="border-[1px] rounded-full border-white hover:border-[#62e0d9] w-[27px] desktop:w-[31px] h-[27px] desktop:h-[31px] flex items-center justify-center"
              onMouseOver={() => setFooterSocialMedia("twitter")}
              onMouseOut={() => setFooterSocialMedia("")}
            >
              <Image
                src={twitter}
                alt="twitter"
                className={`w-[12.735px] desktop:w-[14.694px] ${
                  footerSocialMedia === "twitter" ? "filter-none" : "toWhite"
                }`}
              />
            </Link>
            <Link
              href="/"
              className="border-[1px] rounded-full border-white hover:border-[#62e0d9] w-[27px] desktop:w-[31px] h-[27px] desktop:h-[31px] flex items-center justify-center"
              onMouseOver={() => setFooterSocialMedia("instagram")}
              onMouseOut={() => setFooterSocialMedia("")}
            >
              <Image
                src={instagram}
                alt="instagram"
                className={`w-[12.735px] desktop:w-[14.694px] ${
                  footerSocialMedia === "instagram" ? "filter-none" : "toWhite"
                }`}
              />
            </Link>
          </div>
        </div>
      </div>

      <Email />

      <p className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center text-white">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.linkedin.com/in/guillermogerstner">
          Guillermo Gerstner
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
