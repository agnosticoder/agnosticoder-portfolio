/* eslint-disable @next/next/no-img-element */
import '../styles/main.css'
import 'highlight.js/styles/atom-one-dark.css';
import type { AppProps } from 'next/app'
import Layout from '../layouts/Layout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import NProgress from 'nprogress';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()

    useEffect(() => {
      const handleStart = (url: any) => {
        NProgress.start()
      }
      const handleStop = () => {
        NProgress.done()
      }
  
      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleStop)
      router.events.on('routeChangeError', handleStop)
  
      return () => {
        router.events.off('routeChangeStart', handleStart)
        router.events.off('routeChangeComplete', handleStop)
        router.events.off('routeChangeError', handleStop)
      }
    }, [router])

    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp
