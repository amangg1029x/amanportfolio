import React from "react";

const Header = () => {

    return (

        <header className="w-full grid grid-flow-col justify-items-center bg-black text-white fixed top-0">
            <h1 className="bg-gradient-to-r from-amber-200 to-blue-200 bg-clip-text text-transparent text-4xl py-3 my-4">Aman Gupta</h1>
            <nav className="flex px-7 py-3 my-5 gap-10 justify-start text-xl">
                <a href="#home" className="transition-all hover:scale-130">Home</a>
                <a href="#about" className="transition-all hover:scale-130">About</a>
                <a href="#projects" className="transition-all hover:scale-130">Projects</a>
                <a href="#contact" className="transition-all hover:scale-130">Contact</a>
            </nav>
        </header>

    );

}

export default Header;