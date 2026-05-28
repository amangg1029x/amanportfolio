import ProjectsCard from "./components/ProjectsCard";
import TuntunBakers from "./assets/tuntunbakers.png";
import MuleTrace from "./assets/muletrace.png"


const Projects = () => {

    const projects = [
        {image: TuntunBakers, name: "Tuntun Bakers WebApp", link: "https://tuntun-bakers.vercel.app/", description: "Tuntun Bakers is a full-stack bakery web application with a React + Vite frontend for showcasing bakery products and a Node.js backend that handles server-side logic (APIs, data management) for the app. The frontend is deployed on Vercel and the backend appears set up as its own service also deployed on Vercel, forming a complete web project with both client and server components."},
        {image: MuleTrace, name: "Mule Trace - Fraud Detection", link: "https://muletrace.vercel.app/", description: "MuleTrace is a real-time Anti-Money Laundering detection system that analyzes raw transaction data to automatically identify fraud rings, money mule networks, and shell chains using graph-based algorithms.\n\nTech Stack: Python · FastAPI · NetworkX · Pandas · React · Vite · Tailwind CSS"},
    ];

    return (
        <section id = "projects">
            <div className="overflow-hidden mx-10 p-10">
                <p className="flex bg-gradient-to-r from-indigo-700 to-yellow-500 w-max bg-clip-text text-transparent text-5xl px-10 justify-self-center">Projects</p>
                <br></br>
                <div className="grid lg:grid-cols-2 justify-items-center">
                    {
                        projects.map(function(elem, idx){
                            return <ProjectsCard image = {elem.image} name = {elem.name} link = {elem.link} description = {elem.description}></ProjectsCard>
                        })
                    }
                </div>
            </div>
        </section>
    );

}

export default Projects;
