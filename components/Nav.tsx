"use client"
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from 'next/navigation';
import { Link as CustomLink } from "react-scroll";


const NavMenu = () => {
    const [menuClosed, setMenuClosed] = useState<boolean>(true);

    const menuToggle = () => {
        setMenuClosed(!menuClosed);
    };

    let menuClose = () => {
        setMenuClosed(true);
    };

    // Close menu with off click
    let menuRef = useRef<null | HTMLInputElement>(null);
    useEffect(() => {
        document.addEventListener("mousedown", (event) => {
            if (menuRef.current == null || menuRef.current == undefined) {
                // pass
            } else if (!menuRef.current.contains(event.target as Node)) {
                setMenuClosed(true)
            }
        });
    });

    const pathname = usePathname();

    return (
        <>
            {pathname !== '/contact-success' ?

                <nav className="nav_container">
                    <CustomLink
                        to="home"
                        className="logo_container"
                        onClick={menuClose}
                        offset={-300}
                        smooth={true}
                        delay={10}
                        duration={175}
                    >
                        <span className="logo">{'<SM>'}</span>
                    </CustomLink>

                    <div className="button_container">
                        <button onClick={menuToggle} className="button">
                            <svg
                                className="fill-current h-6 w-6"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>

                    <div
                        ref={menuRef}
                        className={"nav_bar " + (menuClosed ? "lg:visible hidden" : "")}
                    >
                        <div className="nav_items">
                            <CustomLink
                                to="home"
                                className="nav_link"
                                onClick={menuToggle}
                                offset={-300}
                                smooth={true}
                                delay={10}
                                duration={175}
                            >
                                HOME
                            </CustomLink>

                            <CustomLink
                                to="about"
                                className="nav_link"
                                onClick={menuToggle}
                                offset={-80}
                                smooth={true}
                                delay={10}
                                duration={175}
                            >
                                ABOUT
                            </CustomLink>

                            <CustomLink
                                to="skills"
                                className="nav_link"
                                onClick={menuToggle}
                                offset={-80}
                                smooth={true}
                                delay={10}
                                duration={175}
                            >
                                SKILLS
                            </CustomLink>

                            <CustomLink
                                to="contact"
                                className="nav_link"
                                onClick={menuToggle}
                                offset={-80}
                                smooth={true}
                                delay={10}
                                duration={175}
                            >
                                CONTACT
                            </CustomLink>
                        </div>
                    </div>
                </nav>
                : <></>}
        </>
    );
}

export default NavMenu;
