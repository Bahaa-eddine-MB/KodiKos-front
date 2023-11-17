import ProjectsHeader from "@/components/ProjectsPage/ProjectsHeader";
import ProjectCard from "@/components/ProjectsPage/ProjectCard";
import Search from "@/components/Global/Search";
import EmployeCard from "@/components/Employees/employeeCard";

export default function EmployeesForManager() {
  return (
    <div className="mt-16 ml-7 mr-10 w-full ">
      <ProjectsHeader />
      <Search />
      <div className="grid grid-cols-myGrid pb-8  gap-6">
        <EmployeCard />
        <EmployeCard />
        <EmployeCard />
        <EmployeCard />
        <EmployeCard />
        <EmployeCard />
        <EmployeCard />
        <EmployeCard />
        <EmployeCard />

        <EmployeCard />
      </div>
    </div>
  );
}
