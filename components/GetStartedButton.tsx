"use client";

import { GetStartedButtonProps } from "@/common.types";
import { useState } from "react";

const GetStartedButton = ({ text, styles, action }: GetStartedButtonProps) => {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <button
      onClick={action}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      className={`getStartedButtonShadow rounded-full text-white font-Raleway font-bold text-[14px] ${
        hovered ? "bg-[#8ADAE3]" : "getStartedButtonBg"
      } ${styles}`}
    >
      {text}
    </button>
  );
};

export default GetStartedButton;
