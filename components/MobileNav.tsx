import { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineConsoleSql } from "react-icons/ai";
import { GiHamburgerMenu } from 'react-icons/gi';
import NavLink from "./NavLink";

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const clickOutSideRef = useRef<HTMLDivElement>(null);

    const onMenuClick = () => {
        setIsMounted(!isMounted);
        if(!isOpen) setIsOpen(true);
    }

    const onCloseClick = () => {
        setIsOpen(false);
        setIsMounted(false);
    }

    useEffect(() => {
        document.body.classList.toggle("overflow-hidden", isOpen);
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (e:MouseEvent) => {
            if (clickOutSideRef.current && !clickOutSideRef.current.contains(e.target as Node)) {
                setIsOpen(false);
                setIsMounted(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }

    },[clickOutSideRef.current]);

    return (
        <nav className='block sm:hidden'>

            {isOpen ? (
                <button onClick={onMenuClick} className={`absolute right-[14px] top-[12px] sm:invisible z-20 text-4xl text-stone-200`}>
                    <AiOutlineClose />
                </button>
            ) : (
                <button onClick={onMenuClick} className={`absolute right-[14px] top-[12px] sm:invisible z-20 text-4xl text-stone-200`}>
                    <GiHamburgerMenu />
                </button>
            )}

            {isOpen && (
                <div
                    ref={clickOutSideRef}
                    style={{ backdropFilter: 'blur(15px)' }}
                    className={`${isMounted ? 'transition-in' : 'transition-out'} pt-20 bg-opacity-50 z-10 bg-stone-700 h-screen absolute right-0 top-0 left-1/4 sm:static border-l-[1px] border-stone-600/50`}
                    onAnimationEnd={() => { if (!isMounted) setIsOpen(false) }}>

                    <ul className="text-center h-full mx-auto text-2xl text-yellow-500/80 uppercase">
                        {/* <NavLink path="/work">
                                <span>Start Working</span>
                            </NavLink> */}
                        <NavLink path="/">
                            <span onClick={onCloseClick} className='hover:text-yellow-500 block py-4 border-y-[1px] border-yellow-600'>Home</span>
                        </NavLink>
                        <NavLink path="/mystory">
                            <span onClick={onCloseClick} className='hover:text-yellow-500 block py-4 border-b-[1px] border-yellow-600'>My Story</span>
                        </NavLink>
                        <NavLink path="/contact">
                            <span onClick={onCloseClick} className='hover:text-yellow-500 block py-4 border-b-[1px] border-yellow-600'>Contact</span>
                        </NavLink>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default MobileNav;