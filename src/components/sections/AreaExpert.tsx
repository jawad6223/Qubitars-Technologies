import React from 'react'
import Card from '../ui/cards/Card'
const AreaExpert = () => {
    // const expert = [
    //     {
    //         name: 'Product Design',
    //         description: 'We craft intuitive, user-first digital experiences that look stunning and function flawlessly—turning complex ideas into designs users love.'
    //     },
    //     {
    //         name: 'Custom Software',
    //         description: 'Tailor-made software that adapts to your business—not the other way around. Built to scale, secure by design, and optimized for performance.'
    //     },
    //     {
    //         name: 'AI/ML Development',
    //         description: 'From predictive analytics to intelligent bots, we turn complex data into scalable AI solutions that give your business a cutting edge.'
    //     },
    //     {
    //         name: 'MVP Development',
    //         description: 'Launch faster, smarter. We build lean, scalable MVPs that validate your idea, attract users, and prepare you for full product rollout.'
    //     },
    //     {
    //         name: 'Mobile App Dev',
    //         description: 'From iOS to Android, we build high-performance apps with sleek design and powerful backend—giving users seamless experiences on the go.'
    //     },
    //     {
    //         name: 'Staff Augmentation',
    //         description: 'Scale your team with vetted developers, designers, and AI experts—ready to plug in, deliver results, and adapt to your workflow.'
    //     }
    // ]
  return (
    <main>
        <div className='flex flex-col items-center justify-center lg:px-18'>
            <h1 className='text-4xl font-bold text-darkGray mb-2'>Our Area of Expertise</h1>
            <p className='text-lg text-justify lg:text-center lg:w-[40%] px-8 lg:px-0 text-darkGray'>Whether you are an industry leader seeking website maintenance or a startup looking to make waves with AI, Qubitars has got you covered.</p>
        </div>

        <Card />

        {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 px-4 lg:px-18 rounded-4xl '>
            {expert.map((item, index) => (
                <div key={index} className={`flex flex-col items-center justify-center p-6 rounded-full translate-x-1/32 translate-y-2/50 ${index % 2 === 0 ? 'bg-[#1E274F] text-lightGray' : 'bg-accent text-darkGray'} rounded-lg`}>
                    <h2 className={`text-2xl font-bold  mb-2 w-full border-b-2 pb-2 ${index % 2 === 0 ? 'border-lightGray' : 'border-darkGray'}`}>{item.name}</h2>
                    <p className='text-lg text-left'>{item.description}</p>
                </div>
            ))}
        </div> */}
    </main>
  )
}

export default AreaExpert