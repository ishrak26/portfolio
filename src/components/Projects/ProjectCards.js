import React from 'react';
import { Badge, Card, Button } from 'react-bootstrap'; // ensure Badge is imported
import { CgWebsite } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';

function ProjectCards(props) {
    const renderBadges = (items) =>
        items.map((item, idx) => (
            <Badge
                bg="secondary"
                key={idx}
                style={{ marginRight: '5px', marginBottom: '5px' }}
            >
                {item}
            </Badge>
        ));

    return (
        <Card className="project-card-view">
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: 'justify' }}>
                    {props.description}
                </Card.Text>

                {props.projectType && (
                    <Card.Text style={{ fontSize: '0.85rem' }}>
                        <strong>Project Type:</strong>
                        <span> {props.projectType}</span>
                    </Card.Text>
                )}

                {props.techStack && (
                    <>
                        <Card.Text
                            style={{ marginTop: '10px', marginBottom: '5px' }}
                        >
                            <strong>
                                {props.techStackLabel || 'Tech Stack'}
                            </strong>
                        </Card.Text>
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {renderBadges(props.techStack)}
                        </div>
                    </>
                )}

                {props.deployment && (
                    <>
                        <Card.Text
                            style={{ marginTop: '10px', marginBottom: '5px' }}
                        >
                            <strong>
                                {props.deploymentLabel || 'Deployment'}
                            </strong>
                        </Card.Text>
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {renderBadges(props.deployment)}
                        </div>
                    </>
                )}

                <Button variant="primary" href={props.ghLink} target="_blank">
                    <BsGithub /> &nbsp;
                    {props.isBlog ? 'Blog' : 'GitHub'}
                </Button>
                {'\n'}
                {'\n'}

                {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

                {!props.isBlog && props.demoLink && (
                    <Button
                        variant="primary"
                        href={props.demoLink}
                        target="_blank"
                        style={{ marginLeft: '10px' }}
                    >
                        <CgWebsite /> &nbsp;
                        {'Demo'}
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}
export default ProjectCards;
