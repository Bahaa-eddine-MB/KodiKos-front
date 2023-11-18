import Image from "next/image"
import avatar from "@assets/employees/employee.svg"
import ProjectsHeader from "@components/ProjectsPage/ProjectsHeader.jsx"
import addTask from "@assets/ProjectsPage/ProjectCard/add-icon.svg"
import TaskCard from "@components/ProjectsPage/TaskCard.jsx"
import TaskUser from "@components/ProjectsPage/TaskUser.jsx"
export default function UserProfile() {


    return (
        <div className="mt-16 ml-7 mr-10 w-full">
            <ProjectsHeader title={"Projects"} text="Here are all your Projecs" />
            <main className="mt-14">
                <div className="flex gap-4 justify-center items-center w-[40%] ml-3 mb-3">
                    <div>
                        <Image src={avatar} alt="the avatar image"  width={150} height={150}/>
                    </div>
                        <div>
                            <h1 className="font-medium text-3xl">User Name</h1>
                            <h2 className="font-medium text-xs text-primary p-2"> Departement</h2>
                            <p className="text-mainGray2 w-full">Sigh view am high neat half to what. Sent late held than set why wife our</p>

                        </div>
                    
                </div>
                <section className="p-8 border rounded-3xl border-[#E6EDFF] mb-4">
                    <div className="flex justify-between items-center mb-6">
                    <h1 className="font-medium text-2xl" >Tasks</h1>
                    <div className="w-11 h-11 rounded-full bg-[#F1F0FC] relative">
                    <Image  src={addTask} alt="add new atsk icon" className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    </div>
                    {/* tasks contianer */}
                    <div className="grid grid-cols-myGrid1 gap-4">
                        <TaskUser />
                        <TaskUser />
                        <TaskUser />
                        <TaskUser />


                    </div>

                </section>
                <section className="p-8 border rounded-3xl border-[#E6EDFF]">
                    <div className="flex justify-between items-center mb-6">
                    <h1 className="font-medium text-2xl" >Warnings</h1>
                    <div className="w-11 h-11 rounded-full bg-[#F1F0FC] relative">
                    <Image  src={addTask} alt="add new atsk icon" className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    </div>
                    {/* tasks contianer */}
                  

                </section>
            </main>
        </div>
       
    )
}