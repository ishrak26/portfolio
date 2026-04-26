import { Container, Row, Col } from 'react-bootstrap';
import { useState, useMemo } from 'react';
import SemesterCard from './SemesterCard';
import './Teaching.css';

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
        {
            semester: 'Fall 2024',
            year: 'September 2024 - November 2024',
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
            ],
        },
        {
            semester: 'July 2025',
            year: 'November 2025 - May 2026',
            institution:
                'Bangladesh University of Engineering and Technology (BUET)',
            institutionLink: 'https://www.buet.ac.bd/',
            courses: [
                {
                    name: 'CSE 106: Data Structures and Algorithms I Sessional',
                    link: 'https://cse.buet.ac.bd/academics/course_detail/CSE106',
                    details: [
                        'Assisted in teaching data structures and algorithms using C and C++.',
                        'Designed assignments on Arrays and Linked Lists.',
                        'Graded assignments on Asymptotic Analysis, List, Stack, Queue, BST, Heap, Graph, Greedy Algorithms, Divide and Conquer Techniques, Dynamic Programming and provided feedback to students.',
                    ],
                },
                {
                    name: 'CSE 208: Data Structures and Algorithms II Sessional',
                    link: 'https://cse.buet.ac.bd/academics/course_detail/CSE208',
                    details: [
                        'Assisted in teaching advanced data structures and algorithms using C++ and Java.',
                        'Designed assignments on All Pair Shortest Path algorithms.',
                        'Conducted lab sessions focusing on practical implementation of advanced algorithms and data structures.',
                        'Graded assignments on Graph Algorithms, Balanced Binary Search Trees including AVL Trees and Red-Black Trees, Hash Tables, NP-Complete Problems and provided feedback to students.',
                    ],
                },
                {
                    name: 'CSE 274: Computer Programming and Numerical Analysis for Materials Modeling Sessional',
                    link: 'https://cse.buet.ac.bd/academics/course_detail/CSE274',
                    details: [
                        'Assisted in teaching computer programming and numerical analysis for materials modeling using C to the students of the Department of Nanomaterials and Ceramic Engineering.',
                        'Designed assignments on basics of C programming, and numerical methods and programming techniques using C.',
                        'Conducted lab sessions focusing on practical implementation of numerical algorithms.',
                        'Graded assignments on numerical methods using C programming and provided feedback to students.',
                    ],
                },
                {
                    name: 'CSE 282: Computer Programming Sessional',
                    link: 'https://cse.buet.ac.bd/academics/course_detail/CSE282',
                    details: [
                        'Assisted in teaching structured and object-oriented computer programming using C and C++.',
                        'Designed assignments on programming concepts and techniques.',
                        'Conducted lab sessions focusing on practical implementation of programming concepts.',
                        'Graded assignments on programming concepts and provided feedback to students.',
                    ],
                },
                {
                    name: 'CSE 283: Digital Techniques',
                    link: 'https://cse.buet.ac.bd/academics/course_detail/CSE283',
                    details: [
                        'Assisted in teaching digital techniques to the students of the Department of Biomedical Engineering.',
                        'Taught combinatorial and sequential logic design concepts and their applications in digital systems.',
                        'Graded class tests on digital techniques and provided feedback to students.',
                    ],
                },
                {
                    name: 'CSE 450: Capstone Project Sessional',
                    link: 'https://cse.buet.ac.bd/academics/course_detail/CSE450',
                    details: [
                        'Guided students on their capstone projects, providing mentorship and feedback.',
                        'Reviewed project proposals and provided guidance on project scope and objectives.',
                        'Conducted regular check-ins to monitor project progress and provide support.',
                        'Evaluated final project presentations and provided constructive feedback.',
                        'Mentored 3 capstone projects, of which 2 were in collaboration with Samsung Research Bangladesh, and 1 was on developing a conference management system.',
                    ],
                },
            ],
        },
        {
            semester: '32nd',
            year: 'January 2024 - May 2024',
            institution:
                'BK-IAC, Department of Computer Science and Engineering, Bangladesh University of Engineering and Technology (BUET)',
            institutionLink: 'https://cse.buet.ac.bd/web/iac',
            courses: [
                {
                    name: 'Oracle 19c Database Management and Administration',
                    link: 'https://cse.buet.ac.bd/web/iac/course_detail/IAC-DB-DMA',
                    details: [
                        'Taught database management and administration concepts using Oracle 19c.',
                        'Covered topics such as database architecture, SQL queries, database security, backup and recovery, performance tuning and database administration.',
                        'Conducted hands-on sessions focusing on practical implementation of database management and administration concepts.',
                        'Graded quizzes and assignments on SQL queries, database security, backup and recovery, performance tuning and provided feedback to students.',
                    ],
                },
            ],
        },
    ];

    semesters.reverse();

    const [selectedInstitution, setSelectedInstitution] = useState(null);

    // Institution abbreviations mapping
    const institutionAbbreviations = {
        'Bangladesh University of Engineering and Technology (BUET)': 'BUET',
        'BK-IAC, Department of Computer Science and Engineering, Bangladesh University of Engineering and Technology (BUET)':
            'BK-IAC',
        'BRAC University': 'BRACU',
    };

    // Desired order
    const institutionOrder = ['BUET', 'BK-IAC', 'BRACU'];

    // Group semesters by institution
    const institutionGroups = useMemo(() => {
        const groups = {};
        semesters.forEach((sem) => {
            if (!groups[sem.institution]) {
                groups[sem.institution] = {
                    institution: sem.institution,
                    institutionLink: sem.institutionLink,
                    semesters: [],
                };
            }
            groups[sem.institution].semesters.push(sem);
        });
        return groups;
    }, []);

    // Sort institutions by desired order
    const institutions = Object.values(institutionGroups).sort((a, b) => {
        const abbrevA =
            institutionAbbreviations[a.institution] || a.institution;
        const abbrevB =
            institutionAbbreviations[b.institution] || b.institution;
        return (
            institutionOrder.indexOf(abbrevA) -
            institutionOrder.indexOf(abbrevB)
        );
    });
    const activeInstitution =
        selectedInstitution ||
        (institutions.length > 0 ? institutions[0].institution : null);
    const activeData = institutionGroups[activeInstitution];

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
                    style={{ color: '#fff', marginBottom: '40px' }}
                >
                    My <strong className="purple">Teaching</strong> Experience
                </h1>

                {/* Institution Tabs */}
                <div className="institution-tabs-container">
                    <div className="institution-tabs">
                        {institutions.map((inst) => (
                            <button
                                key={inst.institution}
                                onClick={() =>
                                    setSelectedInstitution(inst.institution)
                                }
                                className={`institution-tab ${
                                    activeInstitution === inst.institution
                                        ? 'active'
                                        : ''
                                }`}
                                title={inst.institution}
                            >
                                <span className="tab-text">
                                    {institutionAbbreviations[
                                        inst.institution
                                    ] || inst.institution}
                                </span>
                                <span className="tab-count">
                                    {inst.semesters.length}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                {activeData && (
                    <div className="teaching-content">
                        {activeData.semesters.map((entry, index) => (
                            <SemesterCard key={index} {...entry} />
                        ))}
                    </div>
                )}
            </Container>
        </Container>
    );
}

export default Teaching;
