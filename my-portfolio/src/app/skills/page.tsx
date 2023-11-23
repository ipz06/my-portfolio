import styles from '../ui/card.module.css'

export default function Skills () {

    return (
        <div>
            <h2 className="text-xl font-bold tracking-tight text-slate-200 sm:text-lg py-1">TECHNICAL SKILLS</h2>
            <div className="flex flex-row flex-wrap">
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
            <h2 className="text-xl font-bold tracking-tight text-slate-200 sm:text-lg py-1">STRENGTH</h2>
            <div className="flex flex-row flex-wrap">
                <p className={styles.smallCard}>Precision</p>
                <p className={styles.smallCard}>Organization</p>
                <p className={styles.smallCard}>Motivation</p>
            </div>
            <h2 className="text-xl font-bold tracking-tight text-slate-200 sm:text-lg py-1">LANGUAGES</h2>
            <div className="flex flex-row flex-wrap">
                <p className={styles.smallCard}>Bulgarian</p>
                <p className={styles.smallCard}>English</p>
            </div>
        </div>
    )
};