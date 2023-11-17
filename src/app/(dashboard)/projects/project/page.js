import ProjectsHeader from "@/components/ProjectsPage/ProjectsHeader"
import Search from "@/components/Global/Search"
import NavTasks from "@/components/Global/NavTasks"
import TaskCard from "@/components/ProjectsPage/TaskCard"

export default function ProjectPage() {



    return (
        <div className="mt-16 ml-7 mr-10 w-full">
        <ProjectsHeader />
        <NavTasks/>
        <Search/>
        <div className="ml-7 grid grid-cols-myGrid1 gap-x-4"> 
            <TaskCard taskState={"completed"} />
            <TaskCard taskState={"ongoing"} />

        </div>
        

        </div>
    )
}