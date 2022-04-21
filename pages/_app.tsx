/* eslint-disable @next/next/no-img-element */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../layouts/Layout';
import bg from '../public/Group1.svg';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Layout>
                <div className="inset-0 -z-10 fixed">
                    <img className="object-cover w-screen h-screen" src={'./background.svg'} alt="Background SVG" />
                </div>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp
