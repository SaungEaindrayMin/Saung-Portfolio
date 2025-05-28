import { Outlet } from "react-router-dom";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";

const Main = () => (
  <div className="flex flex-col min-h-screen">
    <Nav />
    <div className="flex-grow pt-14">
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default Main;
