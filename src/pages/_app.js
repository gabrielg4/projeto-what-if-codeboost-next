import { globalStyles } from  "../styles/global";

import { Header } from '../components/Header';
import {Footer } from '../components/footer';

globalStyles();


export default function App({ Component, pageProps }) {
  return (
    <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
  )

}

