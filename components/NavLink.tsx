import Link from "next/link";
import { useRouter } from "next/router";

interface NavLinkProps{
    path: string,
    children: JSX.Element | string
}

const NavLink = ({ path,children, ...rest}: NavLinkProps) => {
    const router = useRouter();

    return (
        <li className={`list-none ${router.pathname === path && 'bg-yellow-500/20 sm:bg-transparent sm:border-b-2 sm:border-yellow-600 sm:border-dashed'}`} {...rest}>
            <Link href={path}>
                <a>
                    {children}
                </a>
            </Link>
        </li>
    );
};

export default NavLink;
