import React from 'react'
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

function ProfilePage() {
    return (
        <section className="w-full overflow-hidden dark:bg-gray-900 relative min-h-screen">
            <div className="absolute top-[1%] left-[1%] group w-fit">
                <div
                    className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                </div>
                <Link to="/home" title="Get quote now"
                    className="relative inline-flex gap-1 items-center justify-center px-3 py-3 text-sm font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-full"
                    role="button"> <IoIosArrowBack />
                </Link>
            </div>

            <div className="w-full mx-auto">

                <img src="https://images.unsplash.com/photo-1560697529-7236591c0066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8Y292ZXJ8ZW58MHwwfHx8MTcxMDQ4MTEwNnww&ixlib=rb-4.0.3&q=80&w=1080" alt="User Cover"
                    className="w-full xl:h-[15rem] lg:h-[15rem] md:h-[16rem] sm:h-[13rem] h-[9.5rem] object-cover" />


                <div className="w-full mx-auto flex justify-center">
                    <img src="https://plus.unsplash.com/premium_photo-1664366737698-3a98169201c3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User Profile"
                        className="rounded-full object-cover xl:w-[11rem] xl:h-[11rem] lg:w-[11rem] lg:h-[11rem] md:w-[12rem] md:h-[12rem] sm:w-[8rem] sm:h-[8rem] w-[6rem] h-[6rem] outline outline-2 outline-offset-2 outline-yellow-500 shadow-xl relative xl:bottom-[7rem] lg:bottom-[8rem] md:bottom-[6rem] bottom-[4.3rem]" />
                </div>

                <div className="xl:w-[80%] lg:w-[90%] md:w-[94%] sm:w-[96%] w-[92%] mx-auto flex flex-col gap-4 justify-center items-center relative xl:-top-[6rem] lg:-top-[6rem] md:-top-[4rem] sm:-top-[3rem] -top-[2.2rem]">

                    <h1 className="text-center text-gray-800 dark:text-white text-4xl font-serif">User Name</h1>

                </div>
            </div>
        </section>
    )
}

export default ProfilePage