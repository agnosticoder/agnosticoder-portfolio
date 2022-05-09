import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'

const MyDocument = () => {

    return (
        <Html lang="en">
            <Head />
            <body className=''>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};
export default MyDocument;