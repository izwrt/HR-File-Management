import React from "react";
import Facebook from "../../assets/images/Facebook.png";
import Instagram from "../../assets/images/Instagram.png";
import invenLogo from "../../assets/images/invenLogo.png";
import Linkedin from "../../assets/images/LinkedIn.png";
import Twitter from "../../assets/images/Twitter.png";
import Youtube from "../../assets/images/YouTube.png";

const Footer = () => {
  return (
    <footer className="footerBgColor flex  flex-col items-center justify-center gap-1 p-4 ">
      <img className=" h-10 mt-4" src={invenLogo} alt="Description" />
      <p className="footer-font text-center text-base mt-2 opacity-80">
        Invenger's array of Technology services, IT consultancy and outsourcing
        services is
      </p>
      <p className="footer-font text-center text-base opacity-80">
        designed to upscale companies across multiple industries,
      </p>
      <p className=" footer-font text-center text-base opacity-80">
        address a range of customer operational challenges,
      </p>

      <p className="footer-font text-center text-base opacity-80">
        and help to tap their undiscovered possibilities.
      </p>
      <div className="w-full h-2 border-t border-black mt-4 opacity-50" />

      <div className="flex w-full items-center justify-center mt-1 px-10 gap-[60%]">
        <p className="footer-font text-center whitespace-nowrap">
          © 2012-2024 Invenger. All rights reserved.
        </p>
        <div className=" flex items-end justify-end space-x-5">
          <img className="w-10" src={Facebook} alt="Facebook" />
          <img className="w-10" src={Twitter} alt="Twitter" />
          <img className="w-10" src={Instagram} alt="Instagram" />
          <img className="w-10" src={Youtube} alt="Youtube" />
          <img className="w-10" src={Linkedin} alt="LinkedIn" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
