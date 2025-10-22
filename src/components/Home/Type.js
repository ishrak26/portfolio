import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    'Computational Biologist',
                    'Single-Cell Transcriptomics',
                    'Machine Learning for Genomics',
                    'Statistical Genetics',
                    'Bioinformatics Pipelines',
                    'Deep Learning for Biology',
                    'scRNA-seq / scATAC-seq',
                    'Reproducible Research (R/Python)',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
