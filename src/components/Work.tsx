import React from 'react';
import Layout from './Layout'
import Text from './fundamentals/Text';
import Image from './fundamentals/Image';
import './styles/Work.css';
import './styles/global.css';

import img from '../assets/placeholder.png';

function Work() : JSX.Element {

    const workText = 'In the past, I\'ve gotten to work with diverse groups of people while delivering impactful products. ' +
    'You know, making cool things with computers and stuff. Here\'s where I\'ve worked:';
    return (
        <Layout>
            <div id='work' className='block'>
                <Text 
                    heading={'work.'}
                    text={workText} 
                />
                <Image 
                    url={img} 
                    alt={'placeholder'} 
                />
            </div>
        </Layout>
    );
}

export default Work;