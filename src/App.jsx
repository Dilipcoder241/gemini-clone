import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./Components/HomePage/Home";
import Login from "./Components/LoginPage/Login";
import Register from "./Components/RegisterPage/Register"
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {


  return (
    <>
    <ToastContainer 
      position="top-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      theme="dark"/>
    <Router>
      <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
