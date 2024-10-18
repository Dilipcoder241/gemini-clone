import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { Context } from '../../Context/Context';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from "../../Axios/axios";
import { toast } from 'react-toastify';

function ProfilePage() {
    const { userData , setuserData } = useContext(Context);
    const navigate = useNavigate()

    const handleDelete = async(id) =>{
        try {
            const {data} = await axios.post('/delete/:id' , {id});
            if(data.success){
              setuserData(data.user);
              toast.success(" Deleted Successfull");
            } 
            
          } catch (error) {
            toast.error(error.response.data.msg);
          }
    };

    useEffect(() => {
      const token  = localStorage.getItem("Token");
      if(!token){
        navigate("/login");
      }
    }, [])
    



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
                    <div className="overflow-hidden group relative xl:w-[11rem] xl:h-[11rem] lg:w-[11rem] lg:h-[11rem] md:w-[12rem] md:h-[12rem] sm:w-[8rem] sm:h-[8rem] w-[6rem] h-[6rem] outline outline-2 outline-offset-2 outline-yellow-500 shadow-xl xl:bottom-[7rem] lg:bottom-[8rem] md:bottom-[6rem] bottom-[4.3rem] border-2 rounded-full bg-[#F5F7FA] flex items-center justify-center">
                        {userData?.photo?.length > 0 ?<img src={userData?.photo} height={50} width={50} alt="p1" className="w-full h-full object-conver object-center rounded-full" />:<div className='text-4xl capitalize bg-gray-900 text-white w-full h-full flex items-center justify-center'>d</div>}
                    </div>
                </div>

                <div className="xl:w-[80%] lg:w-[90%] md:w-[94%] sm:w-[96%] w-[92%] mx-auto flex flex-col gap-4 justify-center items-center relative xl:-top-[6rem] lg:-top-[6rem] md:-top-[4rem] sm:-top-[3rem] -top-[2.2rem]">
                    <h1 className="text-center text-gray-800 dark:text-white text-4xl font-serif capitalize">Username: {userData ? userData?.username : "User Name"}</h1>
                </div>

                <div className="relative group w-fit rounded-xl mx-auto">
                    <div
                        className="absolute transitiona-all duration-1000 opacity-0 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                    </div>
                    <Link to="/updateProfile"
                        className="relative inline-flex gap-1 items-center justify-center px-3 py-3 text-sm font-bold text-gray-400 hover:text-white transition-all duration-200 bg-gray-800 font-pj rounded-full"
                        role="button"> Update Profile
                    </Link>
                </div>
            </div>

            <h1 className='text-white text-xl md:text-4xl text-center py-5'>Your Previously Asked Questions</h1>
            <div className='text-white w-[80%] md:w-[60%] mx-auto'>
                {userData?.chats?.map((item)=>(
                <Accordion key={item._id} style={{ backgroundColor: "#0000", color: "white", border: "1px solid white" }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon className='text-white' />} >
                        {item.question}
                    </AccordionSummary>
                    <AccordionDetails style={{ borderTop: "1px solid #636363" ,display:"flex" , flexDirection:"column" , gap:"10px"}}>
                        {item.answer}
                        <button className='static bottom-1 right-1 bg-red-700 px-2 py-1 rounded-md mt-5' onClick={()=>{handleDelete(item._id)}}>delete this question</button>
                    </AccordionDetails>
                </Accordion>
                ))}

            </div>

        </section>


    )
}

export default ProfilePage