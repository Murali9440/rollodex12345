import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Aboutus from "./pages/Aboutus/Aboutus"

const App = () =>{
    return(
        <>
         <Routes>
             <Route path='/' element ={<Home />} />
             <Route path='/aboutus' element ={<Aboutus />}  />
         </Routes>
        </>
    )
}

export default App 
