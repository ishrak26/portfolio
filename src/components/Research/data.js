// Centralized data for Research page cards
// Replace these placeholders with your real experience.

const researchItems = [
    {
        // imgPath: require('../../Assets/Projects/leaf.png'),
        title: "Supervised Principal Component Analysis for Single-Cell Differential Gene Expression in Alzheimer's Disease and Comorbidities",
        role: 'Undergraduate Thesis',
        institution: 'Samee + MDSR Lab',
        timeline: 'Dec 2023 — Present',
        supervisor: {
            name: 'Dr. Mohammad Saifur Rahman',
            url: 'https://cse.buet.ac.bd/faculty/faculty_detail/mrahman',
        },
        collaborators: [
            {
                name: 'Dr. Md. Abul Hassan Samee',
                url: 'https://www.bcm.edu/people-search/md-abul-hassan-samee-29998',
            },
        ],
        description: '',
        bullets: [
            'Motivated by the challenge of uncovering disease-relevant cellular states in complex comorbidities where traditional unsupervised methods often fail to capture clinically meaningful variation, the goal was to develop a method that can integrate clinical data into scRNA-seq analysis to improve the understanding of common disease mechanisms.',

            'Developed a novel supervised dimensionality reduction-based scRNA-seq pipeline that directly incorporates clinical variables in comorbid conditions to guide the downstream analyses, and reflect clinically relevant transcriptional variation, helping to identify additional pathology-associated subpopulations that may be overlooked by unsupervised methods.',

            'Worked on the ROSMAP dataset, a comprehensive scRNA-seq atlas of the aged human prefrontal cortex, that includes 2.3M nuclei from 427 participants.',

            "Demonstrated the utility of our work through its application to Alzheimer's disease and its comorbidities- Hypertension and Parkinson's disease, revealing transcriptional patterns linked to clinical outcomes. Key findings included identifying several genes that are differentially expressed in excitatory neurons and astrocytes. The method provided deeper insights into the molecular pathways shared between neurodegenerative diseases and comorbid conditions.",
        ],
        topics: [
            'scRNA-seq',
            'Scanpy',
            'Seurat',
            'Muscat',
            'Differential Gene Expression',
            'Gene Enrichment Analysis',
            "Alzheimer's Disease",
            'Hypertension',
            "Parkinson's Disease",
            'Comorbidity',
        ],

        // codeLink: 'https://github.com/your/repo',
        // paperLink: 'https://arxiv.org/abs/...',
    },
];

export default researchItems;
