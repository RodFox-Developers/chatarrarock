import { Outlet } from "react-router-dom";
import MainNavigation from "../components/shared/MainNavigation";
import Footer from "../components/shared/Footer";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>  
      <Footer />    
    </>
  )
}

export default RootLayout;