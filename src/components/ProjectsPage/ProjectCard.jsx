import lamp from '../../../public/assets/ProjectsPage/ProjectCard/lamp.svg'
import Image from 'next/image'

export default function ProjectCard() {
    return(
        <div className='bg-mainGra10 w-fit  rounded-[20px] px-4 pt-4 pb-7 transition-all duration-700 group hover:scale-105 hover:cursor-pointer' >
            <div className='flex gap-2 '>
                <Image src={lamp} width={25} height={30} alt=''/>
                <h2 className='text-primary text-lg font-semibold'>Project 1</h2>
            </div>
            <div className='mt-5 text-black opacity-50'>
                <p className='max-w-[220px]'>Sigh view am high neat half to what. Sent late held than set why wife our Sigh view am high neat</p>
                <p className='mt-5'>October 20,2020</p>
            </div>
        </div>
    )
}