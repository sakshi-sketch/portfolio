import React from 'react';
import { Tab,Container,Col ,Row,Nav} from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorSharp2 from "../assets/images/colorsharp.jpeg";
import projImg1 from "../assets/images/project1.webp";
import projImg2 from "../assets/images/project2.webp";
import projImg3 from "../assets/images/project3.png";
import projImg4 from "../assets/images/project4.png";
import projImg5 from "../assets/images/project5.png";
import projImg6 from "../assets/images/project7.jpeg";


const Projects = () => {

    const projects = [
        {
            title : "Todolist",
            description:"A React Project",
            imgUrl:projImg1,
        },
        {
            title : "book website",
            description:"A html , css, javascript Project",
            imgUrl:projImg2,
        },
        {
            title : "handwritten recongnisation",
            description:"A html,css ,javascript Project",
            imgUrl:projImg3,
        },
        {
            title : "Temperature Convertor",
            description:"A html CSS Javascript project",
            imgUrl:projImg4,
        },
        {
            title : "blood donation",
            description:"A React Project",
            imgUrl:projImg5,
        },
        {
            title : "music player",
            description:"A React Project",
            imgUrl:projImg6,
        },
    ]
    return (
        <section className='project' id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Explore a collection of projects crafted with HTML, CSS, and JavaScript, each showcasing a unique blend 
                            of creativity and functionality. From web development to machine learning experiments, these projects 
                            reflect my commitment to delivering innovative solutions. Dive into the world of technology and creativity!
                        </p>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                                <Nav variant="pills">
                                    <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                        projects.map((project, index) => {
                                        return(
                                            <ProjectCard key={index} {...project}/>
                                        )
                                        })
                                    }
                                    </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second" className='tab-h3'>
                                        {projects.length > 0 ? (
                                                <Row>
                                                    {projects.map((project, index) => (
                                                        <ProjectCard key={index} {...project} />
                                                    ))}
                                                </Row>
                                            ) : (
                                                <h3>Work in Progress</h3>
                                            )}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third" className='tab-h3'>
                                        {projects.length > 0 ? (
                                            <Row>
                                                {projects.map((project, index) => (
                                                    <ProjectCard key={index} {...project} />
                                                ))}
                                            </Row>
                                        ) : (
                                            <h3>Work in Progress</h3>
                                        )}
                                    </Tab.Pane>
                                </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} className='background-img-right' alt='backround image'></img>
        </section>
    );
};


export default Projects;