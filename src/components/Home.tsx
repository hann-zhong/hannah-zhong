import React from 'react';
import Layout from './Layout'
import Text from './fundamentals/Text';
import Image from './fundamentals/Image';
import './styles/Home.css';
import './styles/global.css';

import img from '../assets/pan0.png';

function Home(): JSX.Element {

    const homeText = 'I’m a software engineer who aims to create products that are ' + 
    ' both pragmatic and enjoyable, while learning as much as I can in the process.';
     
    return (
        <Layout>
            <div id='home' className='block'>
                <Text 
                    heading={'hello there, i\'m hannah zhong.'}
                    text={homeText} 
                />
                <Image 
                    url={img} 
                    alt={'panel 0'} 
                />
            </div>
        </Layout>
    );
}

export default Home;