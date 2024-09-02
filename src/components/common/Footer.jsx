import React from "react";
import invenLogo from "../../assets/images/invenLogo.png";
import Facebook from "../../assets/images/Facebook.png";
import Twitter from "../../assets/images/Twitter.png";
import Instagram from "../../assets/images/Instagram.png";
import Youtube from "../../assets/images/YouTube.png";
import Linkedin from "../../assets/images/LinkedIn.png";

const Footer = () => {
  return (
    <div>
      {" "}
      <div className="footerBgColor flex  flex-col items-center justify-center gap-1 p-4">
        <img className=" h-10" src={invenLogo} alt="Description" />
        <p className="text-center w-full  text-sm font-normal max-w-lg ">
          Invenger's array of Technology services, IT consultancy and
          outsourcing services is
        </p>
        <p className="text-sm ">
          designed to upscale companies across multiple industries,
        </p>
        <p className=" text-sm ">
          address a range of customer operational challenges,
        </p>

        <p className=" text-sm  ">
          {" "}
          and help to tap their undiscovered possibilities.
        </p>
        <div className="w-[98%] h-2 border-t border-black mt-2" />

        <div className="flex md: flex-row w-full items-center justify-between mt-1">
          <p className="text-xs pl-[10%] text-center md:text-left whitespace-nowrap">
            © 2012-2024 Invenger. All rights reserved.
          </p>
          <div className="flex justify-center md:justify-end mt-4 md:mt-0 pr-[%]">
            <div className=" flex items-end justify-end space-x-5">
              <img className="w-8" src={Facebook} alt="Facebook" />
              <img className="w-8" src={Twitter} alt="Twitter" />
              <img className="w-8" src={Instagram} alt="Instagram" />
              <img className="w-8" src={Youtube} alt="Youtube" />
              <img className="w-8" src={Linkedin} alt="LinkedIn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
