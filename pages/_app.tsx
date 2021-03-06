/* eslint-disable @next/next/no-img-element */
import '../styles/main.css'
import 'highlight.js/styles/atom-one-dark.css';
import type { AppProps } from 'next/app'
import Layout from '../layouts/Layout';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp
