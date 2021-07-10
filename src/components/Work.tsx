import React from 'react';
import Layout from './Layout'
import Text from './fundamentals/Text';
import Image from './fundamentals/Image';
import WorkCard from './fundamentals/WorkCard';
import './styles/Work.css';
import './styles/global.css';

import img from '../assets/pan2.png';

function Work() : JSX.Element {

    const workText = 'In the past, I\'ve gotten to work with diverse groups of people while delivering impactful products. ' +
    'You know, making cool things with computers and stuff. Here\'s a gist of what I\'ve done:';
    return (
        <Layout>
            <div id='work'>
                <div className='block'>
                    <Text 
                        heading={'work.'}
                        text={workText} 
                    />
                    <Image 
                        url={img} 
                        alt={'panel 2'}
                    />
                </div>
                <div className='workBody'>
                <WorkCard 
                        name={'ORACLE'} 
                        color={'#DA8E7F'}
                        loc={'Seattle, WA'}
                        dates={'Summer 2021'}
                        position={'Software Engineer Intern'}
                        desc1={'Oracle Cloud Infrastructure (OCI).'}
                        desc2={'I\'m still a newbie! Come back later to see what I\'ve done!! 😉'}
                    />
                    <WorkCard 
                        name={'CHARIPAY'} 
                        color={'#9DE1F0'}
                        loc={'Los Angeles, CA'}
                        dates={'Spring 2020 - Summer 2021'}
                        position={'Web Developer'}
                        desc1={'Helped to create frontend for COVID-19 donation portal, which faciliated the distribution of 200K+ PPE.'}
                        desc2={'Developed responsive pages for company website based on Figma wireframes in React;' + 
                            ' wrote scripts for a confirmation email service.'}
                    />
                    <WorkCard 
                        name={'FIDELITY INVESTMENTS'} 
                        color={'#B2CD8C'}
                        loc={'Smithfield, RI'}
                        dates={'Summer 2020'}
                        position={'Software Engineer Intern'}
                        desc1={'Implented REST APIs to extract and manipulate relational DB information. Modified functions to support additional business logic.'}
                        desc2={'Wrote service automation scripts and unit tests with 100% code coverage.'}
                    />
                    <WorkCard 
                        name={'CUNY HUNTER COLLEGE'} 
                        color={'#ba96d6'}
                        loc={'New York, NY'}
                        dates={'Summer 2017'}
                        position={'Bioinformatics Research Assistant'}
                        desc1={'Identified SNPs in bacteria genomes that contribute to ' +  
                        'antibiotic resistance; pinpointed 7 mutations.'}
                        desc2={'Wrote a program to detect the impact of nucleotide changes on resulting amino acids.'}
                    />
                    <p className='extra'>Some other things: I'm on the technical board of&nbsp; 
                        <a href="https://www.creativelabsucla.com/">Creative Labs↗︎</a>, UCLA's digital design community,
                        where I develop cool internal tools and help the club run smoothly. Also, I built an autonomous rover
                        that could navigate an obstacle course and pick up objects for 
                        <a href="https://samueli.ucla.edu/makerspace/"> UCLA Makerspace↗︎</a>.
                    </p>
                </div>          
            </div>
        </Layout>
    );
}

export default Work;
