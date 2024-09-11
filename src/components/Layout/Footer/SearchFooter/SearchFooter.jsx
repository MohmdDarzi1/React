import React from "react";

import Footer from "../Footer";
import ButtonComponent from "../../../common/ButtonComponent";
// import Footer from '../Footer'

const SearchFooter = () => {
  return (
    <div>
      <div className=" focus:outline-none focus:text-black  w-[500px] h-[56px] bg-[#fff] m-auto   text-black rounded-[50px] flex justify-center  flex-row  ">
        {/* <a className='m-auto w-[77px] h-[40px]  bg-[#2196F3] text-white rounded-[80px] p-2'>خبرم کن</a>  */}

        <ButtonComponent
          text={"خبرم کن"}
          // ="w-[77px] h-[90%] leading-[50px] mr-1"
          height={"100%"}
        />
        <input
          className="w-[350px] text-left h-10 m-auto  outline-none "
          type="text"
          placeholder="  Example@gmail.com"
        />
      </div>
    </div>
  );
};

export default SearchFooter;
