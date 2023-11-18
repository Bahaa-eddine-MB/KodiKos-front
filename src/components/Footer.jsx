import Image from "next/image";
import logo from "@assets/logo.svg";
import copy from "@assets/right.svg"
const Footer = () => {
  return (
    <footer className="container mx-auto flex flex-col gap-4  pt-16">
      <div className="flex justify-between mx-24">
        <div className="space-y-4">
          <Image alt="" src={logo} />
          <p className="text-mainGray2 max-w-[20vw]">
            Lorem ipsum dolor sit amet, hhhh consectetur adipiscing elit. Mollis
            quam malesuada scelerisque ultric
          </p>
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col gap-4 text-black">
            <span className="text-Secondary">Content</span>
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#subscribtion">Subscriptions </a>
          </div>
          <div className="flex flex-col gap-4 text-black">
            <span className="text-Secondary">Socials</span>
            <a>LinkedIn</a>
            <a>Instagram</a>
            <a>Twitter</a>
          </div>
          <div className="flex flex-col gap-4 text-black">
            <span className="text-Secondary">Contact</span>
            <p>+213 556 30 39 78</p>
            <p>+213 556 30 39 78</p>
            <p>email@esi-sba.dz </p>
          </div>
        </div>
      </div>
      <div className="flex  justify-center">
        <div className="h-[2px] w-[86vw] bg-Secondary my-3  " />
      </div>
      <p className="flex items-center justify-center gap-4 pb-8 text-black font-semibold text-lg" ><Image alt="" src={copy} /> Copyright 2023 </p>
    </footer>
  );
};

export default Footer;
