import '../styles/ProjectList.scss';
import ProjectCard from './ProjectCard';
import { useEffect } from "react";

function ProjectList () {
    const blabla = useEffect(() =>{
        fetch('/src/data/data.json')
      .then((response) => response.json())
    }
    
)
console.info(blabla);
    return(
        <div>
            <ProjectCard/>
            

        </div>
    )
}
export default ProjectList;