import Image from "next/image";
import employe from "../../../public/assets/employees/employee.svg";

export default function EmployeCard({name, role, email}) {
  return (
    <div className="pl-3 pr-5 py-3 rounded-md flex gap-3 shadow-light justify-center items-center transition-all duration-700 group hover:cursor-pointer hover:scale-105 hover:bg-primary hover:bg-opacity-60">
      <div className="h-24 w-24">
        <Image src={employe} alt="the employee pic" className="max-w-full" />
      </div>
      <div>
        <h3 className="text-base font-medium">{name}</h3>
        <h4 className="text-xs text-primary my-2 font-medium group-hover:text-white duration-700">{role}</h4>
        <p className="font-light text-xs text-mainGray2 max-w-[60%] group-hover:text-mainGray7 duration-700">
          {email}
        </p>
      </div>
    </div>
  );
}
