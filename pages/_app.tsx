/* eslint-disable @next/next/no-img-element */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../layouts/Layout';
import bg from '../public/Group1.svg';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '../components/MDXComponents';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <MDXProvider components={MDXComponents}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </MDXProvider>
        </>
    );
}

export default MyApp
