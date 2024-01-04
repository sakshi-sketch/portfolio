import React from 'react';
import { Container , Row,Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/images/colorsharp.jpeg";
import coding from '../assets/images/coding.svg';

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <section className='skill' id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className='skills-bx'>
                            <h2>Skills</h2>
                            <p>lorem ipsum dummy text . rummy player , tummy full , killing sdmnfkjla</p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className='item'>
                                <img src={coding} alt="Image"></img>
                                <h5>Web Development</h5>
                            </div>
                            <div className='item'>
                                <img src={coding} alt="Image"></img>
                                <h5>Meachine Learning</h5>
                            </div>
                            <div className='item'>
                                <img src={coding} alt="Image"></img>
                                <h5>database operations</h5>
                            </div>
                            <div className='item'>
                                <img src={coding} alt="Image"></img>
                                <h5>Competitive Coding</h5>
                            </div>
                        </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} className='background-image-left'/>
        </section>
    );
};



export default Skills;