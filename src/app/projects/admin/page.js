import ProjectsHeader from "@/components/ProjectsPage/ProjectsHeader"
import ProjectCard from "@/components/ProjectsPage/ProjectCard"
import AddNewProject from "../../../components/ProjectsPage/AddNewProject"

export default function ProjectsAdmin() {


    return (
        <div className="mt-16 ml-7 mr-10 w-full">
        <ProjectsHeader />
        <section className="w-full pt-5 pl-9 pb-16 rounded-[20px] border border-mainGray7 ">
        <h1 className="mb-7 font-medium text-2xl">Add a New Project</h1>
        <div className="flex gap-10">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <AddNewProject/>
       
        </div>

      </section>
        </div>
    )

}