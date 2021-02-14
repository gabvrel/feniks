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
        tl5.to('#titleTest', {duration:2, text: {value: "DEJATE LLEVAR", delimiter: " "}, ease: Expo.easeInOut})  
           .from(img.current, {duration:2, delay:0.7, xPercent:-50, opacity:0 ,ease: Expo.easeInOut})
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
                            <p>Suscribete a nuestras promociones.</p>
{/*                             <form method="POST" className={styles.form}
                            action="https://api.slapform.com/gabvrel@gmail.com">
                                <input type="email" name="email" placeholder='email' className={styles.email}/>
                                <input type="text" name="slap_honey" hidden />
                                <button type="submit" className={styles.button}>Submit</button>
                            </form> */}
                            <div class="container" id="ff-compose"></div>
<script async defer src="https://formfacade.com/include/114061985191388198571/form/1FAIpQLSf3rIMDCyNLlEswG11-LnxS0XdTjgffbpxQzwInj1QPqyGW6A/bootstrap.js?div=ff-compose"></script>
                            <p>Al suscribirte tendras acceso directo a nuestras promociones, noticias y ofertas de empleo
                                que no necesariamente tienen relacion con la cosmetologia. Las promociones tienen restricciones
                                que limitan su aplicacion (leer en formulario).
                            </p>
                            <div className={styles.socialwrapper}>
                            <a href="#">
                                <img src='assets/face.png' className={styles.social} />
                            </a>
                            <a href="#">
                                <img src='assets/insta.png' className={styles.social} />
                            </a>
                            <a href="https://wa.me/593992709590">
                                <img src='assets/whats.png' className={styles.social} />
                            </a>
                            <a href="#">
                                <img src='assets/yt.png' className={styles.social} />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
     </>
    )
}

export default FifthSection