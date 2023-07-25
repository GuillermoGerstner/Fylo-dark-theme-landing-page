import Link from "next/link";
import Image from "next/image";

import GetStartedButton from "@/components/GetStartedButton";

import illustrationIntro from "@/public/illustration-intro.png";

const Hero = () => {
  return (
    <section>
      <Image
        src={illustrationIntro}
        alt="illustration"
        className="w-[81.07%] desktop:w-[720px] mx-auto"
      />
      <h1 className="text-white text-center font-Raleway text-[24px] desktop:text-[40px] font-bold leading-[36px] desktop:leading-[60px] mt-[33px] desktop:mt-9 mx-7 desktop:mx-auto desktop:w-[734px]">
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className="text-white text-center font-OpenSans text-[14px] desktop:text-[20px] font-normal leading-[21px] desktop:leading-[30px] mt-[15px] desktop:mt-8 mx-10 desktop:mx-auto desktop:w-[590px]">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <Link href="/" className="block w-fit mt-8 mx-auto">
        <GetStartedButton
          text="Get Started"
          styles="w-[240px] desktop:w-[280px] h-12 desktop:h-14 desktop:text-[16px]"
        />
      </Link>
    </section>
  );
};

export default Hero;
