import '../styles/ProjectCard.css';
import '../styles/global.css';

interface ProjectCardProps {
    name: string
    desc: string
    color: string
    link: string
}

function ProjectCard(props:ProjectCardProps) : JSX.Element {
    const { name, desc, color, link } = props;
    return (
        <div className='card' style={{backgroundColor: color, height: 250}}>
            <a href={link} target='blank' className='projName'>{name}</a>
            <p className='projDesc'>{desc}</p>
        </div>
    );
}

export default ProjectCard;