import Image from "next/image";
import arrowDown from "../../../public/assets/ProjectsPage/ProjectsHeader/arrow-down.svg";
import bell from "../../../public/assets/ProjectsPage/ProjectsHeader/bell-icon.svg";
import searchIcon from "../../../public/assets/ProjectsPage/ProjectsHeader/search-icon.svg";
import avatar from "../../../public/assets/ProjectsPage/ProjectsHeader/avatar.svg";

export default function ProjectsHeader() {
  return (
   
    <header className=" flex mr-4 justify-between mb-10">
      <div className="">
        <h2 className="text-3xl font-semibold mb-1">Projects</h2>
        <p className="text-mainGray2">Here are your projects</p>
      </div>
      <div className="flex w-[20%] items-start justify-evenly gap-1">
        <div className="flex gap-[10px]">
   
          <Image src={searchIcon} width={23} height={23}  className="text-black"/>
          <Image src={bell} width={20} height={20} className="text-black" />
          </div>
          <div className="flex items-center gap-2">
            <div >
              <Image src={avatar} width={25} height={25} />
            </div>
            <span>Marci Fumons</span>
            <div className="ml-[20px]">
            <Image src={arrowDown} width={12} height={7}/>
            </div>

          </div>
        </div>
    
    </header>
  )
}
