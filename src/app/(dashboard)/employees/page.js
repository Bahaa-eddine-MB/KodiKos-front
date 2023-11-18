"use client"
import ProjectsHeader from "@/components/ProjectsPage/ProjectsHeader";
import Search from "@/components/Global/Search";
import EmployeCard from "@/components/Employees/employeeCard";
import { useEffect, useState } from "react";
const axios = require('axios').default;

export default function EmployeesForManager() {
  const [employees, setEmployees] = useState([])

  useEffect(()=>{
    const getEmployees = async () => {
      const res = await axios.post('http://localhost:4000/api/user/byRole',{
        role: "employee"
      })
      setEmployees([...res.data])
    }
    getEmployees()
  }, [])

  return (
    <div className="mt-16 ml-7 mr-10 w-full ">
      <ProjectsHeader title={"Employees"} text={"Here are your employees"}/>
      <Search />
      <div className="grid grid-cols-myGrid pb-8  gap-6">
        {employees.map((e) => <EmployeCard key={e._id} name={e.name} role={e.role} email={e.email}/>)}
      </div>
    </div>
  );
}
