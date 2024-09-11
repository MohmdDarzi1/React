import React from "react";
import { Link } from "react-router-dom";

const AboutFooter = () => {
  return (
    <div>
      <div className="w-[527px] h-[25px]  flex justify-center text-[#ccc] m-auto p-8 gap-[40px]">
        <Link to={"/courses"} className=" w-[125px] h-[25px] text-[16px] text-center ">
          دوره های آموزشی
        </Link>
        <a className="w-[112px] h-[25px] text-[16px] border-x-2 border-black-500 text-center">
          درباره ما
        </a>
        <a className="w-[112px] h-[25px] text-[16px] leading-6 text-center ">
          قوانین و مقررات
        </a>
      </div>
    </div>
  );
};

export default AboutFooter;
