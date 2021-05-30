import React from 'react';
import Layout from './Layout'
import Text from './fundamentals/Text';
import Image from './fundamentals/Image';
import './styles/Work.css';
import './styles/global.css';

import img from '../assets/placeholder.png';

function Work() : JSX.Element {

    const workText = 'some cool places i\'ve been';
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