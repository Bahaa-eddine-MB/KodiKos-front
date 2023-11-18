import lamp from '../../../public/assets/ProjectsPage/ProjectCard/lamp.svg'
import Image from 'next/image'

export default function ProjectCard({title, description}) {
    return(
        <div className='bg-mainGra10 w-fit  rounded-[20px] px-4 pt-4 pb-7 transition-all duration-700 group hover:scale-105 hover:cursor-pointer' >
            <div className='flex gap-2 '>
                <Image src={lamp} width={25} height={30} alt=''/>
                <h2 className='text-primary text-lg font-semibold'>{title}</h2>
            </div>
            <div className='mt-5 text-black opacity-50'>
                <p className='max-w-[220px]'>{description}</p>
                <p className='mt-5'>November 18,2023</p>
            </div>
        </div>
    )
}