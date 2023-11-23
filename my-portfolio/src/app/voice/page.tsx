import { feedback } from "../ui/data";
import styles from '../ui/card.module.css';

export default function Voice () {
    
    return (
        <>

            <h2 className="text-xl font-bold tracking-tight text-slate-200 sm:text-lg py-1">TEAMMATE`S VOICE</h2>
            <ul id='voice' >
                {feedback.map(mate => <li key={mate.id} className={styles.card}> {mate.text} <h3 className="font-bold">{mate.name} </h3><span className="italic">{mate.mate}</span></li>)}
            </ul>
            
        </>
    )
}