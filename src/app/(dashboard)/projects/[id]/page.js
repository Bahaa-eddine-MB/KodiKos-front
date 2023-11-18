"use client"
import ProjectsHeader from "@/components/ProjectsPage/ProjectsHeader"
import Search from "@/components/Global/Search"
import NavTasks from "@/components/Global/NavTasks"
import TaskCard from "@/components/ProjectsPage/TaskCard"
import { useEffect, useState } from "react";
const axios = require('axios').default;
import { useParams } from "next/navigation"

export default function ProjectPage() {
    const [tasks, setTasks] = useState([])
    const id = useParams().id

  useEffect(()=>{
    const getTasks = async () => {
      const res = await axios.get(`http://localhost:4000/api/task/byUserId/${id}`)
      console.log(res)
      setTasks([...res.data])
    }
    getTasks()
  }, [])


    return (
        <div className="mt-16 ml-7 mr-10 w-full">
        <ProjectsHeader />
        <NavTasks/>
        <Search/>
        <div className="ml-7 grid grid-cols-myGrid1 gap-x-4"> 
            {tasks.map((t) => <TaskCard key={t._id} title={t.title} description={t.description} type={t.type} taskState={t.progress} docs={t.documents}/>)}
            <TaskCard taskState={"completed"} />
            <TaskCard taskState={"ongoing"} />

        </div>
        

        </div>
    )
}