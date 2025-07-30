import React from "react";
import AmanGuptaImg from "./assets/Aman-Gupta-Img.jpeg"

const About = () => {

    return (
        <section id="about">
            <div className="overflow-hidden grid xl:grid-cols-6 grid-rows-3 mx-10 mt-40 sm:mt-24 p-10">
                    <img src={AmanGuptaImg} alt="Aman Gupta" className="md:w-90 rounded-full col-span-2 row-span-3"></img>
                    <p className="w-max bg-gradient-to-r from-blue-500 to-pink-600 bg-clip-text text-transparent text-5xl col-span-2 my-10">Who am I?</p>
                    <p className="text-white text-xl col-span-3">I build websites that don’t just look good — they work beautifully. Whether it’s a dynamic single-page app or a pixel-perfect landing page, I enjoy the process of bringing ideas to life through code. Always learning, always building.</p>
            </div>
        </section>

    );

}

export default About;