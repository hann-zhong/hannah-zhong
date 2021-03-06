import React from 'react';
import Layout from './Layout'
import Text from './fundamentals/Text';
import Image from './fundamentals/Image';
import ProjectCard from './fundamentals/ProjectCard';
import './styles/Projects.css';
import './styles/global.css';

import img from '../assets/pan3.png';

function Projects() : JSX.Element {

    const projectsText = 'Code is a great medium to express imagination; ' +
    'it combines problem solving and creativity in the best of ways. From Star Wars-esque simulations to ' +
    'science-y tools, my imagination can get pretty wild. Check out my work below!';
    return (
        <Layout>
            <div id='projects' >
            <div className='block' style={{paddingTop: 64}}>
                    <Image 
                        url={img} 
                        alt={'panel 3'} 
                    />
                    <Text 
                        heading={'projects.'}
                        text={projectsText} 
                    />
                </div>

                <div className='projBody'>
                    <div className='grid-container'>
                        <div className='grid-item item1'>
                            <ProjectCard
                                name={'👻 spooks↗︎'}
                                desc={'A basic 2D top-down shooter game where the user plays as a powerful wizard who must fight and ward off dangerous ghosts. (Unity/C#)'}
                                color={'#F8F3D4'}
                                link={'https://github.com/hann-zhong/spooks'}
                            />
                        </div>
                        <div className='grid-item item2'>
                            <ProjectCard
                                name={'🚀 a galaxy far, far away↗︎'}
                                desc={'The Force is strong with you. Pilot your own starship and explore a 3D fantasy solar system! (JavaScript)'}
                                color={'#414C72'}
                                link={'https://github.com/hann-zhong/a-galaxy-far-far-away'}
                            />
                        </div>
                        <div className='grid-item item3'>
                            <ProjectCard
                                name={'💸 stock predictor↗︎'}
                                desc={'Predicting stock prices with multiple linear regression. (Python/Jupyter Notebook)'}
                                color={'#FFE69B'}
                                link={'https://github.com/hann-zhong/stock-predictor'}
                            />
                        </div>
                        <div className='grid-item item4'>
                            <ProjectCard
                                name={'🍱 goober eats'}
                                desc={'Mock food delivery logistics engine that provides point-by-point routing for the Greater Los Angeles area. (C++)'}
                                color={'#EB9B9B'}
                                link={'https://github.com/hann-zhong'}
                            />
                        </div>
                        <div className='grid-item item5'>
                            <ProjectCard
                                name={'🧬 snp analyzer↗︎'}
                                desc={'Genomics tool that parses a user-inputted DNA segment and determines if a single nucleotide polymorphism is a silent mutation' + 
                                    ' or if it results in a different amino acid. (Java)'}
                                color={'#9DE9E3'}
                                link={'https://github.com/hann-zhong/snp-analyzer'}
                            />
                        </div>
                        <div className='grid-item item6'>
                            <ProjectCard
                                name={'🎨 sketch↗︎'}
                                desc={'Simple sketchpad application that allows you to draw and pick colors with a click of the mouse. (Java)'}
                                color={'#c8e3b1'}
                                link={'https://github.com/hann-zhong/sketchpad'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Projects;