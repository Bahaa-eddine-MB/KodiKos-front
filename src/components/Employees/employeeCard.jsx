import Image from "next/image"
import employe from "../../../public/assets/employees/employee.svg"



export default function EmployeCard() {





    return(
        <div className="pl-3 pr-5 py-3 flex gap-3 shadow-light justify-center items-center">
            <div className="h-24 w-24">
            <Image src={employe} alt="the employee pic" className="max-w-full" />
            </div>
            <div>
                <h3 className="text-base font-medium">User name</h3>
                <h4 className="text-xs text-primary my-2 font-medium">Department</h4>
                <p className="font-light text-xs text-mainGray2 max-w-[60%]">Sigh view am high neat half to what. Sent late held than set why wife our</p>

                
            </div>
            
        </div>
    )
}