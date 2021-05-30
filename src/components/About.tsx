import React from 'react';
import Layout from './Layout'
import Text from './fundamentals/Text';
import Image from './fundamentals/Image';
import './styles/About.css';
import './styles/global.css';

import img from '../assets/placeholder.png';

function About() : JSX.Element {

    const aboutText = 'About meeee';
    
    return (
        <Layout>
            <div id='about' className='block'>
                <Image 
                    url={img} 
                    alt={'placeholder'} 
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