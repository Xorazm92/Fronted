import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Outlet } from "react-router-dom";
export const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
};