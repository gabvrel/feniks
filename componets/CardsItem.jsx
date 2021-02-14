import React,{useState} from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { useSpring, animated as a } from 'react-spring'
import styles from "../styles/ThirdSection.module.scss";

const CardsItem = (props) => {
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80 }
    });

    return(
        <Row>
            <Col md={3}>

            </Col>
            <Col md={6} className={styles.info}>
            <Card.Img src='assets/two.png' className={styles.leafs} />
                <div onClick={() => set(state => !state)} className={styles.cardsCont}>
                    <Card className={styles.imageCard}>
                        <a.div style={{ opacity: opacity.interpolate(o => 1 - o), transform , height: 'inherit'}}>
                            <Card.Img src='assets/card1.jpg' />
                        </a.div>
                        <a.div style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`), position: 'absolute', height: 'inherit' }} >
                            <Card.Img src='assets/card3.jpg' />
                        </a.div>
                    </Card>
                </div>
                <div>
                    <h3 className={styles.secondLeftTItle}>Aun estas a tiempo!</h3>
                <Card.Body className={styles.bodyCard}>
                    <Card.Title><span className={styles.mainSpan}>Gratis!</span></Card.Title>
                    <Card.Text><span className={styles.secondSpan}>Limpieza facial</span></Card.Text>
                    <Card.Text>
                    Como parte de nuestra apertura ofrecemos limpiezas faciales gratuitas, para demostrar nuestra
                    calidad (aplica restricciones).
                    </Card.Text>
                    <a href='https://forms.gle/1vtV2cMiDxvZUJoE9' target="_blank" className={styles.button}>Inscribirse en promocion</a>
                </Card.Body>
                </div>
            </Col>
            <Col md={3}>

            </Col>
        </Row>
    )
}

export default CardsItem;

{/* <Card.Img src='assets/two.png' className={styles.leafs} /> */}

{/* <div onClick={() => set(state => !state)}>
<Card className={styles.imageCard}>
    <a.div style={{ opacity: opacity.interpolate(o => 1 - o), transform , height: 'inherit'}}>
        <Card.Img src='assets/card1.jpg' />
    </a.div>
    <a.div style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`), position: 'absolute', height: 'inherit' }} >
        <Card.Img src='assets/card3.jpg' />
    </a.div>
</Card>
</div> */}

{/* <div onClick={() => set(state => !state)}>
<Card className={styles.imageCard}>
    <a.div style={{ opacity: opacity.interpolate(o => 1 - o), transform , height: 'inherit'}}>
        <Card.Img src='assets/attr.jpg' />
    </a.div>
    <a.div style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`), position: 'absolute', height: 'inherit' }} >
        <Card.Img src='assets/woman.jpg' />
    </a.div>
</Card>
</div> */}