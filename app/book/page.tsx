"use client";

import { InlineWidget } from "react-calendly";

const Book = () => {
  return (
    <>
      <div className="relative bg-black-100 flex flex-col w-full h-screen  mx-auto sm:px-10 px-5 ">
        <h1 className="heading pb-9">
          Prenez <span className="text-purple">RDV</span>
        </h1>
        
        <InlineWidget url="https://calendly.com/christopherbadibanga2014/consultation-web" />
      </div>

    </>
  );
};

export default Book;
