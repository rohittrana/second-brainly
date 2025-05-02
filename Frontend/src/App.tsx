import { DashBoard } from "./Pages/DashBoard";
import { Signup } from "./Pages/Signup";
import {Signin} from './Pages/Signin'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { ShareLink } from "./Pages/ShareLink";
import {Home} from './Landing/Home'
function App() {
  
  
  return (
    <>
    <BrowserRouter>
    <Routes>
    
      <Route path="/" element={<Home/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/signin" element={<Signin/>}></Route>
      <Route path="/dashboard" element={<DashBoard/>}></Route>
      <Route path="/share/:shareLink" element={<ShareLink/>}></Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
