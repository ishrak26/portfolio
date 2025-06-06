import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { SiPostman, SiSlack, SiVercel, SiRender } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { FaUbuntu } from 'react-icons/fa';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import './Toolstack.css'; // Import custom styles

function Toolstack() {
    const tools = [
        { icon: <FaUbuntu />, name: 'Ubuntu' },
        { icon: <VscVscode />, name: 'VS Code' },
        { icon: <SiPostman />, name: 'Postman' },
        // { icon: <SiSlack />, name: 'Slack' },
        { icon: <SiRender />, name: 'Render' },
        { icon: <SiVercel />, name: 'Vercel' },
    ];

    return (
        <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
            {tools.map((tool, idx) => (
                <Col key={idx} xs={4} md={2} className="tech-icons">
                    <OverlayTrigger
                        placement="top"
                        delay={{ show: 100, hide: 100 }}
                        overlay={
                            <Tooltip
                                id={`tooltip-${idx}`}
                                className="custom-tooltip"
                            >
                                {tool.name}
                            </Tooltip>
                        }
                    >
                        <div>{tool.icon}</div>
                    </OverlayTrigger>
                </Col>
            ))}
        </Row>
    );
}

export default Toolstack;
