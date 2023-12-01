import styles from '../ui/card.module.css'
import Link from 'next/link'

export default function Skills () {

    return (
        <section id='knowledge' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
            <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
                <h2 className='text-[#3BBA9C] text-lg font-bold tracking-widest lg:sr-only'>KNOWLEDGE</h2>
            </div>
            <h1 className="text-3xl font-bold tracking-widest text-[#3BBA9C] py-5 sr-only sm:not-sr-only">KNOWLEDGE</h1>
            <h3 className='lg:text-lg font-bold text-[#d6d6d6] lg:py-5 sm:text-xs sm:pb-5'>TECHNICAL SKILLS</h3>
            <div className="flex flex-row flex-wrap  text-[#d6d6d6]">             
                <p className={styles.smallCard}>JavaScript</p>
                <p className={styles.smallCard}>TypeScript</p>
                <p className={styles.smallCard}>React</p>
                <p className={styles.smallCard}>Redux</p>
                <p className={styles.smallCard}>NextJS</p>
                <p className={styles.smallCard}>HTML</p>
                <p className={styles.smallCard}>CSS</p>
                <p className={styles.smallCard}>ChakraUI</p>
                <p className={styles.smallCard}>TailwindCSS</p>
                <p className={styles.smallCard}>REST API</p>
                <p className={styles.smallCard}>OOP</p>
                <p className={styles.smallCard}>GIT</p>
                <p className={styles.smallCard}>Adobe PS</p>
            </div>
            <h2 className="lg:text-xl font-bold tracking-tight text-[#d6d6d6] sm:text-xs lg:py-5 sm:py-5">STRENGTH</h2>
            <div className="flex flex-row flex-wrap text-[#d6d6d6]">
                <p className={styles.smallCard}>Precision</p>
                <p className={styles.smallCard}>Organization</p>
                <p className={styles.smallCard}>Motivation</p>
            </div>
            <h2 className="lg:text-xl font-bold tracking-tight text-[#d6d6d6] sm:text-xs lg:py-5 sm:py-5">LANGUAGES</h2>
            <div className="flex flex-row flex-wrap text-[#d6d6d6]">
                <p className={styles.smallCard}>Bulgarian</p>
                <p className={styles.smallCard}>English</p>
            </div>
            <h2 className="lg:text-xl font-bold tracking-tight text-[#d6d6d6] sm:text-xs lg:py-5 sm:py-3">CERTIFICATES</h2>
            <div className="flex flex-col text-[#d6d6d6] ">
                <Link
                href='https://drive.google.com/drive/folders/1eLymQubGk14iR5aaORzxIZ3lb4s1SX3q'>
                    <div className={styles.card}><p>Alpa JS Track - Telerik Academy</p></div>
                </Link>
                <p className={styles.card}>React-The complete guide</p>
            </div>
        </section>
    )
};