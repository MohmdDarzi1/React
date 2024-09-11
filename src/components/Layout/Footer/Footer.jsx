import AboutFooter from "./AboutFooter/AboutFooter";
import FooterAdrees from "./FooterAdrees/FooterAdrees";
import SearchFooter from "./SearchFooter/SearchFooter";

const Footer = () => {
  return (
    <div className=" w-full relative  flex justify-center" id="footer">
      {/* <div className=" items-center flex w-[1440px] h-[300px] mx-auto border ">
        footer
      </div> */}

      <div className=" w-[1440px] h-[553px] bg-[#252641] text-center pt-10 text-[#ffff]">
        <img
          className="inline-block w-[40px] "
          src="src/assets/image/png/invisibledark.png"
          alt=""
        />
        <a className="w-[114px] h-[37px] text-[1.3rem] leading-[37px]  pr-[5px] font-serif m-1">invisible</a>

        <p className="h-[62px] w-[463px] text-[20px] m-auto text-center">
          {" "}
          هدف ما سهولت و دسترسی و دریافت از خدمات در سراسر کشور با کمترین هزینه
          و بدون مراجعه حضوری{" "}
        </p>

        <p className=" h-[25px] w-[268px] m-auto leading-6 text-[16px] py-12 text-center">
          {" "}
          برای دریافت اخبار ایمیل ثبت نام کنید
        </p>

        <SearchFooter />

        <AboutFooter />

        <FooterAdrees />
      </div>
    </div>
  );
};

export default Footer;
