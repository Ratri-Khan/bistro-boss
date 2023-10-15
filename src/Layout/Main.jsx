import { Outlet, useLocation } from "react-router-dom";
import Header from "../Component/Shared/Header";


const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes("login");
    return (
        <div>
            {noHeaderFooter || <Header></Header>}
            <Outlet></Outlet>
        </div>
    );
};

export default Main;