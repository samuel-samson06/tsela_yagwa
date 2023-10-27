import { Outlet } from "react-router-dom"
//import Footer from "./Footer"
import Header from "./Header"
import { Suspense, lazy } from "react"
const Footer=lazy(function(){
  return import("./Footer")
})


function Navigation() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <Suspense fallback={<p>Loading...</p>}>
          <Footer/>
        </Suspense>
      </footer>
    </div>
  )
}

export default Navigation