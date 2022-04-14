import Link from "next/link";

interface NavLinkProps{
    path: string,
    linkName: string
}

const NavLink = ({ path, linkName }: NavLinkProps) => {
    return (
        <li>
            <Link href={path}>
                <a>
                    {linkName}
                </a>
            </Link>
        </li>
    );
};

export default NavLink;
