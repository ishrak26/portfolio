import { Container, Row, Col } from 'react-bootstrap';
import SemesterCard from './SemesterCard';

function Teaching() {
    const semesters = [
        {
            semester: 'January 2025',
            year: 'April 2025 - Present',
            institution:
                'Bangladesh University of Engineering and Technology (BUET)',
            institutionLink: 'https://www.buet.ac.bd/',
            courses: [
                {
                    name: 'CSE 106: Data Structures and Algorithms I Sessional',
                    link: 'https://cse.buet.ac.bd/academics/course_detail/CSE106',
                    details: [
                        'Assisted in teaching data structures and algorithms using C++.',
                        'Designed assignments on Binary Search Tree.',
                        'Conducted lab sessions focusing on practical implementation of algorithms.',
                        'Graded assignments on Asymptotic Analysis, List, Stack, and provided feedback to students.',
                    ],
                },
                {
                    name: 'CSE 108: Object-Oriented Programming Sessional',
                    link: 'https://cse.buet.ac.bd/academics/course_detail/CSE108',
                    details: [
                        'Taught object-oriented programming concepts using C++ and Java.',
                        'Designed lab assignments on class design, copy constructor, dynamic memory management, and polymorphism in C++.',
                        // 'Supervised student projects involving JavaFX applications.',
                        'Graded lab assignments on C++ and Java, and provided mentorship.',
                    ],
                },
                {
                    name: 'CSE 216: Database Sessional',
                    link: 'https://cse.buet.ac.bd/academics/course_detail/CSE216',
                    details: [
                        'Taught database design and management concepts using Oracle.',
                        'Designed lab assignments on SQL queries, involving JOINs, GROUP BY, Set Operations and Subqueries.',
                        'Supervised student projects involving database-driven applications.',
                        'Graded lab assignments on Basic and Advanced SQL, and provided mentorship.',
                    ],
                },
                {
                    name: 'CSE 406: Computer Security Sessional',
                    link: 'https://cse.buet.ac.bd/academics/course_detail/CSE406',
                    details: [
                        'Taught computer security concepts including cryptography, cryptographic algorithms and schemes like AES-128, RSA, Diffie-Hellman, Elliptic Curve Cryptography.',
                        'Designed assignments on cryptography and socket programming.',
                        'Graded assignments on cryptography, socket programming, buffer overflow and provided mentorship.',
                    ],
                },
                {
                    name: 'CSE 408: Software Development Sessional',
                    link: 'https://cse.buet.ac.bd/academics/course_detail/CSE408',
                    details: [
                        'Guided students on full-stack project development with modern web frameworks.',
                        'Reviewed project architectures like Microservices, Model-View-Controller, Layered Architecture using React, Next.js, Node.js, Spring Boot and PostgreSQL.',
                        'Conducted code reviews and provided feedback on best practices including version control, code organization, project management using Github Projects and testing strategies, devops practices including CI/CD pipelines, Docker.',
                        'Mentored student projects like intra-institution dorm management systems, donation and fund collection and management systems, and trip planning applications.',
                    ],
                },
            ],
        },
        {
            semester: 'Summer 2025',
            year: 'August 2025 - September 2025',
            institution: 'BRAC University',
            institutionLink: 'https://www.bracu.ac.bd/',
            courses: [
                {
                    name: 'CSE 220: Data Structures',
                    link: 'https://cse.sds.bracu.ac.bd/course/view/CSE220',
                    details: [
                        'Taught fundamental data structures such as arrays, linked lists, stacks, queues, hash tables, binary search trees, heaps and graphs.',
                        'Implemented data structures in Python and Java.',
                    ],
                },
                {
                    name: 'CSE 221: Algorithms',
                    link: 'https://cse.sds.bracu.ac.bd/course/view/CSE221',
                    details: [
                        "Taught graph algorithms including BFS, DFS, Kosaraju's, Dijkstra's and Minimum Spanning Tree algorithms.",
                        'Covered algorithm design techniques including divide and conquer, dynamic programming, backtracking and greedy algorithms.',
                        'Analyzed algorithm complexity and performance.',
                        'Implemented algorithms in Python and Java.',
                        'Guided students through problem-solving sessions and coding exercises.',
                    ],
                },
                {
                    name: 'CSE 422: Artificial Intelligence',
                    link: 'https://cse.sds.bracu.ac.bd/course/view/CSE422',
                    details: [
                        'Covered topics such as machine learning, including supervised and unsupervised learning.',
                        'Implemented AI algorithms and models using Python and TensorFlow.',
                        'Supervised lab sessions and guided students in their AI projects.',
                    ],
                },
            ],
        },
    ];

    // reverse the semesters to show the latest one first
    semesters.reverse();

    return (
        <Container
            fluid
            className="teaching-section"
            style={{
                backgroundColor: 'transparent',
                paddingTop: '40px',
                paddingBottom: '40px',
            }}
        >
            <Container>
                <h1
                    className="project-heading"
                    style={{ color: '#fff', marginBottom: '30px' }}
                >
                    My <strong className="purple">Teaching</strong> Experience
                </h1>
                <Row>
                    <Col md={12}>
                        {semesters.map((entry, index) => (
                            <SemesterCard key={index} {...entry} />
                        ))}
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Teaching;
