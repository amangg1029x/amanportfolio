import React from "react";


const SkillsCard = (props) => {

    return (
        
        <div className="p-10 my-10 grid border border-blue-900 hover:bg-radial from-blue-900 rounded-4xl justify-items-center bg-gray-900 ease-in-out transition-all inline-block place static">
            <img src={props.image} alt={props.name} className="2xl:w-60 sm:w-50 w-30"></img>
            <br></br>
            <p className="text-white text-3xl">{props.name}</p>
        </div>

    );

}

export default SkillsCard;