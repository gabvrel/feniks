import React, {useEffect, useState, useRef} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from "./CarouselItem";
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";
import styles from "../styles/SecondSection.module.scss";

gsap.registerPlugin(ScrollTrigger, TextPlugin);


const SecondSection = () => {
    const test = useRef(null);
    const bck = useRef(null);
    const lol = useRef(null);
    const img = useRef(null);
    const laptop = useRef(null);
    useEffect(()=>{
        if(window.innerWidth > 480){
        const tl2 = gsap.timeline();
          tl2.to('#titleTest', {duration:2,  delay:0.5, text: {value: "TRATAMIENTOS PERSONALES", delimiter: " "}},2)
            .from(bck.current, {xPercent: window.innerWidth,duration: 1.5, ease:Expo.easeInOut},2)
            .from(test.current, {xPercent: -350 ,opacity: 0, duration:2, ease:Expo.easeInOut},1)
            .from(lol.current, {yPercent: 350, opacity:0 ,duration:2, ease:Expo.easeInOut},1)
            .from(img.current, {xPercent: 350, opacity:0, duration:2, ease:Expo.easeInOut},1)
            .from(laptop.current, {yPercent: 500, opacity:0, duration: 2.5, ease: Expo.easeInOut},2)
        ScrollTrigger.create({
            animation: tl2,
            trigger: bck.current,
            scrub: 6,
            end: '+=100vh'
        })
    }
    },[])
    return(
    <>
         <div className={styles.paddingTop} ref={bck}>
                <Container>
                    <Row>
                        <Col md={3} className={styles.leftSecond}>
                            <h1 ref={test}>Nuestro Concepto</h1>
                        </Col>
                        <Col md={6} ref={lol} className={styles.centerSecond}>
                            <h4>
                                Tratamientos personalizados enfocados en resultados con los mejores productos.
                            </h4>
                        </Col>
                        <Col md={3} className={styles.imgContainer}>
                            <img src="assets/secondrigth.png" alt="second leaf" ref={img} />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={styles.laptop} ref={laptop}>
                <img src="assets/laptop.png" alt="laptop"  />
                <Carousel />
            </div>
    </>
    )}


export default SecondSection;