import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import logo from "../assets/images/logo.avif";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
/*import MailChimpFrome from './MailChimpFrome';*/


const Footer = () => {
    return (
        <Footer className='footer'>
            <Container>
                <Row className = "align-item-center">
                    {/*<MailChimpFrome/>*/}
                    <Col sm = {6}>
                        <img src={logo} alt="logo"/>
                    </Col>
                    <Col sm = {6} className="text-center text-sm-end">
                        <div className='social-icon'>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaGithub /></a>
                            <a href="#"><CiLinkedin /></a>
                        </div>
                        <p>CopyRight 2023.All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </Footer>
    );
};



export default Footer;