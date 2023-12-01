import { feedback } from "../ui/data";
import styles from '../ui/card.module.css';

export default function Voice () {
    
    return (
        <section className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'  id='voice'>
             <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
                <h2 className='text-[#3BBA9C] text-lg font-bold tracking-widest lg:sr-only'>TEAMMATE`S VOICE</h2>
            </div>

            <h1 className="text-3xl font-bold tracking-widest text-[#3BBA9C] py-5 lg:pb-5 sr-only sm:not-sr-only">TEAMMATE`S VOICE</h1>
            <ul>
                {feedback.map(mate => <li key={mate.id} className={styles.card}> {mate.text} <h3 className="font-bold text-[#d6d6d6] py-5">{mate.name} </h3><span className="italic text-[#d6d6d6]">{mate.mate}</span></li>)}
            </ul>
            
        </section>
    )
}