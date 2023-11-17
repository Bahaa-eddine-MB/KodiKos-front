import ProjectsHeader from "@/components/ProjectsPage/ProjectsHeader"
import ProjectCard from "@/components/ProjectsPage/ProjectCard"


export default function ProjectsPage() {
    return (
      <>
      <div className="mt-16 ml-80 mr-10 ">
        <ProjectsHeader />
      <section className="w-full pt-5 pl-9 pb-16">
        <h1 className="mb-7">Your Projects</h1>
        <ProjectCard />

      </section>
      </div>
        


      </>
    )

}