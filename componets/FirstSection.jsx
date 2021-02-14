import React, { useRef, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { gsap, Expo } from "gsap";
import styles from "../styles/FirstSection.module.scss";
import MobileMenuScreen from "./MobileMenuScreen";

const data = [
  {title: 'Inicio', label: 'firstSec'},
  {title: 'Concepto', label: 'secondSec'},
  {title: 'Promocion', label: 'thirdSec'},
  {title: 'Nosotros', label: 'fourthSec'},
  {title: 'Contacto', label: 'fifthSec'},
]

const FirstSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const veticalRef = useRef(null);
  const menu = useRef(null);
  const mainTitle = useRef(null);
  const img1 = useRef(null);
  const img2 = useRef(null);
  const line1 =useRef(null);
  const line2 =useRef(null);
  const line3 =useRef(null);

  const openMenu = () => {
    if (menuOpen){
      gsap.to('#menuScreen',{scale:0, duration:0.7, ease:Expo.easeInOut})
      gsap.to([line1.current, line2.current, line3.current], { fill: "rgb(0,0,0)" })
      setMenuOpen(false)
    } else {
      gsap.to('#menuScreen',{scale:1, duration:0.7, ease:Expo.easeInOut})
      gsap.to([line1.current, line2.current, line3.current], { fill: "rgb(255,255,255)" })
      setMenuOpen(true)
    }
    
  }
  let tl = gsap.timeline({
    yoyo: false, // if true > A-B-B-A, if false > A-B-A-B
    defaults: { // children inherit these defaults
      duration: 0.5,
      ease: Expo.easeInOut 
    },
    smoothChildTiming: true,
    autoRemoveChildren: true,
  });

    useEffect(() => {
      tl.from(veticalRef.current, {
              y: 100,
              opacity: 0,
              duration: 1.5}, 0)
        .from(menu.current, {
              x: -50,
              opacity: 0,
              duration: 2}, 0) 
        .from('.textApear', {
              y: 50,
              opacity: 0,
              duration: 2}, 0)
        .from(img1.current, {
              opacity: 0,
              duration: 2.5}, 1)
        .from(img2.current, {
                opacity: 0,
                y: -100,
                duration: 2}, 1.5)
        .to(mainTitle.current, {duration:3,  delay:0.5, text: {value: "Feniks -", delimiter: ""}},1)
    },[])

    return (
      <div>
        <Container>
            <Row className={styles.paddingTop}>
                <Col sm={0} className={styles.leftHead}>
                  <h3 ref={menu}>KOSMETOS</h3>
                  <div className={styles.test}  ref={veticalRef}>
                    <p id="titleTest">COSMETOLOGIA MODERNA</p>
                    <p>2021</p>
                  </div>
                  <img src="assets/bck.png" alt="beauty medicinal leafs" ref={img1}/>
                </Col>
                <Col className={styles.rightHead}>
                  <div className={styles.firstHead} className='textApear'>
                    <h3>BELLEZA</h3>
                    <p>Un concepto moderno para la</p>
                    <p>Cosmetologia</p>
                  </div>
                  <div className={styles.secondHead}>
                    <h1 className='c'>"</h1>
                    <h1 ref={mainTitle} className='first'> </h1>
                    <h6 className='textApear'>especialistas en cuidado de piel,<span>enfocados en tratamientos de acne</span></h6>
                  </div>
                  <div className={styles.lastHead}>
                    <p className='textApear'>Desarrollamos un medio para dejar nuestra imagen plantada en 
                    los resultados de nuestros clientes, con el fin de llegar a un mismo objetivo juntos.
                    </p>
                    <h3 className='textApear'>Solo dejate llevar!</h3>
                    <img src="assets/leafsrigth.png" alt="random beautiful medicinal leafs" ref={img2} className={styles.headImg}/>
                  </div>
                </Col>
                <div className={styles.navigation}>
                  {data.map((el,i) => 
                  <a key={el.title} className={styles.menuItem} href={'#'+ el.label}>
                    <h1>{el.title}</h1>
                    <span className={styles.dot}></span>
                  </a>
                  )}
                </div>
            </Row>
            <div className={styles.mobileMenu} onClick={openMenu}>
            <svg viewBox="0 0 100 80" width="35" height="30">
              <rect width="85" height="12" ref={line1}></rect>
              <rect y="30" width="85" height="12" ref={line2}></rect>
              <rect y="60" width="85" height="12" ref={line3}></rect>
            </svg>
            </div>
            <MobileMenuScreen data={data} openMenu={openMenu}/>
        </Container>
      </div>
    )
}

export default FirstSection;