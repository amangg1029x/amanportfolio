import React from "react";

const Contact = () => {

    return (

        <section id = "contact">
            <div className="overflow-hidden sm:mx-10 sm:p-10">
                <p className="flex bg-gradient-to-r from-pink-600 to-white/20 w-max bg-clip-text text-transparent text-5xl px-10 justify-self-center">Contact</p>
                <br></br>
                <div className="flex justify-center p-5 border border-white rounded-2xl bg-slate-950 mx-15">
                    <form className="overflow-hidden flex flex-col gap-5">
                        <input required type="text" placeholder="Name" className="text-white sm:w-150 p-5 mt-5 mx-5 border border-white rounded-2xl"></input>
                        <input required type="email" placeholder="Email Address" className="text-white sm:w-150 p-5 mx-5 border border-white rounded-2xl"></input>
                        <input required type="text" placeholder="Purpose" className="text-white sm:w-150 p-5 mx-5 border border-white rounded-2xl"></input>
                        <button className="text-white text-2xl sm:w-50 bg-lime-500 p-4 rounded-4xl mx-5 mb-5 overflow-hidden self-center">Submit</button>
                    </form>
                </div>
            </div>
        </section>

    );

}

export default Contact;
