import { Navbar } from "../components";
import { Outlet } from "react-router-dom";
const Principal = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Principal;
