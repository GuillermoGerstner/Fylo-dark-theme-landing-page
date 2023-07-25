import Image from "next/image";

import Comment from "./Comment";

import { commentsData } from "@/constants";

import quotes from "@/public/bg-quotes.png";

const Comments = () => {
  return (
    <section className="mt-40 desktop:mt-[120px] mx-12 desktop:mx-auto desktop:w-[1200px] desktop:h-[259px] relative pt-[9px] desktop:pt-[59px] mb-[337px] desktop:mb-[360px]">
      <Image
        src={quotes}
        alt="quotes"
        className="absolute top-[-14px] desktop:top-3 left-2 desktop:left-2 w-8 desktop:w-[72px] -z-10"
      />
      <div className="desktop:h-[200px] desktop:ml-5 flex flex-row flex-wrap justify-center desktop:justify-start gap-6 desktop:gap-10">
        {commentsData.map((comment) => (
          <Comment key={comment.ident} {...comment} />
        ))}
      </div>
    </section>
  );
};

export default Comments;
