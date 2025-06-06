import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/avatar.svg';
import Tilt from 'react-parallax-tilt';
import { AiFillGithub, AiOutlineX, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn, FaKaggle, FaFacebook } from 'react-icons/fa';
import { SiCodeforces } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: '2.6em' }}>
                            LET ME <span className="purple"> INTRODUCE </span>{' '}
                            MYSELF
                        </h1>
                        <p className="home-about-body">
                            I fell in love with programming and I have at least
                            learnt something, I think… 🤷‍♂️
                            <br />
                            <br />I am fluent in classics like
                            <i>
                                <b className="purple">
                                    {' '}
                                    C++, Python and Java.{' '}
                                </b>
                            </i>
                            <br />
                            <br />
                            My field of interests lie in &nbsp;
                            <i>
                                <b className="purple">
                                    Bio and Health Informatics, Single-Cell
                                    Transcriptomics, and Deep Learning.
                                </b>{' '}
                                {/* and also in areas related to{' '}
                                <b className="purple">Blockchain.</b> */}
                            </i>
                            <br />
                            <br />
                            Whenever possible, I also apply my passion for
                            developing products with{' '}
                            <b className="purple">Node.js</b> and
                            <i>
                                <b className="purple">
                                    {' '}
                                    Modern Javascript Library and Frameworks
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className="purple"> React.js and Next.js.</b>
                            </i>
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img
                                src={myImg}
                                className="img-fluid"
                                alt="avatar"
                            />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to{' '}
                            <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="mailto:ishrak26@gmail.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <MdEmail />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/ishrak26"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://github.com/ishrak26"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://kaggle.com/ishrak26"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaKaggle />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://codeforces.com/profile/ishrak26"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <SiCodeforces />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://facebook.com/ishrak26"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaFacebook />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://x.com/ahsan_ishrak"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineX />
                                </a>
                            </li>

                            <li className="social-icons">
                                <a
                                    href="https://www.instagram.com/ahsan_ishrak"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillInstagram />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;
