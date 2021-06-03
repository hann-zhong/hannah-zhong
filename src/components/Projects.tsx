import React from 'react';
import Layout from './Layout'
import Text from './fundamentals/Text';
import Image from './fundamentals/Image';
import './styles/Projects.css';
import './styles/global.css';

import img from '../assets/placeholder.png';

function Projects() : JSX.Element {

    const projectsText = 'Code is a great medium to express imagination; ' +
    'it combines problem solving and creativity in the best of ways. From Star Wars-esque simulations to ' +
    'science-y tools, my imagination can get pretty wild. Check out my work below!';
    return (
        <Layout>
            <div id='projects' className='block'>
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