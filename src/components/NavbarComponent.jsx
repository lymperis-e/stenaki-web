import { useRef } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Button, Menu } from "react-daisyui";
import Logo from "./Logo";
import LogoImg from "../assets/logo_rect.png"
import NavLinks from "./nav/NavLinks";

function NavbarComponent(args) {
    const dropdownRef = useRef(null);

    const handleNavLinkClick = () => {
        dropdownRef.current?.click();
    };

    return (
        <>

            <div className="z-50 flex w-full component-preview bg-base-100 p-4 items-center justify-center gap-2 font-sans fixed top-[0] ">
                <Navbar >
                    <Navbar.Start>

                        <Logo link='/'>
                            <img src={LogoImg} alt="" className="w-40 logo-img" />
                        </Logo>

                    </Navbar.Start>


                    <Navbar.Center className="hidden lg:flex ">

                    </Navbar.Center>

                    <Navbar.End className="hidden md:flex">
                        <NavLinks></NavLinks>
                    </Navbar.End>


                </Navbar>
            </div>




            <div className="z-50 flex w-full component-preview p-4 items-center justify-center gap-2 font-sans fixed bottom-[0]  md:hidden bg-base-200">
                <Navbar >
                    <Navbar.Start>
                    </Navbar.Start>

                    <Navbar.Center className="flex flex-row w-full items-center">
                        <NavLinks></NavLinks>
                    </Navbar.Center>

                    <Navbar.End >
                    </Navbar.End>


                </Navbar>
            </div>
            <Outlet />
        </>



    );
};

export default NavbarComponent;