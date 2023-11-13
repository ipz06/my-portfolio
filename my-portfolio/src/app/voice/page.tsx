import { feedback } from "../ui/data";
import styles from '../ui/card.module.css';

export default function Voice () {
    
    return (
        <>
            <ul id='voice' >
                {feedback.map(mate => <li key={mate.id} className={styles.card}> {mate.text} <h3 className="font-bold">{mate.name} </h3><span className="italic">{mate.mate}</span></li>)}
            </ul>
            
        </>
    )
}