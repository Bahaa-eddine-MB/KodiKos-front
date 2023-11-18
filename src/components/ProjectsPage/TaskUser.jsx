import Image from "next/image"
import dots from "../../../public/assets/ProjectsPage/tasks/3dots.svg"
import calender from "../../../public/assets/ProjectsPage/tasks/calender.svg"
import attachement from "../../../public/assets/ProjectsPage/tasks/attachment.svg"
import avatar from "../../../public/assets/employees/employee.svg"
import check from "../../../public/assets/ProjectsPage/tasks/check.svg"
import ProgressBar from "../Global/ProgressBar"


export default function TaskUser() {



    return (
        <div className="p-4 rounded-2xl border border-mainGray7">
        <div className="flex justify-between mb-3">
            <h3>Create Home screen ERP Website</h3>
            <Image 
                src={dots} width={24} height={24} alt="the 3 dots"/>
        </div>

        <div className="flex justify-around items-center mb-3">
            <button className="bg-primary py-0.5 px-1.5 text-white rounded-[100px]" >Document</button> 
            <button className="bg-[#ED9731] py-0.5 px-1.5 text-white rounded-[100px]">Medium</button>
        </div>
        <div className="flex justify-start gap-3 mb-4 text-[#6C717B]">
        <Image src={calender} alt="the calender icon"  />
        <p>November 18, 2023</p>

        </div>
       
      
       
  
        
        {/* status whether it is completed pause doing or upcoming */}
     
        <div className="mt-2 ">

        <ProgressBar percentage={80}/>
        </div>
        

       

        

        
       

    </div>

    )
    
}