import { pageCaracteristics } from "@/constants";

import PageCarac from "./PageCarac";

const Characteristics = () => {
  return (
    <section className="mt-[120px] desktop:mt-[158px] mx-[27px] desktop:mx-auto desktop:w-[880px] desktop:h-[507px] flex flex-wrap justify-center desktop:justify-between gap-20">
      {pageCaracteristics.map((carac) => (
        <PageCarac key={carac.ident} {...carac} />
      ))}
    </section>
  );
};

export default Characteristics;
