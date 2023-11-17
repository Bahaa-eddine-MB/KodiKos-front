import lamp from '../../../public/assets/ProjectsPage/ProjectCard/lamp/svg'
import Image from 'next/image'

export default function ProjectCard() {
    return(
        <div>
            <div>
                <Image src={lamp} width={25} height={30}/>
                
            </div>
        </div>
    )
}