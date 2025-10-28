import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: 'justify' }}>
                        Hi Everyone, I am{' '}
                        <span className="purple">Md. Ishrak Ahsan </span>
                        from <span className="purple"> Dhaka, Bangladesh.</span>
                        <br />
                        I am currently serving as a Lecturer in the Department
                        of CSE at BRAC University. I am also working as an
                        Adjunct Lecturer in the CSE Department at Bangladesh
                        University of Engineering and Technology (BUET).
                        <br />I completed BSc in Computer Science and
                        Engineering from BUET in March, 2025 with a CGPA of{' '}
                        <span className="purple">3.98</span>, ranking 6th in my
                        class.
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to
                        do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Watching TV Series and Movies
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Reading Books
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Travelling
                        </li>
                    </ul>

                    {/* <p style={{ color: 'rgb(155 126 172)' }}>
                        "Strive to build things that make a difference!"{' '}
                    </p>
                    <footer className="blockquote-footer">Soumyajit</footer> */}
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
