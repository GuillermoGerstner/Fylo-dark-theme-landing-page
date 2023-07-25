import Image from "next/image";

import { CommentProps } from "@/common.types";

const Comment = ({ ident, text, image, name, role }: CommentProps) => {
  return (
    <article className="commentBg w-[280px] desktop:w-[360px] h-[160px] desktop:h-[200px] pt-6 desktop:pt-10 px-5 desktop:pl-[26px] desktop:pr-[24.7px]">
      <p className="text-white font-OpenSans text-[10px] desktop:text-[14px] font-normal leading-[18px] desktop:leading-[21px] desktop:tracking-[0.5px]">
        {text}
      </p>
      <div className="mt-4 desktop:mt-6 flex items-start">
        <Image src={image} alt="profile" className="rounded-full w-6" />
        <div className="ml-2">
          <span className="block text-white font-OpenSans text-[10px] font-bold leading-3 tracking-[0.5px]">
            {name}
          </span>
          <span className="block text-white font-OpenSans text-[7px] font-normal leading-[10px] tracking-[0.5px] mt-1">
            {role}
          </span>
        </div>
      </div>
    </article>
  );
};

export default Comment;
