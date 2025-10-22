import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
// Images removed from projects display; cleaning up unused imports

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: 'white' }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row
                    style={{ justifyContent: 'center', paddingBottom: '10px' }}
                >
                    <Col md={4} className="project-card">
                        <ProjectCard
                            isBlog={false}
                            title="CineConnect"
                            description="A comprehensive web platform built for cinema enthusiasts, offering movie information, theater showtimes, fan discussions, and a unique marketplace for movie-themed artwork."
                            techStack={[
                                'Node.js',
                                'Express',
                                'Next.js',
                                'Tailwind CSS',
                                'Supabase',
                                'PostgreSQL',
                            ]}
                            deployment={['Vercel', 'Render']}
                            projectType="CSE 408: Software Development Sessional"
                            ghLink="https://github.com/ishrak26/CineConnect-Ultimate-Movie-Enthusiasts-Hub"
                            demoLink="https://cineconnect.vercel.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            isBlog={false}
                            title="Hippocampus Segmentation for Alzheimer’s Dementia Prediction"
                            description="An image segmentation project focusing on hippocampus extraction from MRI scans to support early-stage dementia prediction. We used a U-Net model with Swish activation and Dice loss to improve segmentation quality."
                            techStack={[
                                'TensorFlow',
                                'U-Net',
                                'Swish Activation',
                                'Spatial Dropout',
                                'Dice Loss',
                                'MRI Preprocessing',
                            ]}
                            projectType="CSE 472: Machine Learning Sessional"
                            techStackLabel="Keywords"
                            ghLink="https://github.com/ishrak26/CSE-472-Machine-Learning-Sessional-Project"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            isBlog={false}
                            title="Maguire-in-the-Middle"
                            description="A real-time 5-player embedded game where one player attempts to catch a ball while the other four players aim to prevent it. The game is built using joysticks, a gyroscope, and microcontrollers to simulate interactive gameplay."
                            techStack={[
                                'ATMega32',
                                'Arduino Uno',
                                'C/C++',
                                'Joysticks',
                                'Gyroscope',
                            ]}
                            projectType="CSE 316: Microprocessors and Embedded Systems Sessional"
                            techStackLabel="Hardware & Programming Tools"
                            ghLink="https://github.com/ishrak26/Maguire-in-the-Middle"
                            demoLink="https://www.youtube.com/watch?v=NY4GrnJCqsM"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            isBlog={false}
                            title="Football Player Transfer Database System"
                            description="A JavaFX-based desktop application simulating the football player transfer market. The system supports real-time player transfers between clubs using Java networking and multi-threading, with a GUI to manage player data, initiate transfers, and handle concurrent operations."
                            techStack={[
                                'Java',
                                'JavaFX',
                                'Multi-threading',
                                'Networking',
                                'OOP',
                            ]}
                            deployment={['Desktop Application']}
                            projectType="CSE 108: Object-Oriented Programming Sessional"
                            techStackLabel="Technologies & Concepts"
                            deploymentLabel="Platform"
                            ghLink="https://github.com/ishrak26/Football-Player-Database-System"
                            demoLink="https://youtu.be/KRCxGvgQvro?si=Ux9-tG7kxH4VBnu6"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            isBlog={false}
                            title="DX-Ball"
                            description="A recreation of the classic arcade-style DX-Ball game built using C/C++ and the iGraphics library. The project emphasizes core structured programming principles through interactive gameplay mechanics, including paddle movement, ball physics, and brick collision logic."
                            techStack={[
                                'C',
                                'C++',
                                'iGraphics',
                                'Structured Programming',
                            ]}
                            deployment={['Desktop Game']}
                            projectType="CSE 102: Structured Programming Sessional"
                            techStackLabel="Languages & Libraries"
                            deploymentLabel="Platform"
                            ghLink="https://github.com/ishrak26/DX-Ball"
                            demoLink="https://www.facebook.com/100002802882052/videos/2930693760367358/"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
