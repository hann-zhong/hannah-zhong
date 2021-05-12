import React from 'react';
import Layout from './Layout'
import Text from './fundamentals/Text';
import Image from './fundamentals/Image';
import './styles/Projects.css';
import './styles/global.css';

import img from '../assets/placeholder.png';

function Projects() : JSX.Element {

    const projectsText = 'some cool things i\'ve made';
    return (
        <Layout>
            <div className='block'>
                <Image 
                    url={img} 
                    alt={'placeholder'} 
                />
                <Text 
                    heading={'projects.'}
                    text={projectsText} 
                />
            </div>
        </Layout>
    );
}

export default Projects;