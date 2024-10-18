import React, { useContext, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { FiPlusCircle } from 'react-icons/fi';
import { Context } from '../../Context/Context';
import axios from "../../Axios/axios";
import { toast } from 'react-toastify';

function UpdateProfile() {
    const [userPhoto, setUserPhoto] = useState("");
    const navigate = useNavigate();
    const photoRef = useRef(null);
    const { userData  , setuserData} = useContext(Context);
    const [username, setusername] = useState(userData.username || "");
    const [userPhotoSrc, setUserPhotoSrc] = useState(userData.photo ||"");

    const uploadToCloud = async (file) => {
        try {
            const data = new FormData();
            data.append("file", file);
            data.append("upload_preset", "instaClone");
            data.append("cloud_name", "instacloud11");
            const rawResult = await fetch("https://api.cloudinary.com/v1_1/instacloud11/image/upload", {
                method: "post",
                body: data
            });
            const result = await rawResult.json();
            return result;
        } catch (error) {
            toast.error("not able to upload your image");
        }
    }

    const handleFileChange = (e) => {
        setUserPhoto(e.target.files[0]);
    }

    
    
      const handleSubmitEdit = async (e) => {
        e.preventDefault();
    
        const result = await uploadToCloud(userPhoto);
        const body ={
            username: username,
            photo: result?.url,
        }
        const {data} = await axios.post(`/update`, body);
        
        if (data.success) {
            navigate('/profile');
            setuserData(data.user);
            toast.success("profile Updated");
        }
        else {
          toast.error(data.msg);
        }
      }

    return (
        <section className="w-full overflow-hidden dark:bg-gray-900 relative min-h-screen">
            <div className="absolute top-[1%] left-[1%] group w-fit">
                <div
                    className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                </div>
                <Link to="/profile" title="Get quote now"
                    className="relative inline-flex gap-1 items-center justify-center px-3 py-3 text-sm font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-full"
                    role="button"> <IoIosArrowBack />
                </Link>
            </div>

            <div className="w-full mx-auto">

                <img src="https://images.unsplash.com/photo-1560697529-7236591c0066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8Y292ZXJ8ZW58MHwwfHx8MTcxMDQ4MTEwNnww&ixlib=rb-4.0.3&q=80&w=1080" alt="User Cover"
                    className="w-full xl:h-[15rem] lg:h-[15rem] md:h-[16rem] sm:h-[13rem] h-[9.5rem] object-cover" />


                <div className="w-full mx-auto flex justify-center">
                    <div className="overflow-hidden group relative xl:w-[11rem] xl:h-[11rem] lg:w-[11rem] lg:h-[11rem] md:w-[12rem] md:h-[12rem] sm:w-[8rem] sm:h-[8rem] w-[6rem] h-[6rem] outline outline-2 outline-offset-2 outline-yellow-500 shadow-xl xl:bottom-[7rem] lg:bottom-[8rem] md:bottom-[6rem] bottom-[4.3rem] border-2 rounded-full bg-[#F5F7FA] flex items-center justify-center">
                        {userPhotoSrc && <img src={userPhotoSrc} height={50} width={50} alt="p1" className="w-full h-full object-cover object-center rounded-full" />}
                        {userPhotoSrc && <button className='text-lg absolute h-1/2 w-full duration-500 -bottom-[100%] group-hover:bottom-0 text-white bg-red-400' onClick={() => photoRef.current.click()} >Change profile</button>}
                        {!userPhotoSrc && <FiPlusCircle className="text-2xl opacity-70" onClick={() => photoRef.current.click()} />}
                        <input type="file" className="hidden" name="userPhoto" ref={photoRef} onChange={(e) => { handleFileChange(e); setUserPhotoSrc(URL.createObjectURL(e.target.files[0])) }} />
                    </div>

                </div>

            </div>

            <form className="w-full" onSubmit={handleSubmitEdit}>
                <div className='md:w-[35%] mx-auto px-6 py-3'>
                <input className="px-3 mt-2 py-2 border-2 border-zinc-800 rounded-md block w-full bg-zinc-900 bg-transparent text-white" type="text" placeholder="username" name="username" value={username} onChange={(e) => { setusername(e.target.value) }} />
                <button className="w-full bg-blue-500 px-3 py-3 rounded-md mt-2 text-white" type="submit">Update Details</button>
                </div>
            </form>

        </section>


    )
}

export default UpdateProfile