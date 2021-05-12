import React from 'react';
import './styles/Text.css';
import './styles/global.css'

interface TextProps {
  text: string;
  heading: string;
}

function Text(props:TextProps) : JSX.Element {
    const { text, heading } = props;
    return (
        <div className='textBlock'>
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    );
}

export default Text;