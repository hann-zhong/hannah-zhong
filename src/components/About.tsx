import React from 'react';
import Layout from './Layout'
import Text from './fundamentals/Text';
import Image from './fundamentals/Image';
import './styles/About.css';
import './styles/global.css';

import img from '../assets/pan1.png';

function About() : JSX.Element {

     const aboutText = 'Originally from New York, I\'m now a second-year Computer Science student at UCLA. ' +
    'I want to create interactive software for social good, entertainment, education, and...well, everything! ' +
    'When I\'m not a software developer or a sleep-deprived student, I\'m many other things: avid foodie, novice photographer, dance enthusiast.';

    return (
        <Layout>
            <div id='about' className='block'>
                <Image 
                    url={img} 
                    alt={'panel 1'} 
                />
                <Text 
                    heading={'about.'}
                    text={aboutText} 
                />
            </div>
        </Layout>
    );
}

export default About;