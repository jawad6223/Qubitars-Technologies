'use client'
import React from 'react';
import styled from 'styled-components';

const Card = () => {
  const expert = [
    {
        name: 'Product Design',
        path1: 'P',
        path2: 'D',
        description: 'We craft intuitive, user-first digital experiences that look stunning and function flawlessly—turning complex ideas into designs users love.'
    },
    {
        name: 'Custom Software',
        path1: 'C',
        path2: 'S',
        description: 'Tailor-made software that adapts to your business—not the other way around. Built to scale, secure by design, and optimized for performance.'
    },
    {
        name: 'AI/ML Development',
        path1: 'A',
        path2: 'I',
        description: 'From predictive analytics to intelligent bots, we turn complex data into scalable AI solutions that give your business a cutting edge.'
    },
    {
        name: 'MVP Development',
        path1: 'M',
        path2: 'V',
        description: 'Launch faster, smarter. We build lean, scalable MVPs that validate your idea, attract users, and prepare you for full product rollout.'
    },
    {
        name: 'Mobile App Dev',
        path1: 'M',
        path2: 'A',
        description: 'From iOS to Android, we build high-performance apps with sleek design and powerful backend—giving users seamless experiences on the go.'
    },
    {
        name: 'Staff Augmentation',
        path1: 'S',
        path2: 'A',
        description: 'Scale your team with vetted developers, designers, and AI experts—ready to plug in, deliver results, and adapt to your workflow.'

    }
]
  return (
    <StyledWrapper>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-x-10 p-4 px-30'>
        {expert.map((item, index) => (
          <div key={index} className="parent">
            <div className={`card ${index % 2 === 0 ? 'bg-[#1E274F] text-lightGray' : 'bg-accent text-darkGray'}`}>
              <div className="logo">
                <span className="circle circle1" style={{backgroundColor: index % 2 === 0 ? '#1E274F' : '#FC7E13'}} />
                <span className="circle circle2" style={{backgroundColor: index % 2 === 0 ? '#1E274F' : '#FC7E13'}} />
                <span className="circle circle3" style={{backgroundColor: index % 2 === 0 ? '#1E274F' : '#FC7E13'}} />
                <span className="circle circle4" style={{backgroundColor: index % 2 === 0 ? '#1E274F' : '#FC7E13'}} />
                <span className="circle circle5" style={{backgroundColor: index % 2 === 0 ? '#1E274F' : '#FC7E13'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" className="svg">
                    {/* <path id="Path_6" data-name="Path 6" d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z" transform="translate(0 0)" />
                    <path id="Path_7" data-name="Path 7" d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z" transform="translate(-45.91 0)" /> */}
                    <text x="-1" y="20" className="text-2xl font-bold" fill="currentColor">{item.path1}</text>
                    <text x="14" y="20" className="text-2xl font-bold" fill="currentColor">{item.path2}</text>
                    <path id="Path_8" data-name="Path 8" d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z" transform="translate(0 -51.963)" />
                  </svg>
                </span>
              </div>
              <div className="glass" />
              <div className="content">
                <h2 className={`text-2xl font-bold mb-2 w-full border-b-2 pb-2 ${index % 2 === 0 ? 'text-lightGray border-lightGray' : 'text-darkGray border-darkGray'}`}>{item.name}</h2>
                <div className="description-container overflow-y-auto" style={{maxHeight: "100px", scrollbarWidth: "none", msOverflowStyle: "none"}}>
                  <p className={`text-lg text-left ${index % 2 === 0 ? 'text-lightGray' : 'text-darkGray'}`}>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .parent {
    // width: 90%;
    height: 300px;
    perspective: 1000px;
    margin: 0 auto;
  }

  .card {
    height: 100%;
    border-radius: 50px;
    transition: all 0.5s ease-in-out;
    transform-style: preserve-3d;
    box-shadow: rgba(5, 71, 17, 0) 40px 50px 25px -40px, rgba(5, 71, 17, 0.2) 0px 25px 25px -5px;
  }

  .glass {
    transform-style: preserve-3d;
    position: absolute;
    inset: 8px;
    border-radius: 55px;
    border-top-right-radius: 100%;
    transform: translate3d(0px, 0px, 25px);
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    transition: all 0.5s ease-in-out;
  }

  .content {
    padding: 100px 60px 0px 30px;
    transform: translate3d(0, 0, 26px);
  }

  .content .title {
    display: block;
    color: white;
    font-weight: 900;
    font-size: 20px;
  }

  .content .text {
    display: block;
    color: white;
    font-size: 15px;
    margin-top: 20px;
  }

  .bottom {
    padding: 10px 12px;
    transform-style: preserve-3d;
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transform: translate3d(0, 0, 26px);
  }

  .bottom .view-more {
    display: flex;
    align-items: center;
    width: 40%;
    justify-content: flex-end;
    transition: all 0.2s ease-in-out;
  }

  .bottom .view-more:hover {
    transform: translate3d(0, 0, 10px);
  }

  .bottom .view-more .svg {
    fill: none;
    stroke: #00c37b;
    stroke-width: 3px;
    max-height: 15px;
  }

  .logo {
    position: absolute;
    right: 0;
    top: 0;
    transform-style: preserve-3d;
  }

  .logo .circle {
    display: block;
    position: absolute;
    aspect-ratio: 1;
    border-radius: 50%;
    top: 0;
    right: 0;
    box-shadow: rgba(100, 100, 111, 0.2) -10px 10px 20px 0px;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    transition: all 0.5s ease-in-out;
  }

  .logo .circle1 {
    width: 170px;
    transform: translate3d(0, 0, 20px);
    top: 8px;
    right: 8px;
  }

  .logo .circle2 {
    width: 140px;
    transform: translate3d(0, 0, 40px);
    top: 10px;
    right: 10px;
    -webkit-backdrop-filter: blur(1px);
    backdrop-filter: blur(1px);
    transition-delay: 0.4s;
  }

  .logo .circle3 {
    width: 110px;
    transform: translate3d(0, 0, 60px);
    top: 17px;
    right: 17px;
    transition-delay: 0.8s;
  }

  .logo .circle4 {
    width: 80px;
    transform: translate3d(0, 0, 80px);
    top: 23px;
    right: 23px;
    transition-delay: 1.2s;
  }

  .logo .circle5 {
    width: 50px;
    transform: translate3d(0, 0, 100px);
    top: 30px;
    right: 30px;
    display: grid;
    place-content: center;
    transition-delay: 1.6s;
  }

  .logo .circle5 .svg {
    width: 20px;
    fill: white;
  }

  .parent:hover .card {
    transform: rotate3d(1, 1, 0, 30deg);
    box-shadow: rgba(5, 71, 17, 0.3) 30px 50px 25px -40px, rgba(5, 71, 17, 0.1) 0px 25px 30px 0px;
  }

  .parent:hover .card .bottom .social-buttons-container .social-button {
    transform: translate3d(0, 0, 50px);
    box-shadow: rgba(5, 71, 17, 0.2) -5px 20px 10px 0px;
  }

  .parent:hover .card .logo .circle2 {
    transform: translate3d(0, 0, 60px);
  }

  .parent:hover .card .logo .circle3 {
    transform: translate3d(0, 0, 80px);
  }

  .parent:hover .card .logo .circle4 {
    transform: translate3d(0, 0, 100px);
  }

  .parent:hover .card .logo .circle5 {
    transform: translate3d(0, 0, 120px);
  }
`;

export default Card;
