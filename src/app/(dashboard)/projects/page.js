import ProjectsHeader from "@/components/ProjectsPage/ProjectsHeader"
import ProjectCard from "@/components/ProjectsPage/ProjectCard"


export default function ProjectsPage() {
    return (
      <>
      <div className="mt-16 ml-7 mr-10 w-full">
        <ProjectsHeader title={"Projects"} text={"Here are your projects"}/>
      <section className="w-full pt-5 pl-9 pb-16 rounded-[20px] border border-mainGray7 ">
        <h1 className="mb-7 font-medium text-2xl">Your Projects</h1>
        <div className="flex gap-10">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        </div>

      </section>
      </div>
        


      </>
    )

}