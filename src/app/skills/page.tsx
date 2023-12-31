'use client';
import styles from '../ui/card.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { Tooltip } from 'react-tooltip'

export default function Skills () {

    return (
        <section  className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24' id='knowledge'>
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
                <p className={styles.smallCard}>NextJs</p>
                <p className={styles.smallCard}>Vue</p>
                <p className={styles.smallCard}>HTML</p>
                <p className={styles.smallCard}>CSS</p>
                <p className={styles.smallCard}>TailwindCSS</p>
                <p className={styles.smallCard}>ChakraUI</p>
                <p className={styles.smallCard}>REST API</p>
                <p className={styles.smallCard}>OOP</p>
                <p className={styles.smallCard}>GIT</p>
                <p className={styles.smallCard}>Adobe PS</p>
            </div>
            <h2 className="lg:text-xl font-bold tracking-tight text-[#d6d6d6] sm:text-xs lg:py-5 sm:py-5">STRENGTH</h2>
            <div className="flex flex-row flex-wrap text-[#d6d6d6]">
                <p 
                className={styles.smallCard} 
                data-tooltip-id="my-tooltip-prec"
                data-tooltip-content="The details catch my eye"
                data-tooltip-place="left"
                >
                    <Tooltip id="my-tooltip-prec" arrowColor='#707070' style={{ backgroundColor: "#707070", color: "white" }}/>
                    <span>Precision</span>
                </p>
                <p 
                className={styles.smallCard}
                data-tooltip-id="my-tooltip-org"
                data-tooltip-html="I strive to prioritize my tasks <br />to get the job done on time"
                data-tooltip-place="top"
                >
                    <Tooltip id="my-tooltip-org" arrowColor='#707070' style={{ backgroundColor: "#707070", color: "white" }}/>
                    <span>Organization</span>
                </p>
                <p 
                className={styles.smallCard}
                data-tooltip-id="my-tooltip-motivation"
                data-tooltip-html="I'm not afraid to try new things <br />with a view to improving myself <br />in the future and looking for<br /> the best solution"
                data-tooltip-place="top"
                >
                    <Tooltip id="my-tooltip-motivation" arrowColor='#707070' style={{ backgroundColor: "#707070", color: "white" }}/>
                    <span>Motivation</span>
                </p>
            </div>
            <h2 className="lg:text-xl font-bold tracking-tight text-[#d6d6d6] sm:text-xs lg:py-5 sm:py-5">LANGUAGES</h2>
            <div className="flex flex-row flex-wrap text-[#d6d6d6]">
                <p className={styles.smallCard}>Bulgarian</p>
                <p className={styles.smallCard}>English</p>
            </div>
            <h2 className="lg:text-xl font-bold tracking-tight text-[#d6d6d6] sm:text-xs lg:py-5 sm:py-3">CERTIFICATES</h2>
            <div className="flex flex-col text-[#d6d6d6] ">
                <Link
                href='https://drive.google.com/drive/folders/1eLymQubGk14iR5aaORzxIZ3lb4s1SX3q'
                target='_blank'>
                    <div className={styles.base}>
                            <Image 
                            src='/c-1.png'
                            alt='Certificate-01'
                            width={500}
                            height={200} 
                            objectFit='cover'
                            className='hover:scale-105 transition duration-500 cursor-pointer filter grayscale'
                            />
                            <p className='mt-5'>Alpha JS Track - Telerik Academy</p>    
                    </div>
                </Link>
                <Link
                href='https://drive.google.com/drive/folders/1eLymQubGk14iR5aaORzxIZ3lb4s1SX3q'
                target='_blank'>
                    <div className={styles.base}>
                            <Image 
                            src='/c-2.png'
                            alt='Certificate-02'
                            width={500}
                            height={200} 
                            objectFit='cover'
                            className='hover:scale-105 transition duration-500 cursor-pointer filter grayscale'
                            />
                            <p className='mt-5'>React-The complete guide</p>
                    </div>
                </Link>
            </div>
        </section>
    )
};