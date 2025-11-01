import Layout from "@/components/common/Layout/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import "@/styles/styles.css"
export default function App({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}
