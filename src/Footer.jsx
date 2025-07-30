import React from "react";
import Github from "./assets/Github.png"
import Linkedin from "./assets/Linkedin.png"
import Instagram from "./assets/Instagram.png"



const Footer = () => {

        return (
                
            <footer className="overflow-hidden pb-10">
                <li>
                    <ul className="grid sm:grid-flow-col">
                        <div className="flex mx-15 justify-center">
                        <a className="cursor-pointer" href = "https://github.com/amangg1029x" target="blank"><img src={Github} alt="GitHub" className="w-8 mx-3 p-1"></img></a>
                        <a className="cursor-pointer" href="https://www.linkedin.com/in/aman-gupta-a0a84832a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank"><img src={Linkedin} alt="Linkedin" className="w-8 mx-3 p-1"></img></a>
                        <a className="cursor-pointer" href="https://www.instagram.com/_a_man_gupta__" target="blank"><img src={Instagram} alt="Instagram" className="w-8 mx-3 p-1"></img></a>
                        </div>
                        <p className="text-white justify-self-center">&copy;{new Date().getFullYear()} Aman Gupta. All rights reserved.</p>
                    </ul>
                </li>
            </footer>
        );

}

export default Footer;