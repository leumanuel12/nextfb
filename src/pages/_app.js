import "@/styles/globals.css";
import { useContext, useEffect } from "react";
import Header from "./components/Header";
import GlobalContextProvider, {
  useGlobalContext,
} from "./context/globalcontext";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout;

  const { loggedIn, setLoggedIn } = useGlobalContext();

  if (Component.getLayout) {
    return getLayout(
      <GlobalContextProvider>
        <Component {...pageProps} />
      </GlobalContextProvider>
    );
  }

  return (
    <GlobalContextProvider>
      <Header>
        <Component {...pageProps} />
      </Header>
    </GlobalContextProvider>
  );
}
