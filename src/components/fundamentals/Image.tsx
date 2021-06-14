import React from 'react';
import '../styles/Image.css';
import '../styles/global.css'


interface ImageProps {
  url: string;
  alt: string;
  l: number
}

function Image(props:ImageProps) : JSX.Element {
    const { url, alt, l } = props;
    
    return (
      <div className='image-container'>
        <img src={url} alt={alt} width={l} height={l}></img>
      </div>
    );
}

export default Image;