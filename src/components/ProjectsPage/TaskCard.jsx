
import Image from "next/image"
import dots from "../../../public/assets/ProjectsPage/tasks/3dots.svg"
import calender from "../../../public/assets/ProjectsPage/tasks/calender.svg"
import attachement from "../../../public/assets/ProjectsPage/tasks/attachment.svg"
import avatar from "../../../public/assets/employees/employee.svg"
import check from "../../../public/assets/ProjectsPage/tasks/check.svg"
import ProgressBar from "../Global/ProgressBar"


export default function TaskCard({title, description, taskState, type, docs}) {

    const documents = docs || []
    return(
       
        <div className="p-4 rounded-2xl border border-mainGray7">
            <div className="flex justify-between mb-3">
                <h3>{title}</h3>
                <Image 
                    src={dots} width={24} height={24} alt="the 3 dots"/>
            </div>
            <p className="text-[#6C717B] max-w-[90%] mb-4">{description}</p>
            <div className="flex justify-around items-center mb-3">
                {documents.length === 0?<button className="bg-primary py-0.5 px-1.5 text-white rounded-[100px]" >Document</button> : <></>}
                <button className="bg-[#ED3159] py-0.5 px-1.5 text-white rounded-[100px]">{taskState}</button>
            </div>
            <div className="flex justify-start gap-3 mb-4 text-[#6C717B]">
            <Image src={calender} alt="the calender icon"  />
            <p>November 18, 2023</p>

            </div>
            {taskState === "completed" && 
            <div className="flex gap-2">
                <Image src={check} alt="the check icon" />
                <span className="font-medium text-[#55DD4A]">Completed</span>
            </div>}
            {taskState === "paused" &&
            <div className="flex gap-2">
                <Image src={check} alt="the paused icon" />
                <span className="font-medium text-[#E84040]">Paused</span>
            </div>
            }
            {/* status whether it is completed pause doing or upcoming */}
            {taskState === "ongoing" && 
            <div className="mt-2 ">

            <ProgressBar percentage={80}/>
            </div>
            }

            <div className="flex justify-between items-center mt-4 pt-3 border-t border-t-[#E6EDFF]">
                <Image  src={ avatar} alt="the image of a human"/>
                <div className="flex gap-1">
                <Image src={attachement} alt="the attachment icon" width={16} height={16} />
                <span>{documents.length}</span>
                </div>
            </div>
           

            

            
           

        </div>
    )
}