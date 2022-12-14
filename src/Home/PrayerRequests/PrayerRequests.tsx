import React from "react";

const Participate = () => {
  return (
    <>
      <section
        aria-labelledby="prayer requests"
        className="w-full h-64 md:h-96 bg-cover bg-[url(./images/prayer.jpg)]"
      >
        <div className="grid place-content-top w-full h-full bg-black/50">
          <div className="text-center text-darkgold">
            <h3 className="p-4 text-xl md:text-2xl lg:text-3xl">祈りの求め</h3>
            <blockquote className="px-[10%] text-sm md:text-xl lg:text-2xl">
              “すべての祈りと願いを用いて、どんなときにも御霊によって祈りなさい。そのためには絶えず目をさましていて、すべての聖徒のために、忍耐の限りを尽くし、また祈りなさい。”
            </blockquote>
            <p className="text-sm md:text-xl lg:text-2xl pt-2">
              エペソ人への手紙6章18節
            </p>
            <button className="transition hover:ease-in-out duration-500 text-xl md:text-xl lg:text-2xl mt-2 md:mt-4 p-3 text-darkgold bg-black rounded border-[1px] hover:bg-gray hover:text-gold">
              祈りの求め
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Participate;
