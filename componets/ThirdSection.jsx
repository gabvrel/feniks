import React, {useEffect, useRef} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardsItem from "../componets/CardsItem";
import { gsap, Expo, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";
import styles from "../styles/ThirdSection.module.scss";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const ThirdSection = () => {
    const mainRef = useRef(null);
    const title = useRef(null);
    const desc = useRef(null);
    const card = useRef(null);
    //.to('#titleTest', {duration:2, delay:1, scale:1.05, text: {value: "Third Section xdlol"}, ease:Linear.easeNone},2)
    useEffect(()=>{
        const tl3 = gsap.timeline();
        tl3.from(title.current, {yPercent:250, delay:0.7, opacity:0, duration:2},2)
          .from(desc.current, {yPercent:250, delay:0.7, opacity:0 ,duration:2},2)
          .to('#titleTest', {duration:2,  delay:0.7, text: {value: "EXPERIENCIA PERSONALIZADA", delimiter: " "}},2)
        ScrollTrigger.create({
            animation: tl3,
            trigger: mainRef.current,
            scrub: 4,
            end: '+=100vh'
        })
    },[]);

    return(
        <>
            <Container ref={mainRef} className={styles.paddingTop}>
                <Row>
                    <Col ref={title} md={3} className={styles.leftSecond}>
                            <h1>ESTAMOS COMENZANDO</h1>
                    </Col>
                    <Col ref={desc} md={6} className={styles.centerSecond}>
                            <h4>A diferencia de cualquier otro centro cosmetologico, nos centramos en un tratamiento mas
                                personal obteniendo una calidad alta y precios bajos.
                            </h4>
                            <img src='assets/lastd.png' />
                    </Col>
                </Row>
            </Container>
            <div ref={card}>
                <CardsItem/>
            </div>
        </>
    )
}

export default ThirdSection;