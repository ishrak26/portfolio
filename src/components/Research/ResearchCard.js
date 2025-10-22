import React, { useState } from 'react';
import { Badge, Card, Button, Collapse } from 'react-bootstrap';
import { CgWebsite } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineDown } from 'react-icons/ai';

function ResearchCard(props) {
    const renderBadges = (items) =>
        (items || []).map((item, idx) => (
            <Badge
                bg="secondary"
                key={idx}
                style={{ marginRight: '5px', marginBottom: '5px' }}
            >
                {item}
            </Badge>
        ));

    const [open, setOpen] = useState(props.defaultOpen ?? true);
    const timeline = props.timeline || props.period;

    const renderPerson = (person, key) => {
        if (!person) return null;
        if (typeof person === 'string') return <span key={key}>{person}</span>;
        const name = person.name || '';
        const url = person.url || '';
        return url ? (
            <a key={key} href={url} target="_blank" rel="noreferrer">
                {name}
            </a>
        ) : (
            <span key={key}>{name}</span>
        );
    };

    const renderPeople = (value) => {
        if (!value) return null;
        if (Array.isArray(value)) {
            return (
                <>
                    {value.map((p, i) => (
                        <>
                            {renderPerson(p, i)}
                            {i < value.length - 1 ? ', ' : ''}
                        </>
                    ))}
                </>
            );
        }
        return renderPerson(value);
    };

    return (
        <Card className="project-card-view">
            {/* Header / Summary row clickable */}
            <div
                onClick={() => setOpen(!open)}
                role="button"
                aria-expanded={open}
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem 1.25rem',
                    cursor: 'pointer',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                }}
            >
                <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>
                        {props.title}
                    </div>
                    {(props.institution || props.role || timeline) && (
                        <div
                            className="text-muted"
                            style={{ fontSize: '0.9rem' }}
                        >
                            {props.role && <span>{props.role}</span>}
                            {props.role &&
                                (props.institution || timeline) &&
                                ' · '}
                            {props.institution && (
                                <span>{props.institution}</span>
                            )}
                            {props.institution && timeline && ' · '}
                            {timeline && <span>{timeline}</span>}
                        </div>
                    )}
                </div>
                <AiOutlineDown
                    style={{
                        transition: 'transform 0.2s',
                        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                    aria-hidden="true"
                />
            </div>

            {props.imgPath && (
                <Card.Img
                    variant="top"
                    src={props.imgPath}
                    alt="card-img"
                    style={{ maxHeight: 240, objectFit: 'cover' }}
                />
            )}

            <Collapse in={open}>
                <div>
                    <Card.Body>
                        {/* Key details */}
                        {(props.supervisor || props.collaborators) && (
                            <div style={{ marginBottom: '0.5rem' }}>
                                {props.supervisor && (
                                    <div>
                                        <strong>Supervisor:</strong>{' '}
                                        {renderPeople(props.supervisor)}
                                    </div>
                                )}
                                {props.collaborators && (
                                    <div>
                                        <strong>
                                            {Array.isArray(props.collaborators)
                                                ? props.collaborators.length ===
                                                  1
                                                    ? 'Collaborator'
                                                    : 'Collaborators'
                                                : 'Collaborator'}
                                            :
                                        </strong>{' '}
                                        {renderPeople(props.collaborators)}
                                    </div>
                                )}
                            </div>
                        )}

                        {props.description && (
                            <Card.Text style={{ textAlign: 'justify' }}>
                                {props.description}
                            </Card.Text>
                        )}

                        {Array.isArray(props.bullets) &&
                            props.bullets.length > 0 && (
                                <ul
                                    style={{
                                        textAlign: 'left',
                                        paddingLeft: '1.25rem',
                                        marginLeft: 0,
                                        listStylePosition: 'outside',
                                    }}
                                >
                                    {props.bullets.map((b, i) => (
                                        <li
                                            key={i}
                                            style={{ marginBottom: '0.35rem' }}
                                        >
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            )}

                        {props.topics && props.topics.length > 0 && (
                            <>
                                <Card.Text
                                    style={{
                                        marginTop: '10px',
                                        marginBottom: '5px',
                                        textAlign: 'center',
                                    }}
                                >
                                    <strong>
                                        {props.topicsLabel || 'Keywords'}
                                    </strong>
                                </Card.Text>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {renderBadges(props.topics)}
                                </div>
                            </>
                        )}

                        {(props.codeLink ||
                            props.paperLink ||
                            props.siteLink) && (
                            <div style={{ marginTop: '10px' }}>
                                {props.codeLink && (
                                    <Button
                                        variant="primary"
                                        href={props.codeLink}
                                        target="_blank"
                                    >
                                        <BsGithub /> &nbsp; Code
                                    </Button>
                                )}
                                {props.siteLink && (
                                    <Button
                                        variant="primary"
                                        href={props.siteLink}
                                        target="_blank"
                                        style={{ marginLeft: '10px' }}
                                    >
                                        <CgWebsite /> &nbsp; Site
                                    </Button>
                                )}
                                {props.paperLink && (
                                    <Button
                                        variant="primary"
                                        href={props.paperLink}
                                        target="_blank"
                                        style={{ marginLeft: '10px' }}
                                    >
                                        <CgWebsite /> &nbsp; Paper
                                    </Button>
                                )}
                            </div>
                        )}
                    </Card.Body>
                </div>
            </Collapse>
        </Card>
    );
}

export default ResearchCard;
