'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const AboutSection = () => {
  return (
    <div className="detail-card p-[30px] border-l-4 border-[#E5CCFF]">
      <p className="text-[#D1B9E3] text-[14px] font-medium leading-normal">
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
    <div className="overflow-y-scroll grid gap-[20px] h-[60vh] overflow-visible">
      {[1, 2].map((e) => (
        <div
          key={e}
          className="detail-card p-[30px] border-l-4 border-[#E5CCFF]"
        >
          <p className="text-white text-[12px] font-semibold capitalize leading-[155%]">
            Nov 2019 - Apr 2021
          </p>
          <div className="flex items-center">
            <h1 className="text-[20px] font-semibold text-white">Styx media</h1>
            <h2 className="ml-[15px] text-[16px] font-semibold text-white">
              Software Developer
            </h2>
          </div>
          <div className="mt-[16px] text-[#9B7CBB]">
            <p className="text-[14px] font-medium leading-[163%]">
              Styx media is Startup marketing-based company founded in 2018.{' '}
            </p>
            <ul className="list-inside">
              <li className="list-disc">
                Design software architecture and database from scratch to meet
                client requirements.
              </li>
            </ul>
          </div>
          <div className="mt-[12px] grid grid-cols-3 gap-4">
            {['NodeJS', 1, 2, 3, 4, 5, 6].map((e) => (
              <div key={e} className="bg-[#D9D9D940] w-fit">
                <p className=" px-[16px] py-[6px] text-[#FADCFF] font-semibold text-[14px]">
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
    <div className="overflow-y-scroll grid gap-[20px] h-[60vh] overflow-visible">
      {[1].map((e) => (
        <div
          key={e}
          className="detail-card p-[30px] border-l-4 border-[#E5CCFF] h-fit"
        >
          <div className="flex items-center">
            <h1 className="text-[20px] font-semibold text-white">Styx media</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              className="ml-[10px]"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path d="M1 11L11 1M11 1H1M11 1V11" stroke="white" />
            </svg>
          </div>
          <div className="mt-[16px] text-[#9B7CBB]">
            <p className="text-[14px] font-medium leading-[163%]">
              Styx media is Startup marketing-based company founded in 2018.{' '}
            </p>
          </div>
          <img src="https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=640&q=75" />
          <div className="mt-[30px] grid grid-cols-3 gap-4">
            {['NodeJS', 1, 2, 3, 4, 5, 6].map((e) => (
              <div key={e} className="bg-[#D9D9D940] w-fit">
                <p className=" px-[16px] py-[6px] text-[#FADCFF] font-semibold text-[14px]">
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

const navigations = [
  { name: 'ABOUT', component: AboutSection },
  { name: 'EXPERIENCE', component: ExperienceSection },
  { name: 'PROJECTS', component: ProjectSection },
];

export default function Home() {
  const [navigator, setNavigator] = useState(navigations[0]);
  return (
    <main>
      <div className="header">
        {/* IntroDuction and contact section */}
        <div className="flex justify-between">
          <div className="intro">
            <h1>Mukesh Rajpurohit</h1>
            <p>Software Developer</p>
          </div>
          <div className="pr-[40px] flex ">
            <div className="bg-[#3C156D] rounded-bl-lg rounded-br-lg mr-[20px] h-fit">
              <div className="pt-[50px]">
                <img
                  className="w-[35px] h-[35px]  rounded-full"
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                />
              </div>
            </div>
            <div className="bg-[#3C156D] rounded-bl-lg rounded-br-lg h-fit">
              <div className="pt-[50px]">
                <img
                  className="w-[35px] h-[35px]  rounded-full"
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Animation line */}
        <div className="mt-[35px] text-white"></div>

        <div className="navigator flex justify-between pt-[14px] pb-[14px] pl-[40px] pr-[40px]">
          {navigations.map((e) => (
            <p
              key={e.name}
              onClick={() => {
                setNavigator(e);
              }}
              className={`text-${
                navigator.name === e.name ? '[#ECD8FF]' : '[#5C4390]'
              } text-[14px] font-semibold leading-normal`}
            >
              {e.name}
            </p>
          ))}
        </div>
      </div>

      <div className="main-details mt-[22px]">
        {/* {navigator.component()} */}
        {ProjectSection()}
      </div>
      <div className="flex justify-center">
        <p className="pt-3 text-[#C7B7F8] font-poppins text-[15px] font-medium">
          srankwork@gmail.com
        </p>
      </div>
    </main>
  );
}
