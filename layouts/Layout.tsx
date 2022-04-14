import Head from 'next/head';
import Link from 'next/link';
import { FC } from 'react';
import NavLink from '../components/NavLink';

const Layout: FC = ({ children }) => (
    <>
        <Head>
            <title>App Title will go here</title>
        </Head>
        <div className="bg-gradient-to-r from-slate-500 to-slate-600 text-slate-800 min-h-screen">
            <div className="bg-gradient-to-r from-slate-400 to-slate-500">
                <div className="max-w-xl mx-auto">
                    <div className="min-h-20 pb-4">
                        <h1 className="text-4xl text-slate-800 font-bold mb-4 break-words">Agnosticoder</h1>
                        <ul className="flex">
                            {/* <NavLink linkName="Home" path="/" />
                            <NavLink linkName="Blog" path="/" /> */}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-11/12 sm:max-w-xl mx-auto">
                <main>{children}</main>
            </div>
        </div>
    </>
);

export default Layout;
