import style from '../ui/card.module.css'

export default function Education () {

    return (
        <section className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24' id='education'>
            <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
                <h2 className='text-[#3BBA9C] text-lg font-bold tracking-widest lg:sr-only'>EDUCATION</h2>
            </div>
            <h1 className="text-3xl font-bold tracking-widest text-[#3BBA9C] py-5 lg:pb-5 sr-only sm:not-sr-only">EDUCATION</h1>
            <div className={style.card}>
                <h3 className="font-bold text-[#d6d6d6] py-1">Alpha JavaScript Track</h3>
                <div className='flex flex-row justify-between text-[#d6d6d6]'>
                    <span>Telerik Academy </span >
                    <span className='italic'>01.2023 - 06.2023</span>
                </div>
            </div>
            <div className={style.card}>
                <h3 className="font-bold text-[#d6d6d6] py-1">MA Architecture</h3>
                <div className='flex flex-row justify-between text-[#d6d6d6]'>
                <span>UACEG </span >
                <span className='italic'>09.2013 - 02.2019</span>
                </div>
            </div>
            <div className={style.card}>
                <h3 className="font-bold text-[#d6d6d6] py-1">Profile Mathematic and Informatics</h3>
                <div className='flex flex-row justify-between text-[#d6d6d6]'>
                <span>PMG Acad.Boyan Petkanchin</span >
                <span className='italic'>09.2008 - 05.2013</span>
                </div>
            </div>
            
            <div>
                <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
                    <h2 className='text-[#3BBA9C] text-lg font-bold tracking-widest lg:sr-only'>EXPERIENCE</h2>
                </div>
            <h2 className="text-3xl font-bold tracking-widest text-[#3BBA9C] py-5 lg:py-5 sr-only sm:not-sr-only">EXPERIENCE</h2>
            <div className={style.card}>
                <h3 className="font-bold text-[#d6d6d6] py-1">Frontend Developer</h3>
                <div className='flex flex-row justify-between text-[#d6d6d6] py-1'>
                    <span>Self-Employed</span >
                    <span className='italic'>06.2023 - </span>
                </div>
                <ul className='text-[#d6d6d6]'>
                    <li>- Learning and Practice from Online Courses</li>
                    <li>- Getting Help from mentor</li>
                </ul>
            </div>
            <div className={style.card}>
                <h3 className="font-bold text-[#d6d6d6] py-1">Architect</h3>
                <div className='flex flex-row justify-between text-[#d6d6d6] py-1'>
                    <span>ZOOM Studio</span >
                    <span className='italic'>03.2019 - 12.2022 </span>
                </div>
                <ul className='text-[#d6d6d6]'>
                    <li>- 10+ Architectural studies done for residential investment</li>
                    <li>- 10+ Submitted technical projects for construction approval</li>
                    <li>- Participated in monitoring the implementation of the construction process</li>
                    <li>- Prepared materials for presentation to clients - drawings, visualizations, video</li>
                </ul>
            </div>
            <div className={style.card}>
                <h3 className="font-bold text-[#d6d6d6] py-1">Architect</h3>
                <div className='flex flex-row justify-between text-[#d6d6d6] py-1'>
                    <span>ISI Arch</span >
                    <span className='italic'>09.2017 - 08.2018 </span>
                </div>
                <ul className='text-[#d6d6d6]'>
                    <li>- Issued technical projects for construction approval</li>
                    <li>- Prepared presentation materials for clients - drawings and visualizations</li>
                </ul>
            </div>
            </div>
            
        </section>
    )
};
