import Head from 'next/head';
import Link from 'next/link';
import { FC } from 'react';
import NavLink from '../components/NavLink';

const Layout: FC = ({ children }) => (
    <>
        <Head>
            <title>App Title will go here</title>
        </Head>
        <div className="text-slate-800 min-h-screen w-screen">
            <div>
                <div className="w-11/12 sm:max-w-3xl mx-auto mb-4">
                    <div className="min-h-20 pb-4 flex items-end justify-between flex-wrap">
                        <NavLink path="/">
                            <h1 className="text-5xl text-stone-300 break-words list-none">
                                <span className="text-yellow-500">A</span>gnosti
                                <span className="text-yellow-500">c</span>oder
                            </h1>
                        </NavLink>
                        <ul className="flex gap-2 text-yellow-500">
                            <NavLink path="/work">
                                <span className="hover:bg-slate-400">Start Working</span>
                            </NavLink>
                            <NavLink path="/">
                                <span>My Story</span>
                            </NavLink>
                            <NavLink path="/">
                                <span>Links</span>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-11/12 sm:max-w-3xl mx-auto">
                <main>{children}</main>
            </div>
        </div>
    </>
);

export default Layout;
