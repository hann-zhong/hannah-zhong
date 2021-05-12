import React from 'react';
import '../styles/Image.css';
import '../styles/global.css'


interface ImageProps {
  url: string;
  alt: string;
}

function Image(props:ImageProps) : JSX.Element {
    const { url, alt } = props;
    
    return (
      <div className='img-container'>
        <img src={url} alt={alt}></img>
      </div>
    );
}

export default Image;