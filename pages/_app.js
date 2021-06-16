import { Fragment } from "react";
import classes from "../styles/globals.css";
import NavBar from "./components/Navbar/navigation-bar";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (

    <Fragment>
    <Head>
      <script src="https://kit.fontawesome.com/fc3d845615.js" crossorigin="anonymous"></script>
    </Head>
      <div className={classes.app}>
        <NavBar />
      </div>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
