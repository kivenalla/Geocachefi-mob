"use client";

import { useState, useContext } from "react";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import { AiOutlineUser } from "react-icons/ai";
import { GrLogout, GrLogin } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { Accordion } from "react-bootstrap";

import "./Navbar.scss";
import gcfiLogo from "@/old/images/gcfi.svg";
import premiumOn from "@/old/images/premium_on.png";

import CustomModal from "@/old/components/LoginRegisterModal";
import OffcanvasMenu from "@/old/components/OffcanvasMenu";
import Spinner from "@/old/components/Spinner";

import UserContext from "@/old/context/UserContext";
import { logout } from "@/old/api/auth";
import Image from "next/image";
import { apiBaseUrl, apiOAuthAuthorizeUrl } from "@/old/utils/env";
interface Props {
    fixedTop?: boolean;
}

const NavBar = ({ fixedTop = false }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const [navMenuOpen, setNavMenuOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const userContext = useContext(UserContext);
    
    const toggleModal = () => setIsOpen(!isOpen);
    const toggleUserDropdown = () => setShowUserDropdown(!showUserDropdown);
    const openNavMenu = () => setNavMenuOpen(true);
    const closeNavMenu = () => setNavMenuOpen(false);
    
    const handleLogout = async () => {
        try {
            setLoading(true);
            await logout();
            userContext?.setUser(null);
            setShowUserDropdown(false);
        } finally {
            setLoading(false);
        }
    };
    
    const getPremiumContent = (isPremium: boolean) => {
        if (isPremium) {
            return (
                <img
                    aria-label="Premium user"
                    id="premium-logo"
                    src={premiumOn.src}
                    alt="Premium"
                />
            );
        }
        return null;
    };
    
    return (
        <>
            <div className={`gc-navbar ${fixedTop ? "gc-navbar--fixed" : ""}`}>
                <div className="gc-navbar-content">
                    <div
                        className="gc-navbar-item gc-navbar-item--left"
                        aria-label="Avaa valikko"
                        onClick={openNavMenu}
                        role="button"
                    >
                        <RxHamburgerMenu size="30px" color="white" />
                    </div>
                    
                    <div className="gc-navbar-item">
                        <Link href="/" aria-label="Etusivulle">
                            <Image src={gcfiLogo} className="logo-navbar" alt="Geocaching FI Logo"  />
                        </Link>
                    </div>
                    
                    <div
                        className="gc-navbar-item gc-navbar-item--right"
                        onClick={toggleUserDropdown}
                        aria-label="Käyttäjätiedot"
                        role="button"
                    >
                        {userContext?.user && (
                            <span className="gc-navbar-username">{userContext.user?.username}</span>
                        )}
                        <div className="user-icon-wrapper">
                            <AiOutlineUser size="30px" color="white" />
                            {userContext?.user?.isPremium && (
                                <span className="premium-star">★</span>
                            )}
                        </div>
                        
                        {showUserDropdown && (
                            <div className="gc-navbar-user-menu">
                                {userContext?.user ? (
                                    <>
                                        <div className="dropdown-item">
                                            {userContext.user.username}{" "}
                                            {getPremiumContent(userContext.user.isPremium)}
                                        </div>
                                        <div className="dropdown-item">Saldo: 0.00 €</div>
                                        <hr />
                                        <button
                                            className="dropdown-item"
                                            onClick={handleLogout}
                                            disabled={loading}
                                        >
                                            {loading ? (
                                                <Spinner size="25px" />
                                            ) : (
                                                <GrLogout size="25px" />
                                            )}{" "}
                                            Kirjaudu ulos
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button className="dropdown-item" onClick={toggleModal}>
                                            <GrLogin size="25px" /> Kirjaudu/Rekisteröidy
                                        </button>
                                        <button className="dropdown-item mt-3 pr-2" onClick={(event) => {
                                            event.preventDefault()
                                            window.location.href = apiOAuthAuthorizeUrl
                                        }}>
                                            <GrLogin size="25px" /> Geocaching.com
                                        </button>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
            <OffcanvasMenu
                open={navMenuOpen}
                onClose={closeNavMenu}
                header="Valikko"
                body={
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Kätköt</Accordion.Header>
                            <Accordion.Body>
                                <Nav.Link as={Link} href="/map">
                                    Kartta
                                </Nav.Link>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                }
                footer={<></>}
            />
            
            <CustomModal
                onFormSubmit={toggleUserDropdown}
                isOpen={isOpen}
                toggle={toggleModal}
            />
        </>
    );
};

export default NavBar;
