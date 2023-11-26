import { feedback } from "../ui/data";
import styles from '../ui/card.module.css';

export default function Voice () {
    
    return (
        <div id='voice'>

            <h2 className="text-3xl font-bold tracking-tight text-[#3BBA9C] py-10">TEAMMATE`S VOICE</h2>
            <ul>
                {feedback.map(mate => <li key={mate.id} className={styles.card}> {mate.text} <h3 className="font-bold text-[#d6d6d6] py-5">{mate.name} </h3><span className="italic text-[#d6d6d6]">{mate.mate}</span></li>)}
            </ul>
            
        </div>
    )
}