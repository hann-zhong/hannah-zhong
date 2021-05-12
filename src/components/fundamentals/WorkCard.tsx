import React, { useEffect, useState } from 'react';
import './styles/WorkCard.css';
import './styles/global.css';

interface WorkCardProps {
    width: number;
    height: number;
    name: string
}

function WorkCard(props:WorkCardProps) : JSX.Element {
    const {width, height, name} = props;
    return (
        <div>{name}</div>
    );
}

export default WorkCard;