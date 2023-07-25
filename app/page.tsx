import Image from "next/image";

import Hero from "@/components/Hero";
import Characteristics from "@/components/Characteristics";
import Location from "@/components/Location";
import Comments from "@/components/Comments";

import bgCurbyMobile from "@/public/bg-curvy-mobile.svg";

export default function Home() {
  return (
    <main className="mt-12 desktop:mt-[75px] relative overflow-hidden">
      <div className="desktop:hidden absolute top-0 w-full h-full -z-10 pt-[184px]">
        <Image src={bgCurbyMobile} alt="bg-curvy-mobile" className="w-full" />
        <div className="bg-[#181f2b] w-full h-full" />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1435"
        height="2698"
        viewBox="0 0 1435 2698"
        className="hidden desktop:flex absolute top-[648px] w-full -z-10"
      >
        <path
          d="M0 403.098C0 403.098 130.797 395.269 245.853 271.593C360.91 147.917 335.991 102.406 527.016 144.786C718.041 187.166 701.77 159.406 824.596 61.4744C947.421 -36.4572 1027.14 -14.0462 1102.02 104.97C1176.9 223.986 1246.97 263.593 1374.65 307.298C1502.32 351.003 1384.33 2698 1384.33 2698L0 2697.98V403.098Z"
          fill="#181F2B"
        />
      </svg>

      <Hero />
      <Characteristics />
      <Location />
      <Comments />
    </main>
  );
}
