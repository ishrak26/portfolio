import { Accordion } from 'react-bootstrap';
import {
    FaChalkboardTeacher,
    FaCode,
    FaCalendarAlt,
    FaBookOpen,
    FaUniversity,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

function SemesterCard({
    semester,
    year,
    institution,
    institutionLink,
    courses,
}) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
        >
            <Accordion defaultActiveKey="0">
                <Accordion.Item
                    eventKey="0"
                    style={{
                        backgroundColor: 'transparent',
                        color: '#fff',
                        border: '1px solid #444',
                    }}
                >
                    <Accordion.Header>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                            }}
                        >
                            <div>
                                <div>
                                    <FaBookOpen /> <strong>{semester}</strong>{' '}
                                    Semester{' '}
                                </div>
                                <div>
                                    <FaCalendarAlt /> {year}
                                </div>{' '}
                                <div>
                                    <FaUniversity />{' '}
                                    <a
                                        href={institutionLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            textDecoration: 'none',
                                        }}
                                    >
                                        {institution}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body
                        style={{
                            backgroundColor: 'transparent',
                            color: '#ddd',
                        }}
                    >
                        {courses.map((course, idx) => (
                            <div key={idx} style={{ marginBottom: '1.5rem' }}>
                                <a
                                    href={course.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: '#63b3ed',
                                        fontWeight: '600',
                                        fontSize: '1.05rem',
                                        textDecoration: 'none',
                                    }}
                                >
                                    <FaChalkboardTeacher
                                        style={{ marginRight: '8px' }}
                                    />
                                    {course.name}
                                </a>
                                <div
                                    style={{
                                        marginTop: '0.4rem',
                                        marginLeft: '1.5rem',
                                    }}
                                >
                                    {course.details.map((item, i) => (
                                        <div
                                            key={i}
                                            style={{
                                                fontSize: '0.93rem',
                                                marginBottom: '0.3rem',
                                                display: 'flex',
                                                alignItems: 'start',
                                            }}
                                        >
                                            <FaCode
                                                style={{
                                                    fontSize: '0.7rem',
                                                    marginRight: '8px',
                                                    marginTop: '5px',
                                                }}
                                            />
                                            <span style={{ textAlign: 'left' }}>
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </motion.div>
    );
}
export default SemesterCard;
