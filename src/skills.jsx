import React from "react";

import SkillsCard from "./components/SkillsCard";

import Git from "./assets/git.svg"
import Java from "./assets/Java.png"
import MySQL from "./assets/mysql.png"
import Python from "./assets/python.png"
import Reacts from "./assets/react.svg"
import Tailwind from "./assets/tailwind.png"


const Skills = () => {

    const skills = [
        { name: 'React.js', image: Reacts},
        { name: 'Java', image: Java},
        { name: 'Python', image: Python},
        { name: 'MySQL', image: MySQL},
        { name: 'Tailwind CSS', image: Tailwind},
        { name: 'Git', image: Git}
    ];

    return (
        <section id = "skills">
            <div className="overflow-hidden mx-10 p-10">
                <p className="flex bg-gradient-to-r from-green-500 to-blue-500 w-max bg-clip-text text-transparent text-5xl px-10 justify-self-center">Skills</p>
                <br></br>
                <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center">
                    {
                        skills.map(function(elem, idx){
                            return <SkillsCard key = {idx} name = {elem.name} image = {elem.image}></SkillsCard>
                        })
                    }
                </div>
            </div>
        </section>

    );

}

export default Skills;
