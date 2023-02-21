import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn,FaDownload } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>sid | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Sajid Javed</h2>
          <div className='flex'>
            <a
              href='https://drive.google.com/file/d/16SP5RoPaK96te2OWTCY7dGKKUkjMFAKE/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              <FaDownload size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://www.linkedin.com/in/hasnainzxc/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/Hasnainzxc'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Technical Writer
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Technical Writer</p>
          </div>
        </div>
        <p>
        I am interested in IT and everything in its orbit. I am a driven individual with the ability to adapt to any situation and proven potential to grow self and others. I am keen to gain more and more
experience in the field. For this reason, I am looking for a company
willing to offer me a placement among their developers, writers or
editors. In return, I would offer my full commitment, and be a pleasant and friendly addition to your team.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Full-Stack Developer
            <span className='px-2'>|</span> Web Development
            <span className='px-2'>|</span>Mobile Development
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
            <span className='px-2'>|</span> RESTAPI
          </p>
          <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Self-Employed
            </span>
            <span className='px-2'>|</span>Freelancer
          </p>
          <p className='py-1 italic'>FULL STACK DEVELOPER (2021 - On Going)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Worked remotely and helped many individuals, small and intermediate
companies in bringing their ideas to life
            </li>
            <li>
            Developed a web application for small businesses to manage finances
Built web applications for organizations using modern technologies.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
            Implemented an automated testing system for an e-commerce website
using latest tech trends Constantly seeking new challenges and opportunities to learn and grow as a developer.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Web Developer
            </span>
            <span className='px-2'>|</span> Michigan, Remote
          </p>
          <p className='py-1 italic'>@Dads Agree
 (Aug 2020 - Dec 2020)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Engineered JavaScript functionality to process entered user information
on front-end to back-end financial acquisition services.
            </li>
            <li>
            Designed and Developed Front-end custom themes for E-commerce
sites utilizing HTML, CSS and Javascript.
            </li>
            <li>
                Worked with A team of 4 members to migrate four blogs from Wordpress to Dads Agree, the company’s largest custom migration to date
            </li>
            <li>
            Managed and maintained Linux based cloud servers using SSH and
SFTP  
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Writer-Editor-Manager</span>
            <span className='px-2'>|</span>Michigan, US
          </p>
          <p className='py-1 italic'>@Simply Best Of (March 2021 – Sep 2021)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            ncreased 25% of the site’s revenue by nominating well-researched,
compelling and trendy keywords using Ahrefs and Surfer.
            </li>
            <li>
            Productively managed a team of 7 writers to deliver consistent, accurate
and engaging content.
            </li>
            <li>
            Reviewed and edited final copy for accuracy and oversaw all phase of
production for the content of two sites.
            </li>
            <li>
              Collaborated with a talented and high performing team of
              firefighters in high pressure and stressful situations as needed.
            </li>
            <li>
            Improved site ranking for a lot of disintegrating content from 13th to 1st
page.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
