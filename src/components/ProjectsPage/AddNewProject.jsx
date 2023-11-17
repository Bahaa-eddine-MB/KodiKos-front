import Image from "next/image"

import addIcon from '../../../public/assets/ProjectsPage/ProjectCard/add-icon.svg'


export default function AddNewProject() {


    return (
        <div className='bg-mainGra10 w-fit  rounded-[20px] p-10 flex flex-col gap-3 justify-center items-center' >
           
             
            <Image width={25} height={25}   alt="the add icon image" src={addIcon}/>
            <p className="text-primary font-medium">Create a New Project</p>

        
        
        </div>
    )
}