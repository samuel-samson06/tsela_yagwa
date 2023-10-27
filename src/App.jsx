import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navigation from "./pages/navigation/Navigation"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Marketplace from "./pages/marketPlace/Marketplace"
import Events from "./pages/events/Events"
import Registration from "./pages/registration/Registration"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route path="/" index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="marketplace" element={<Marketplace/>}/>
          <Route path="event" element={<Events/>}/>
          <Route path="register" element={<Registration/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App