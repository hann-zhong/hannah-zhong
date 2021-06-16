import '../styles/WorkCard.css';
import '../styles/global.css';

interface WorkCardProps {
    name: string
    color: string
    h: number
    loc: string
    dates: string
    position: string
    desc1: string
    desc2: string
}

function WorkCard(props:WorkCardProps) : JSX.Element {
    const { name, color, h, loc, dates, position, desc1, desc2 } = props;
    return (
        <div style={{height: h+75}} className='workBkgd'>
            <div style={{backgroundColor: color, height: h}} className='compBkgd'>
                    <p className='companyName'>{name}</p>
                    <p className='workInfo'>{loc}</p>
                    <p className='workInfo'>{dates}</p>

            </div>
            <div className='workDesc'>
                <div className='workCard'>
                    <p>{position}</p>
                </div>  
                <ul>
                    <li className='workDescItems'>{desc1}</li>
                    <li className='workDescItems'>{desc2}</li>
                </ul>
            </div>
        </div>
    );
}

export default WorkCard;