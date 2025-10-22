import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub, AiOutlineX, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn, FaKaggle, FaFacebook } from 'react-icons/fa';
import { SiCodeforces } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container fluid>
                <Row>
                    <Col md={12} className="home-about-description">
                        <h1 style={{ fontSize: '2.6em' }}>
                            LET ME <span className="purple"> INTRODUCE </span>{' '}
                            MYSELF
                        </h1>
                        <p className="home-about-body">
                            I am an aspiring researcher in{' '}
                            <i>
                                <b className="purple">computational biology</b>
                            </i>{' '}
                            with a focus on{' '}
                            <i>
                                <b className="purple">
                                    single-cell transcriptomics
                                </b>
                            </i>{' '}
                            and{' '}
                            <i>
                                <b className="purple">
                                    statistical machine learning
                                </b>
                            </i>
                            . My current work explores{' '}
                            <i>
                                <b className="purple">
                                    supervised dimensionality reduction
                                </b>
                            </i>{' '}
                            for scRNA-seq to uncover disease-relevant signal in{' '}
                            <i>
                                <b className="purple">Alzheimer's disease</b>
                            </i>{' '}
                            and its comorbidities.
                            <br />
                            <br />
                            Broadly, I am interested in differential expression
                            modeling, representation learning, multimodal
                            integration, and principled evaluation for
                            biological discovery in{' '}
                            <i>
                                <b className="purple">Bio/Health Informatics</b>
                            </i>
                            . I value reproducibility and transparent analysis
                            pipelines.
                            <br />
                            <br />
                            Day-to-day, I work primarily in{' '}
                            <i>
                                <b className="purple">Python</b>
                            </i>{' '}
                            (Scanpy/Anndata, NumPy/Pandas), and am comfortable
                            with{' '}
                            <i>
                                <b className="purple">R</b>
                            </i>{' '}
                            packages like{' '}
                            <i>
                                <b className="purple">Seurat</b>
                            </i>
                            ,{' '}
                            <i>
                                <b className="purple">Muscat</b>
                            </i>
                            , and modern deep learning tools (PyTorch/
                            TensorFlow) when appropriate.
                            <br />
                            <br />I have completed my{' '}
                            <i>
                                <b className="purple">B.Sc. in CSE</b>
                            </i>{' '}
                            from{' '}
                            <i>
                                <b className="purple">BUET</b>
                            </i>{' '}
                            with a{' '}
                            <i>
                                <b className="purple">CGPA of 3.98/4.00</b>
                            </i>
                            , and I am seeking opportunities to pursue a{' '}
                            <i>
                                <b className="purple">Ph.D.</b>
                            </i>{' '}
                            in areas of{' '}
                            <i>
                                <b className="purple">computational biology</b>
                            </i>
                            , and I enjoy collaborating with biologists and
                            clinicians on impactful problems.
                        </p>
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
