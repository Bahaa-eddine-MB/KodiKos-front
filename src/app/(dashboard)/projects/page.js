"use client"
import ProjectsHeader from "@/components/ProjectsPage/ProjectsHeader"
import ProjectCard from "@/components/ProjectsPage/ProjectCard"
import { useEffect, useState } from "react";
import Link from "next/link";
const axios = require('axios').default;


export default function ProjectsPage() {
  const [projects, setProjects] = useState([])

  useEffect(()=>{
    const getProjects = async () => {
      const res = await axios.get('http://localhost:4000/api/project/')
      setProjects([...res.data])
    }
    getProjects()
  }, [])
    return (
      <>
      <div className="mt-16 ml-7 mr-10 w-full">
        <ProjectsHeader title={"Projects"} text={"Here are your projects"}/>
      <section className="w-full pt-5 pl-9 pb-16 rounded-[20px] border border-mainGray7 ">
        <h1 className="mb-7 font-medium text-2xl">Your Projects</h1>
        <div className="flex gap-10">
        {projects.map((p) => <Link href={"/projects/"+p._id}><ProjectCard key={p._id} title={p.title} description={p.description}/></Link>)}
        </div>

      </section>
      </div>
      </>
    )

}