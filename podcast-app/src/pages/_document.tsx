import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
    render(){
        return (
            <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleeapis.com/css2?family=Intes&family=Lexend:wght@500;600&display=swap" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
            </Html>
        );
    }
}