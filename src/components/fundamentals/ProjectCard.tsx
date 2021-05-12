import React, { useEffect, useState } from 'react';
import './styles/ProjectCard.css';
import './styles/global.css';

interface ProjectCardProps {
    width: number;
    height: number;
    name: string
}

function ProjectCard(props:ProjectCardProps) : JSX.Element {
    const {width, height, name} = props;
    return (
        <div>{name}</div>
    );
}

export default ProjectCard;