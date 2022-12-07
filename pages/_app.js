import "../styles/globals.css";
import { LoginWrapper } from "../components/loginContext";
function MyApp({ Component, pageProps }) {
  return (
    <LoginWrapper>
      <Component {...pageProps} />;
    </LoginWrapper>
  );
}

export default MyApp;
