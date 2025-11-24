import { Outlet } from "react-router-dom";
import Nav from "@/components/common/nav";
import Footer from "@/components/common/footer";

const NavLayout = () => {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    );
}

export default NavLayout;