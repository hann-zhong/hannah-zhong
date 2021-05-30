import React from 'react';
import Layout from './Layout'
import Text from './fundamentals/Text';
import Image from './fundamentals/Image';
import './styles/Work.css';
import './styles/global.css';

import img from '../assets/placeholder.png';

function Work() : JSX.Element {

    const workText = 'I\'ve been fortunate enough to have the opportunities to work at some ' +
    'amazing places with some even more amazing people. I\'ve delivered impactful products, ' +
    'collaborated with a diverse group of people, and never once had to get coffee! These experiences have truly shaped my path as an engineer.';
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