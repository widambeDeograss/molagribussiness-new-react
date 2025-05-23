import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";


function Layout() {
  return (
    <div>
      <TopBar />
      <div className="flex-1">
        <Outlet />
      </div>
      <div className="">
      <Footer /> 
      </div>
    </div>
  );
}

export default Layout;
