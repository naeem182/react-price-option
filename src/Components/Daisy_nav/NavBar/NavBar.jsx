import { useState } from "react";
import Link from "../../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
    const [open, setopen] = useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
    ];


    return (

        <nav className="text-black">
            <div className="  md:hidden text-3xl" onClick={() => setopen(!open)}>
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu ></AiOutlineMenu>
                }

            </div>
            <ul className={
                `${open ? "top-10" : " -top-44"} duration-1000 p-4 md:flex my-4 absolute md:static bg-purple-500`
            }>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav >
    )
}

export default NavBar
