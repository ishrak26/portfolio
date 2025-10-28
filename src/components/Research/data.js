// Centralized data for Research page cards
// Replace these placeholders with your real experience.

const researchItems = [
    {
        title: "Supervised Principal Component Analysis for Single-Cell Differential Gene Expression in Alzheimer's Disease and Comorbidities",
        role: 'Undergraduate Thesis',
        institution: 'Samee + MDSR Lab',
        timeline: 'Jan 2024 — Feb 2025',
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

            'Developed a novel supervised dimensionality reduction-based scRNA-seq pipeline that directly incorporates clinical variables in comorbid conditions to guide the downstream analyses.',

            "Demonstrated the utility of our work through its application to Alzheimer's disease and its comorbidities- Hypertension and Parkinson's disease, by working on a comprehensive scRNA-seq atlas of the aged human prefrontal cortex, that includes 2.3M nuclei from 427 participants of the ROSMAP studies.",

            'Key findings include identifying several genes that are differentially expressed in excitatory neurons and astrocytes, revealing transcriptional patterns linked to clinical outcomes.',
        ],
        topics: [
            'Single-Cell Transcriptomics',
            'Differential Gene Expression',
            'Gene Enrichment',
            'Python',
            'R',
            'Scanpy',
            'Seurat',
            'Muscat',
            "Alzheimer's Disease",
            'Hypertension',
            "Parkinson's Disease",
            'ROSMAP',
        ],
        // codeLink: 'https://github.com/your/repo',
        // paperLink: 'https://arxiv.org/abs/...',
    },
    {
        title: "Hippocampus Segmentation for Alzheimer's Induced Dementia Prediction",
        role: 'Research Project',
        institution: 'CSE, BUET',
        timeline: 'Dec 2024',
        supervisor: {
            name: 'Dr. Muhammad Masroor Ali',
            url: 'https://cse.buet.ac.bd/faculty/faculty_detail/mmasroorali',
        },
        collaborators: [],
        description: '',
        bullets: [
            'Focused on hippocampus segmentation from MRI images to identify early signs of AD dementia.',

            'Preprocessed MRI datasets to enhance model training and validation quality.',

            'Implemented U-Net architecture for accurate hippocampus region segmentation.',

            'Incorporated Swish activation function, spatial dropout, dice loss, etc., for improved segmentation.',

            'Evaluated segmentation performance using metrics such as Dice Coefficient and Jaccard Index.',
        ],
        topics: [
            'Computer Vision',
            'TensorFlow',
            'U-Net',
            'Swish Activation',
            'MRI Images',
            'Image Segmentation',
        ],
        codeLink:
            'https://github.com/ishrak26/CSE-472-Machine-Learning-Sessional-Project',
        // paperLink: 'https://arxiv.org/abs/...',
    },
    {
        title: 'PatchRecall: Patch-Driven Retrieval for Automated Program Repair',
        role: 'Research Project',
        institution: 'CSE, BUET',
        timeline: 'Aug 2025 — Sep 2025',
        supervisor: {
            name: 'Dr. Anindya Iqbal',
            url: 'https://cse.buet.ac.bd/faculty/faculty_detail/anindyaiqbal',
        },
        collaborators: [],
        description: '',
        bullets: [
            'Developed PatchRecall, a hybrid retrieval approach for Automated Program Repair (APR), which balances recall with conciseness by combining codebase retrieval and history-based retrieval techniques using Sentence Transformer.',

            'Achieved significant improvements in retrieval precision and recall, demonstrated through experiments on the SWE-bench benchmark, outperforming traditional retrieval methods like BM25 and TF-IDF.',
        ],
        topics: [
            'GitHub Issue Resolution',
            'Automated Program Repair (APR)',
            'SWE-bench',
            'Information Retrieval',
            'Sentence Transformer',
        ],
        // codeLink: 'https://github.com/your/repo',
        paperLink:
            'https://drive.google.com/file/d/1fqcNiEjORauujwVX0jVtR4BEjR59rY1m/view?usp=drive_link',
    },
];

export default researchItems;
