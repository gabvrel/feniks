import React, {useState, useRef, useEffect} from 'react';
import { Container, Row, Col, Tabs, Tab, Button } from 'react-bootstrap';
import { gsap, Expo, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";
import styles from "../styles/FifthSection.module.scss";

//const slapform = new (require('slapform'));
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const FifthSection = () => {
    const fifthCont = useRef(null);
    const img = useRef(null);
    const form = useRef(null);
    useEffect(()=>{
        const tl5 = gsap.timeline();
        tl5.from(img.current, {duration:2, delay:0.7, xPercent:-50, opacity:0 ,ease: Expo.easeInOut})
           .from(form.current, {duration:2, delay:0.7, xPercent:50, opacity:0 ,ease: Expo.easeInOut})
           .to('#ff-title-root',{display: 'none !important'}) 
        ScrollTrigger.create({
            animation: tl5,
            trigger: fifthCont.current,
            scrub: 2,
            end: '+=100%'
        })
    },[])
    return(
        <>
            <Container ref={fifthCont}>
                <Row className={styles.lastFlex}>
                    <Col ref={img} className={styles.center}>
                        <h1 className={styles.head}>Hola!</h1> 
                        <img src='assets/spa.png' className={styles.spa} />
                    </Col>
                    <Col ref={form} className={styles.desc}>
                        <img src='assets/thirdrigth.png' className={styles.descImg} />
                            <h1>Contactos</h1>
                            <p>Encuentranos en redes sociales y siguenos</p>
                            <p>Puedes acceder a promociones unicas
                                y resultados de nuestros clientes.
                            </p>
                            <div className={styles.socialwrapper}>
                            <a href="https://www.facebook.com/BelleImagenEstetica/">
                                <img src='assets/face.png' className={styles.social} />
                            </a>
                            <a href="https://www.instagram.com/bellaimagen777/?utm_medium=copy_link">
                                <img src='assets/insta.png' className={styles.social} />
                            </a>
                            <a href="https://wa.me/593987958346">
                                <img src='assets/whats.png' className={styles.social} />
                            </a>
{/*                             <a href="https://www.youtube.com/channel/UCGyOBRp_41bxd-vZ6MOjEsw?guided_help_flow=5">
                                <img src='assets/yt.png' className={styles.social} />
                            </a> */}
                        </div>
                    </Col>
                </Row>
            </Container>
     </>
    )
}

export default FifthSection