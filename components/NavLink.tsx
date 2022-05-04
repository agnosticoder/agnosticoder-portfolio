import Link from "next/link";

interface NavLinkProps{
    path: string,
    children: JSX.Element | string
}

const NavLink = ({ path,children}: NavLinkProps) => {
    return (
        <li className="list-none">
            <Link href={path}>
                <a>
                    {children}
                </a>
            </Link>
        </li>
    );
};

export default NavLink;
