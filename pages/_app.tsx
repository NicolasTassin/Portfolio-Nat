import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import "../public/empty.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
