import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import ResearchCard from './ResearchCard';
import researchItems from './data';

// Optional: import logos/images for labs or institutions to use as imgPath
// import labLogo from '../../Assets/Projects/leaf.png';

function Research() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    Research <strong className="purple">Experiences</strong>
                </h1>
                <p style={{ color: 'white' }}>
                    A few highlights of my research journey.
                </p>
                <Row
                    style={{ justifyContent: 'center', paddingBottom: '10px' }}
                >
                    {researchItems.map((item, idx) => (
                        <Col xs={12} md={12} className="project-card" key={idx}>
                            <ResearchCard {...item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    );
}

export default Research;
