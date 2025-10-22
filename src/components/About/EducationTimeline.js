import React from 'react';
import { Row, Col } from 'react-bootstrap';

function EducationTimeline({ items }) {
    if (!Array.isArray(items) || items.length === 0) return null;

    // Sort descending by year to keep most recent (BSc 2025) on top
    const sorted = [...items].sort((a, b) => (b.year || 0) - (a.year || 0));

    return (
        <Row
            className="education-timeline-row"
            style={{ justifyContent: 'center' }}
        >
            <Col md={12} lg={10}>
                <div className="education-timeline">
                    {sorted.map((ed, idx) => (
                        <div className="timeline-item" key={idx}>
                            <div className="timeline-dot" />
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3 className="timeline-degree">
                                        {ed.degree}
                                    </h3>
                                    <span className="timeline-time">
                                        {ed.timeline || ed.year}
                                    </span>
                                </div>
                                <div className="timeline-sub">
                                    <span className="timeline-institution">
                                        {ed.institution}
                                    </span>
                                    {ed.major && (
                                        <span className="timeline-sep">
                                            {' '}
                                            ·{' '}
                                        </span>
                                    )}
                                    {ed.major && (
                                        <span className="timeline-major">
                                            {ed.major}
                                        </span>
                                    )}
                                </div>
                                {ed.result && (
                                    <div className="timeline-result">
                                        <strong>Result:</strong>{' '}
                                        <span>{ed.result}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </Col>
        </Row>
    );
}

export default EducationTimeline;
