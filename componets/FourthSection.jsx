import React,{useEffect, useRef, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { gsap, Expo, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";
import styles from "../styles/FourthSection.module.scss";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const FouthSection = () => {
    const [counter1, setCounter1] = useState({value: 0});
    const [counter2, setCounter2] = useState({value: 0});
    const [counter3, setCounter3] = useState({value: 0});
    const fourSec = useRef(null);
    const title = useRef(null);
    const desc = useRef(null);
    const t1 = useRef(null);
    const t2 = useRef(null);
    const t3 = useRef(null);
    const leaf = useRef(null);
    useEffect(()=>{
        const tl4 = gsap.timeline();
        const target1 = {
            value: counter1.value
        }
        const target2 = {
            value: counter2.value
        }
        const target3 = {
            value: counter3.value
        }
        tl4.to('#titleTest', {duration:4, text: {value: "REJUVENECE", delimiter: " "}, ease: Expo.easeInOut})   
           .from(title.current, {duration:4, yPercent: -5, opacity:0, ease: Expo.easeInOut}, "+=0.5")
           .from(desc.current, {duration:4, opacity:0, yPercent: 5 ,ease: Expo.easeInOut}, "+=0.5")
           .from(t1.current, {xPercent:-5, opacity:0 ,duration:4 ,ease: Expo.easeInOut}, "+=0.5")
           .from(t2.current, {xPercent:-5,  opacity:0 ,duration:4, ease: Expo.easeInOut}, "+=0.5")
           .from(t3.current, {xPercent:-5,  opacity:0 ,duration:4, ease: Expo.easeInOut}, "+=0.5")
           .from(leaf.current, {yPercent:-33, opacity:0 ,duration:4, ease: Expo.easeInOut}, "+=0.5")
           .to(target1,{duration: 2,
            value: "+=11",
            roundProps: "value",
            ease: "none",
            onUpdate() {
                setCounter1({ value: target1.value });
            }})
            .to(target2,{duration: 2,
                value: "+=9",
                roundProps: "value",
                ease: "none",
                onUpdate() {
                    setCounter2({ value: target2.value });
                }})
                .to(target3,{duration: 2,
                    value: "+=450",
                    roundProps: "value",
                    ease: "none",
                    onUpdate() {
                        setCounter3({ value: target3.value });
                    }})
        ScrollTrigger.create({
          animation: tl4,
          trigger: fourSec.current,
          scrub: 8,
          end: '+=100vh'
      })
    },[]);
    return(
        <Container ref={fourSec} className={styles.paddingTop}>
            <Row>
                <Col ref={title} md={{ span: 8, offset: 2 }} className={styles.center}>
                    <h1 className={styles.head}>Nosotros</h1> 
                    <img src='assets/towels.png' className={styles.towel} />
                </Col>
            </Row>
            <Row style={{marginTop: '-7vh'}}>
                <Col ref={leaf} md={2}>
                    <img src='assets/singleLeaf.png' className={styles.singleLeaf} />
                </Col>
                <Col ref={desc} md={8} className={styles.center}>
                    <h3 className={styles.cursive}>Bella Imagen</h3>
                    <p>Somos especialistas en cosmetología, cosmiatria y dermatocosmiatría más de 6 años de experiencia contamos. Ofrecemos un servicio de calidad
                        apuntando a llegar alto con resultados visibles.
                    </p> 
                </Col>
            </Row>
            <Row style={{marginTop: '2.5vh', display: "none"}}>
                <Col md={4} className={styles.description}>
                    <div>
                        <h1>{counter1.value}+</h1>
                    </div>
                    <div ref={t1}>
                    <h4>Paises</h4>
                        <p>Donde trabajamos.</p>
                    </div>

                </Col>
                <Col md={4} className={styles.description}>
                    <div>
                        <h1>{counter2.value}</h1>
                    </div>
                    <div ref={t2}>
                        <h4>Profesionales</h4>
                        <p>Listos para ofrecerle el mejor servicio.</p>
                    </div>
                </Col>
                <Col md={4} className={styles.description}>
                    <div>
                        <h1>{counter3.value}+</h1>
                    </div>
                    <div ref={t3}>
                        <h4>Clientes</h4>
                        <p>Alrededor del mundo.</p>
                        <img src='assets/cremi.png' className={styles.cream} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default FouthSection;