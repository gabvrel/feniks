import React, {useState} from 'react';
import { Carousel } from 'react-bootstrap';
import styles from '../styles/Carousel.module.scss';

const CarouselItem = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return(
        <>
        <Carousel activeIndex={index} onSelect={handleSelect} className={styles.carousel}>
        <Carousel.Item>
            <img
            className={styles.image}
           /*  style={{    width: 'inherit',top: '-2px',height: '45vh'}} */
            src="assets/sld1.jpg"
            alt="First slide"
            />
            <Carousel.Caption style={{position: 'absolute', color: 'black'}}>
            <h3>Limpieza Facial</h3>
            <p>
                Purificacion de la piel con metodos modernos.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
             className={styles.image}
            /* style={{    width: 'inherit',top: '-2px',height: '48vh'}} */
            src="assets/woman.jpg"
            alt="Second slide"
            />
            <Carousel.Caption style={{position: 'absolute', color: 'white'}}>
            <h3>Tratamiento de Acne</h3>
            <p>
                Trabajamos entre cosmetologos y dermatologos para hallar el mejor tratamiento.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
             className={styles.image}
            src="assets/attr.jpg"
            alt="Third slide"
            />
            <Carousel.Caption style={{position: 'absolute', color: 'black'}}>
            <h3>Cuidado de la Piel</h3>
            <p>
                Le ofrecemos la mejor opcion para la prevencion de arrugas.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </>
    )
}

export default CarouselItem;

{/* <Carousel.Item>
<img
style={{width:'inherit'}}
src="assets/bck.png"
alt="First slide"
/>
<Carousel.Caption>
<h3>Third slide label</h3>
<p>
    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
</p>
</Carousel.Caption>
</Carousel.Item> */}