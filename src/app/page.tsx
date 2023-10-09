'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import pageData from './data.json';

const AboutSection = () => {
  return (
    <div className='detail-card p-[30px] border-l-4 border-[#E5CCFF]'>
      <p className='text-[#D1B9E3] text-[14px] font-medium leading-normal'>
        An experienced software developer with over 3+ years of experience
        creating high-quality software applications for various clients. Skilled
        in full-stack development, software architecture, and database design,
        with a strong focus on delivering projects on time. Passionate about
        learning new technologies and staying up-to-date on industry trends.
        Seeking a challenging role in a dynamic organization where I can
        leverage my skills to contribute to the success of the company.
        <br />
        <br />
        “I am confident in my ability to quickly learn and master new
        technologies, so I am not concerned about which specific technologies I
        will be working with. because I’m Programmer.”
      </p>
    </div>
  );
};
const ExperienceSection = () => {
  return (
    <div className='overflow-y-scroll grid gap-[20px] h-[60vh] overflow-visible'>
      {pageData.expereince.map((e) => (
        <div
          key={e.company}
          className='detail-card p-[30px] border-l-4 border-[#E5CCFF] h-fit'
        >
          <p className='text-white text-[12px] font-semibold capitalize leading-[155%]'>
            {e.date}
          </p>
          <div className='flex items-center'>
            <h1 className='text-[20px] font-semibold text-white'>Styx media</h1>
            <h2 className='ml-[15px] text-[16px] font-semibold text-white'>
              {e.position}
            </h2>
          </div>
          <div className='mt-[16px] text-[#9B7CBB]'>
            <p className='text-[14px] font-medium leading-[163%]'>
              {e.discription}
            </p>
            <ul className='pl-[12px] list-disc'>
              {e.details.map((d) => (
                <li key={d} className='list-disc'>
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className='mt-[12px] grid grid-cols-3 gap-4'>
            {e.techUsed.map((e) => (
              <div key={e} className='bg-[#D9D9D940] w-fit'>
                <p className=' px-[16px] py-[6px] text-[#FADCFF] font-semibold text-[14px]'>
                  {e}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
const ProjectSection = () => {
  return (
    <div className='overflow-y-scroll grid gap-[20px] h-[60vh] overflow-visible'>
      {pageData.project.map((e) => (
        <div
          key={e.name}
          className='detail-card p-[30px] border-l-4 border-[#E5CCFF] h-fit'
        >
          <div className='flex items-center'>
            <h1 className='text-[20px] font-semibold text-white'>{e.name}</h1>
            {e.redirectUrl !== '' && (
              <a href={e.redirectUrl}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='12'
                  height='12'
                  className='ml-[10px]'
                  viewBox='0 0 12 12'
                  fill='none'
                >
                  <path d='M1 11L11 1M11 1H1M11 1V11' stroke='white' />
                </svg>
              </a>
            )}
          </div>
          <div className='mt-[16px] text-[#9B7CBB]'>
            <p className='text-[14px] font-medium leading-[163%]'>
              {e.discription}
            </p>
          </div>
          <img
            src={e.image}
            className='h-[150px] pt-[16px]'
            alt={e.name}
          />

          {/* <img
            className='h-[150px] pt-[16px]'
            src='/images/novacutisclinics.png' // Path relative to the public folder
            alt={e.name}
          /> */}
          <div className='mt-[30px] grid grid-cols-3 gap-4'>
            {e.techUsed.map((e) => (
              <div key={e} className='bg-[#D9D9D940] w-fit'>
                <p className=' px-[16px] py-[6px] text-[#FADCFF] font-semibold text-[14px]'>
                  {e}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  const navigations = [
    { name: 'ABOUT', component: <AboutSection /> },
    { name: 'EXPERIENCE', component: <ExperienceSection /> },
    { name: 'PROJECTS', component: <ProjectSection /> }
  ];

  const [navigator, setNavigator] = useState(navigations[0]);

  return (
    <main>
      <div className='header'>
        {/* IntroDuction and contact section */}
        <div className='flex justify-between'>
          <div className='intro'>
            <h1>Mukesh Rajpurohit</h1>
            <p>Software Developer</p>
          </div>
          <div className='pr-[40px] flex '>
            <div className='bg-[#3C156D] rounded-bl-lg rounded-br-lg mr-[20px] h-fit'>
              <div className='pt-[50px]'>
                <a href='https://github.com/mk1319' target='_blank'>
                  <img
                    className='w-[35px] h-[35px]  rounded-full'
                    alt='github'
                    src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
                  />
                </a>
              </div>
            </div>
            <div className='bg-[#3C156D] rounded-bl-lg rounded-br-lg h-fit'>
              <div className='pt-[50px]'>
                <a href='https://www.linkedin.com/in/mukesh-rajpurohit-39147016b/'>
                  <img
                    className='w-[35px] h-[35px]  rounded-full'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHLsXrjekg4uJZG7ZrvDt976yA2hEaJxScjbmJD8sS8PdBA7wogJozouj2pMyM106W_NA&usqp=CAU'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Animation line */}
        <div className='mt-[35px] text-white'></div>

        <div className='navigator flex justify-between pt-[14px] pb-[14px] pl-[40px] pr-[40px]'>
          {navigations.map((e) => (
            <p
              key={e.name}
              onClick={() => {
                setNavigator(e);
              }}
              className={`text-[14px] font-semibold leading-normal select-none
              ${navigator.name == e.name ? 'active' : 'in-active'}`}
            >
              {e.name}
            </p>
          ))}
        </div>
      </div>

      <div className='main-details mt-[22px]'>{navigator.component}</div>
      <div className=' absolute bottom-0 left-0 right-0'>
        <div className='flex justify-center items-center'>
          <a
            href='mailto:srankwork@gmail.com'
            className='text-[#C7B7F8] font-poppins text-[15px] font-medium pb-[10px] pt-[10px]'
          >
            srankwork@gmail.com
          </a>
        </div>
      </div>
    </main>
  );
}
