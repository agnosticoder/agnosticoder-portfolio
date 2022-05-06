/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import { FC } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiOutlineMail } from 'react-icons/ai';
import NavLink from '../components/NavLink';
import backgroundSVG from '../public/background.svg';

const Layout: FC = ({ children }) => (
    <>
        <Head>
            <title>App Title will go here</title>
        </Head>
        <div className="text-stone-300 bg-stone-900 min-h-screen w-screen relative pt-32 pb-60">
            {/* //? should I undo this */}
            {/* <div className="inset-0 -z-10 fixed">
                <img className="object-cover w-screen h-screen" src={backgroundSVG.src} alt="Background SVG" />
            </div> */}
            <div className='fixed top-0 z-50 w-full bg-stone-900'>
                <div className="bg-stone-900 w-11/12 sm:max-w-3xl mx-auto pt-2 sm:pt-8">
                    <div className="min-h-20 pb-4 flex items-end justify-between flex-wrap">
                        <NavLink path="/">
                            <h1 className="text-5xl text-stone-300 break-words list-none">
                                <span className="text-yellow-500">A</span>gnosti
                                <span className="text-yellow-500">c</span>oder
                            </h1>
                        </NavLink>
                        <ul className="flex gap-4 text-yellow-500 uppercase font-light tracking-tighter">
                            <NavLink path="/work">
                                <span>Start Working</span>
                            </NavLink>
                            <NavLink path="/mystory">
                                <span>My Story</span>
                            </NavLink>
                            <NavLink path="/contact">
                                <span>Contact</span>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-11/12 sm:max-w-3xl mx-auto text-stone-300">
                <main>{children}</main>
            </div>
            <footer className='absolute bottom-0 left-0 right-0 text-stone-300 bg-stone-800/40'>
                <div className='py-4 sm:py-12'>
                    <div className='flex flex-col gap-4 items-center sm:items-start sm:flex-row justify-between w-11/12 sm:max-w-3xl mx-auto'>
                        <div>
                            <h1 className="text-3xl text-stone-300 break-words list-none">
                                <span className="text-yellow-500">A</span>gnosti
                                <span className="text-yellow-500">c</span>oder
                            </h1>
                        </div>
                        <div>
                            <ul>
                                <NavLink path="/mystory">About Me</NavLink>
                                <NavLink path="/contact">Contact Me</NavLink>
                            </ul>
                        </div>
                        <div>
                            <div className="flex justify-center gap-4 text-3xl">
                                <a title='github' href='https://github.com/agnosticoder' target='github'>
                                    <AiFillGithub />
                                </a>
                                <a title='linkedin' href='https://www.linkedin.com/in/agnonsticoder/' target='linkedin'>
                                    <AiFillLinkedin />
                                </a>
                                <a title='twitter' href='https://twitter.com/agnosticoder' target='twitter'>
                                    <AiFillTwitterCircle />
                                </a>
                                <a title='instagram' href='https://www.instagram.com/satinder_singh_taak/' target='instagram'>
                                    <AiFillInstagram />
                                </a>
                                <a title='email' href='mailto:agnosticoder@gmail.com'>
                                    <AiOutlineMail />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='text-[8px] text-center mb-2'>© 2022-present Satinder Singh.All Rights Reserved</div>
                </div>
            </footer>
        </div>
    </>
);

export default Layout;
