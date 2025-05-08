import React, { useRef } from 'react'
import Card from '../components/Card'
import { Globe } from '../components/Globe';
import CopyEmailButton from '../components/CopyEmailButton';
import { FrameWorks } from '../components/FrameWorks';

const About = () => {
    // To make elements stay in the container, will be passed a property
    const grid2Container = useRef();
    return (
        <section className='c-space section-spacing'>
            <h2 className='text-4xl font-bold'>About Me</h2>
            <div className='grid grid-col-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
                {/* Grid 1 */}
                <div className='flex items-end grid-default-color grid-1'>
                    <img
                        src="assets/coding-pov.png"
                        alt="IDE"
                        className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5rem]'
                    />
                    <div className='z-10'>
                        <p className='headtext'>Hi I'm Anish Garg</p>
                        <p className='subtext'>Over the last 3 years, I have developed my frontend and backend skills to deliver dynamic and responsive web application</p>
                    </div>
                    <div className='absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo' />
                </div>
                {/* Grid 2 */}
                <div className='grid-default-color grid-2'>
                    <div ref={grid2Container} className='flex items-center justify-center w-full h-full '>
                        <p className='flex items-end text-5xl text-gray-500'>CODE IS CRAFT</p>
                        <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text="GRASP" containerRef={grid2Container} />
                        <Card style={{ rotate: "-30deg", top: "60%", left: "45%" }} text="SOLID" containerRef={grid2Container} />
                        <Card style={{ rotate: "90deg", bottom: "30%", left: "70%" }} text="Design Patterns" containerRef={grid2Container} />
                        <Card style={{ rotate: "-45deg", top: "55%", left: "0%" }} text="Design Principles" containerRef={grid2Container} />
                        <Card style={{ rotate: "20deg", top: "10%", left: "38%" }} text="Responsive" containerRef={grid2Container} />
                        <Card style={{ rotate: "35deg", top: "15%", left: "5%" }} image="assets/logos/cplusplus.svg" containerRef={grid2Container} />
                        <Card style={{ rotate: "20deg", top: "35%", left: "90%" }} image="assets/logos/csharp-pink.png" containerRef={grid2Container} />
                        <Card style={{ rotate: "50deg", top: "70%", left: "40%" }} image="assets/logos/dotnet.svg" containerRef={grid2Container} />
                        <Card style={{ rotate: "80deg", top: "10%", left: "70%" }} image="assets/logos/git.svg" containerRef={grid2Container} />
                    </div>
                </div>
                {/* Grid 3 */}
                <div className='grid-black-color grid-3'>
                    <div className='z-10 w-[50%]'>
                        <p className='headtext'>Time Zone</p>
                        <p className='subtext'>I'm based in Mars, and open to remote work worldwide</p>
                    </div>
                    <figure className='absolute left-[30%] top-[10%]'>
                        <Globe />
                    </figure>
                </div>
                {/* Grid 4 */}
                <div className='grid-special-color grid-4'>
                    <div className='flex flex-col items-center justify-center gap-4 size-full'>
                        <p className='text-center headtext'>Do you want to start a project together?</p>
                        <CopyEmailButton />
                    </div>
                </div>
                {/* Grid 5 */}
                <div className='grid-default-color grid-5'>
                    <div className='z-10 w-[50%]'>
                        <p className='headtext'>Tech Stack</p>
                        <p className='subtext'>I specialize in a wide range of programming languages, frameworks, and tools that enable me to build robust and scalable applications.</p>
                    </div>
                    <div className='absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125'>
                        <FrameWorks />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About