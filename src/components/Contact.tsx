import React from 'react';
import Layout from './Layout'
import Text from './fundamentals/Text';
import Image from './fundamentals/Image';
import './styles/Contact.css';
import './styles/global.css';

import img from '../assets/placeholder.png';
import github from '../assets/github-icon.png';
import linkedin from '../assets/linkedin-icon.png';

function Contact() : JSX.Element {
    return (
        <Layout>
            <>
            <div id='contact' className='block' style={{marginBottom: '100px'}}>
                <div className='about-col'>
                    <Text 
                        heading={'miss me already? catch me on: '}
                        text={''} 
                    />
                    <div className='about-row'>
                        <a href='https://github.com/hann-zhong' target='blank'>
                            <Image
                                url={github} 
                                alt={'placeholder'}
                            />
                        </a>
                        <a href='https://www.linkedin.com/in/hannah-z-113910191/' target='blank'>
                            <Image 
                                url={linkedin} 
                                alt={'placeholder'} 
                            />
                        </a>
                    </div>
                </div>
                <Image 
                    url={img} 
                    alt={'placeholder'} 
                />
            </div>
            <hr style={{width: '80vw', marginBottom: '24px'}}></hr>
            <p className='copy-text'>Hannah Zhong © 2021</p>
            <p className='copy-text'>Made with 💙  &nbsp;from New York, NY. | Built with TypeScript and React.</p>
            </>
        </Layout>
    );
}

export default Contact;