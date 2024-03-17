import Chat from "./Components/Chat"
import Navbar from "./Components/Navbar"
import Sidebar from "./Components/Sidebar"

function App() {


  return (
    <div className="min-h-screen w-full">
      <div className="flex gap-2 h-screen">
        <Sidebar/>
        <div className="flex flex-col w-full h-screen">
          <Navbar/>
          <Chat/>
        </div>
      </div>
    </div>
  )
}

export default App
