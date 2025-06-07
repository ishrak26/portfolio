import React from 'react';
import { Col, Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { CgCPlusPlus } from 'react-icons/cg';
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiPython,
    DiGit,
    DiJava,
} from 'react-icons/di';
import {
    SiNextdotjs,
    SiPostgresql,
    SiR,
    SiGnubash,
    SiArduino,
    SiOracle,
    SiOpengl,
    SiLatex,
    SiNumpy,
    SiPandas,
    SiTensorflow,
} from 'react-icons/si';
import { LuMicrochip } from 'react-icons/lu';
import { GiProcessor } from 'react-icons/gi';
import { ReactComponent as ScanpyIcon } from '../../Assets/icons/Scanpy_Logo_BrightFG.svg';

function Techstack() {
    const tools = [
        { icon: <CgCPlusPlus />, name: 'C/C++' },
        { icon: <DiPython />, name: 'Python' },
        { icon: <DiJava />, name: 'Java' },
        { icon: <SiR />, name: 'R' },
        { icon: <DiJavascript1 />, name: 'JavaScript' },
        { icon: <SiNumpy />, name: 'NumPy' },
        { icon: <SiPandas />, name: 'Pandas' },
        { icon: <SiTensorflow />, name: 'TensorFlow' },
        {
            icon: (
                <ScanpyIcon
                    style={{
                        width: '100%',
                        height: '100%',
                        maxWidth: '4.5em',
                        maxHeight: '4.5em',
                        objectFit: 'contain',
                        display: 'block',
                        margin: 'auto',
                    }}
                />
            ),
            name: 'Scanpy',
        },
        {
            icon: (
                <img
                    src={require('../../Assets/icons/SeuratV5.png')}
                    alt="Seurat Logo"
                    style={{
                        maxWidth: '1.5em',
                        maxHeight: '1.5em',
                        objectFit: 'contain',
                        display: 'block',
                        margin: 'auto',
                    }}
                />
            ),
            name: 'Seurat',
        },
        { icon: <DiNodejs />, name: 'Node.js' },
        { icon: <DiReact />, name: 'React' },
        { icon: <SiNextdotjs />, name: 'Next.js' },
        { icon: <SiPostgresql />, name: 'PostgreSQL' },
        { icon: <SiOracle />, name: 'OracleDB' },
        { icon: <GiProcessor />, name: '8086 Assembly' },
        { icon: <SiGnubash />, name: 'Bash' },
        { icon: <LuMicrochip />, name: 'ATmega32' },
        { icon: <SiArduino />, name: 'Arduino UNO' },
        { icon: <SiOpengl />, name: 'OpenGL' },
        { icon: <DiGit />, name: 'Git' },
        { icon: <SiLatex />, name: 'LaTeX' },
    ];

    return (
        <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
            {tools.map((tool, index) => (
                <Col xs={4} md={2} className="tech-icons" key={index}>
                    <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip
                                id={`tooltip-${index}`}
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

export default Techstack;
