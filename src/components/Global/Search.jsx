import search from "../../../public/assets/Global/search.svg"
import Image from "next/image"

export default function Search() {

    return(
          <div className="ml-7 flex items-center relative mb-12">
            <Image src={search} alt="the search icon inside the input"   className="absolute left-2.5"      />
          <input type="text" placeholder="Search" className="rounded-[15px] w-full shadow-light p-5 outline-none pl-10" />
          </div>
    )
}