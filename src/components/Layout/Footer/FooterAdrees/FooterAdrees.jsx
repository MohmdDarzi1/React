import React from "react";

const FooterAdrees = () => {
  return (
    <div className="flex justify-center ">
      <div className="w-[80%] h-[64px]  border flex  md:justify-between sm:justify-center  rounded-[16px] bg-[#000033] mt-8">
        <div className="w-[463px] h-[20px]  text-right leading-[18.6px] m-3  mt-5">
          <div className="w-[427px] h-[19px] text-[14px] flex  leading-[18.6px]">
            <img
              className=" w-[12px] h-[12px] m-1"
              src="src/assets/Image/Vector(2).png"
              alt=""
            />
            <span> تمام حقوق مادی و معنوی این مجموعه متعلق به </span>
            <a href="https://hexasquad.ir"> HexaSquad.ir </a>
            <span> میباشد </span>
          </div>
        </div>

        <div className="sm:flex hidden w-[300px] h-[32px]   mt-4  ">
          <div className="w-[32px] h-[32px] flex gap-[16px] ml-6">
            <img
              onClick={() => {
                window.location.href = "https://facebook.com";
              }}
              className="cursor-pointer"
              src="src/assets/Image/1.png"
              alt=""
            />

            <img
              onClick={() => {
                window.location.href = "https://linkedin.com";
              }}
              className="cursor-pointer"
              src="src/assets/Image/2.png"
              alt=""
            />
            <img
              onClick={() => {
                window.location.href = "https://whatsapp.com";
              }}
              className="cursor-pointer"
              src="src/assets/Image/Vector(1).png"
              alt=""
            />
            <img
              onClick={() => {
                window.location.href = "https://instagram.com";
              }}
              className="cursor-pointer"
              src="src/assets/Image/3.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterAdrees;
