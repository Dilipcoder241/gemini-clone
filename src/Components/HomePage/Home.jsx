import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Chat from "../Chat";
import { useContext, useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import axios from "../../Axios/axios";
import { toast } from "react-toastify";
import { Context } from "../../Context/Context";



export default function Home() {

  const [showSidebar, setShowSidebar] = useState(true);
  const { setuserData } = useContext(Context);

  const getUser = async () => {
    try {
      const { data } = await axios.get('/');
      setuserData(data?.user);
    } catch (error) {
      toast.error(error?.response?.data.msg);
    }
  }


  useEffect(() => {

    getUser();

    if (window.innerWidth < 400) {
      setShowSidebar(false);
    }
    // Function to check and update the state based on screen width
    const handleResize = () => {
      if (window.innerWidth < 400) {
        setShowSidebar(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="min-h-screen w-full overflow-y-scroll relative bg-gray-900 text-white">
      <div className="flex gap-2 h-screen">
        <div className={`h-full sidebar overflow-y-scroll ease-linear duration-200 absolute z-[100] lg:static text-gray-400 bg-gray-800 md:shrink-0 ${showSidebar ? "max-[370px]:w-full w-2/5 sm:w-2/4 md:w-2/6 lg:w-1/5" : "w-0"}`}>
          <Sidebar setShowSidebar={setShowSidebar} />
        </div>
        <div className="flex flex-col w-full min-h-screen overflow-y-scroll">
          <div className="flex items-center">
            {!showSidebar && <button onClick={() => { setShowSidebar(prev => !prev) }} className='hover:bg-gray-600 hover:text-white p-2 rounded-full w-fit'><IoMenu size={20} /></button>}
            <Navbar />
          </div>
          <Chat />
        </div>
      </div>
    </div>
  )
}
