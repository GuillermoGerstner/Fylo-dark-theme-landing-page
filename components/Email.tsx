/* "use client";
 */
import { useState } from "react";

import GetStartedButton from "./GetStartedButton";

const Email = () => {
  const [emailError, setEmailError] = useState<boolean>(false);

  function emailCheck() {
    var input = (document.getElementById("emailBox") as HTMLInputElement).value;
    var expr = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!expr.test(input)) {
      setEmailError(true);
    } else {
      setEmailError(false);
      location.reload();
    }
  }

  return (
    <section className="emailBg left-5 tablet:left-1/2 right-5 tablet:right-0 tablet:-translate-x-1/2 desktop:h-[275px] tablet:w-[728px] desktop:w-[863px] pt-10 desktop:pt-[42px] pb-[37px] desktop:pb-[41px] absolute top-[-177px] tablet:top-[-130px] desktop:top-[-159px]">
      <h3 className="text-white font-Raleway text-[18px] desktop:text-[32px] font-bold leading-6 desktop:leading-[48px] w-fit mx-auto">
        Get early access today
      </h3>
      <p className="text-white text-center font-OpenSans text-[14px] font-normal leading-[21px] mt-4 mx-7 desktop:mx-[95px]">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <div className="mt-8 desktop:mt-[38px] mx-7 desktop:mx-auto desktop:w-[709px] desktop:h-12 flex flex-col tablet:flex-row tablet:justify-between gap-6 tablet:gap-[29px]">
        <div className="relative w-full tablet:w-[82%] desktop:w-[67.71%] h-12">
          <input
            id="emailBox"
            type="email"
            className="w-full h-full rounded-full outline-none pl-[29px] tablet:pl-[38px] text-[#143b04] font-OpenSans text-[10px] tablet:text-[12px] font-normal leading-[normal]"
            placeholder="email@example.com"
          />
          <span
            className={`absolute bottom-[-19px] left-[38px] text-[#ff4242] font-OpenSans text-[10px] font-bold leading-[normal] ${
              emailError ? "" : "hidden"
            }`}
          >
            Error, please check your email
          </span>
        </div>
        <GetStartedButton
          text="Get Started For Free"
          styles="w-full tablet:w-[200px] h-12"
          action={emailCheck}
        />
      </div>
    </section>
  );
};

export default Email;
