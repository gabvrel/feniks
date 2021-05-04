import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import FirstSection from "../componets/FirstSection";
import SecondSection from "../componets/SecondSection";
import ThirdSection from "../componets/ThirdSection";
import FourthSection from "../componets/FourthSection";
import FifthSection from "../componets/FifthSection";
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import "bootstrap/dist/css/bootstrap.min.css";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

function App() {
  return (
    <>
      <Head>
        <title>Feniks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section id="firstSec">
          <FirstSection />
        </section>
        <section id="secondSec">
          <SecondSection />
        </section>
        <section id="thirdSec">
          <ThirdSection />
        </section>
        <section id="fourthSec">
          <FourthSection />
        </section>
        <section id="fifthSec">
          <FifthSection />
        </section>
      </main>
      <footer className={styles.footer}>
        <h5>© 2021 Copyright. All rights reserved.</h5>
        <h5>Quito-Ecuador, Sector Norte</h5>
        <h5>
          Designed with love by{" "}
          <a href="#">
            <img src="assets/minelogo.png" />
          </a>{" "}
        </h5>
      </footer>
    </>
  );
}

export default App;
