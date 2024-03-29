import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import BottomNavbar from "./components/navbar/bottom.navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <BottomNavbar />
    </>
  );
}

export default App;
