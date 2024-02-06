import '../styles/globals.scss';

// import type { AppProps } from "next/app";
import { IsSsrMobileContext } from "../contexts/IsMobileContext";

export default function Application({
  Component,
  pageProps
}: AppProps<{ isSsrMobile: boolean }>) {
  return (
    <IsSsrMobileContext.Provider value={pageProps.isSsrMobile}>
      <Component {...pageProps} />
    </IsSsrMobileContext.Provider>
  );
}
