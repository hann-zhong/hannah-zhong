import React from 'react';
import '../styles/Icon.css';

interface IconProps {
  url: string;
  alt: string;
}

function Icon(props:IconProps) : JSX.Element {
    const { url, alt } = props;
    
    return (
      <div className='icon-container'>
        <img src={url} alt={alt}></img>
      </div>
    );
}

export default Icon;