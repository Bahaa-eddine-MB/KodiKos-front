import Image from "next/image";
import arrowDown from "../../../public/assets/ProjectsPage/ProjectsHeader/arrow-down.svg";
import bell from "../../../public/assets/ProjectsPage/ProjectsHeader/bell-icon.svg";
import searchIcon from "../../../public/assets/ProjectsPage/ProjectsHeader/search-icon.svg";
import avatar from "../../../public/assets/ProjectsPage/ProjectsHeader/avatar.svg";

export default function ProjectsHeader({title,text}) {
  return (
   
    <header className=" flex mr-4 justify-between mb-10  ">
      <div className="">
        <h2 className="text-3xl font-semibold mb-1">{title}</h2>
        <p className="text-mainGray2">{text}</p>
      </div>
      <div className="flex w-[28%] items-start justify-evenly gap-1">
        <div className="flex gap-[10px]">
   
          <Image src={searchIcon} width={23} height={23}  className="text-black" alt=""/>
          <Image src={bell} width={20} height={20} className="text-black" alt=""/>
          </div>
          <div className="flex items-center gap-2">
            <div >
              <Image src={avatar} width={25} height={25} alt=""/>
            </div>
            <span>Marci Fumons</span>
            <div className="ml-[20px]">
            <Image src={arrowDown} width={12} height={7} alt=""/>
            </div>

          </div>
        </div>
    
    </header>
  )
}
