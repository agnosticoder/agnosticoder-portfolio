import Link from "next/link";

interface NavLinkProps{
    path: string,
    linkName: string
}

const NavLink = ({ path, linkName }: NavLinkProps) => {
    return (
        <li>
            <Link href={path}>
                <a className="mr-4 text-slate-400 bg-slate-600 p-1 rounded-sm hover:bg-zinc-600 transition-colors duration-75 ease-in-out">
                    {linkName}
                </a>
            </Link>
        </li>
    );
};

export default NavLink;
