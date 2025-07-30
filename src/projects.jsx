import ProjectsCard from "./components/ProjectsCard";
import WorkingImg from "./assets/WorkingImg.png"


const Projects = () => {

    const projects = [
        {image: WorkingImg, name: "Project-1", description: "Description-1"},
        {image: WorkingImg, name: "Project-2", description: "Description-2"},
    ];

    return (
        <section id = "projects">
            <div className="overflow-hidden mx-10 p-10">
                <p className="flex bg-gradient-to-r from-indigo-700 to-yellow-500 w-max bg-clip-text text-transparent text-5xl px-10 justify-self-center">Projects</p>
                <br></br>
                <div className="grid lg:grid-cols-2 justify-items-center">
                    {
                        projects.map(function(elem, idx){
                            return <ProjectsCard image = {elem.image} name = {elem.name} description = {elem.description}></ProjectsCard>
                        })
                    }
                </div>
            </div>
        </section>
    );

}

export default Projects;