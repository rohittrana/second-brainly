import { DashBoard } from "./Pages/DashBoard";
import { Signup } from "./Pages/Signup";
import {Signin} from './Pages/Signin'
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  
  
  return (
    <>
    <BrowserRouter>
    <Routes>
    
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/signin" element={<Signin/>}></Route>
      <Route path="/dashboard" element={<DashBoard/>}></Route>
    </Routes>
    </BrowserRouter>
    {/* <DashBoard></DashBoard> */}
    </>
  )
}

export default App
