import "./styles/styles.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import SignIn from "./components/pages/SignIn"
import Classes from "./components/pages/Classes"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}> 
            <Route index element={<Home/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/classes" element={<Classes/>} />
          </Route>
      </Routes>
      
    </BrowserRouter>
    

  )
}

export default App
