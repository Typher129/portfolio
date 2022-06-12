import { Html, Head, Main, NextScript } from "next/document";
import { Arc } from "@components/scripts/Arc";

export default function Document({ props }) {
 return (
  <Html lang="en">
   <Head>
    <meta name="robots" content="follow, index" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#000000" />
    <link rel="shortcut icon" href="/favicons/favicon.ico" />
    <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link rel="preconnect" href="https://twemoji.maxcdn.com" />
    <Arc />
   </Head>
   <body className="bg-white dark:bg-[#040d21]">
    <Main {...props} />
    <NextScript />
   </body>
  </Html>
 );
}