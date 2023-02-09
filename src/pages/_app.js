import "@/styles/globals.css";
import { useContext } from "react";
import Header from "./components/Header";
import GlobalContextProvider, { GlobalContext } from "./context/globalcontext";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout;

  const { loggedIn, setLoggedIn } = useContext(GlobalContext);

  if (Component.getLayout) {
    return getLayout(<Component {...pageProps} />);
  }

  console.log(loggedIn);

  return (
    <GlobalContextProvider>
      <Header>
        <Component {...pageProps} />
      </Header>
    </GlobalContextProvider>
  );
}
