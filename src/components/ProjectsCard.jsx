import React from "react";

const ProjectsCard = (props) => {

    return (
        <a href = "#projects">
        <button className="sm:w-fit w-min p-10 sm:m-10 m-5 grid w-max border border-blue-900 rounded-4xl justify-items-center bg-gray-900 cursor-pointer inline-block">
            <img src={props.image} alt={props.name} className="2xl:w-120 md:w-80"></img>
            <br></br>
            <p className="text-white text-3xl">{props.name}</p>
            <br></br>
            <p className="text-white">{props.description}</p>
        </button></a>

    );

}

export default ProjectsCard;