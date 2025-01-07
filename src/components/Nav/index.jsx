import React from 'react'
import { FaGithub, FaInstagram, FaLink, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Link } from 'react-router';


const NavBar = () => {
    return (
        <>
            <nav className='flex w-full items-center justify-between p-4 sticky top-0 left-0 bg-white'>
                <Link to={'/'}>
                    <div className='flex items-center gap-1'>
                        <h1 className='text-primary text-3xl font-bold'>Travelling.</h1>
                    </div>
                </Link>

                <Drawer>
                    <DrawerTrigger asChild>
                        <button className='text-primary'>
                            <IoMenuSharp className='text-4xl' />
                        </button>
                    </DrawerTrigger>

                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle className='text-primary'>About Me</DrawerTitle>
                        </DrawerHeader>

                        <div className='flex w-full items-center justify-center gap-3'>
                            <a href="https://github.com/arthurgranito" target='_blank' className='flex flex-col items-center gap-1 font-medium text-2xl text-primary'>
                                <FaGithub />
                                <span className='text-sm'>Github</span>
                            </a>

                            <a href="https://instagram.com/arthurgranito_" className='text-primary flex flex-col items-center gap-1 font-medium text-2xl'>
                                <FaInstagram />
                                <span className="text-sm">Instagram</span>
                            </a>

                            <a href="www.linkedin.com/in/arthur-granito-b28721320" className='text-primary flex flex-col items-center gap-1 font-medium text-2xl'>
                                <FaLinkedin />
                                <span className="text-sm">Linkedin</span>
                            </a>
                        </div>
                        <DrawerFooter></DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </nav>
        </>
    )
}

export default NavBar