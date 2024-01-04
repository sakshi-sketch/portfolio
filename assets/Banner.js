import React from 'react';
import 'animate.css';
import {useState,useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import headerImg from '../assets/images/header-img.svg';
import { IoIosArrowDropright } from "react-icons/io";

 




const Banner = () => {
    const [loopNum,setLoopNum]  = useState(0);
    const[isDeleting,setIsDeleting] = useState(false);
    const toRotate = ["Web Developer" , "Web Designer" , "Meachine Learning Enthusiast"];
    const [text,setText] = useState('');
    const [delta,setDelta] = useState(300-Math.random()*100);
    const period = 2000;

    useEffect(() => 
    {
        let ticker = setInterval( () =>
        {
            tick();
        },[delta]);

        return () => {clearInterval(ticker)};
    },[text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0,text.length-1):fullText.substring(0,text.length+1);

        setText(updateText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2);
        }

        if(!isDeleting && updateText === fullText ){
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updateText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }


    return (
        <section className='banner' id="home"> 
            <Container>
                <Row className='align-items-center'>
                    <Col xs ={12}  md = {6}  xl = {7}>
                            <span className='tagline'>Welcome to my portfolio</span>
                            <h1>{`Hi I'm a `}<span className='wrap'>{text}</span></h1>
                            <p>Enthusiastic Front End Developer with a keen eye for design aesthetics, dedicated to crafting intuitive websites. Eager to contribute creativity to dynamic teams, specializing in developing cutting-edge web solutions for memorable user experiences.</p>
                            <button onClick={()=>console.log('connect')}>Let's connect<IoIosArrowDropright /></button>
                       
                    
                    </Col>
                    <Col xs ={12}  md = {6}  xl = {5}>
                        <img src={headerImg} alt="header"/>
                    </Col>
                </Row>
            </Container>
            
        </section>
    );
};


export default Banner;