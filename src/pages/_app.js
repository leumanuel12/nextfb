import "@/styles/globals.css";
import Header from "./components/Header";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout;

  if (Component.getLayout) {
    return getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Header>
        <Component {...pageProps} />
      </Header>
    </>
  );
}
