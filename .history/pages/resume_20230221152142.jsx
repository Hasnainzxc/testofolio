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
              href='https://www.linkedin.com/in/sajidjaved0042/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/Kurtz0420'
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
        I am a highly motivated software
engineer with a passion for building
innovative and scalable applications.
With over 3 years of experience in
the industry, I have developed a strong
foundation in computer science
and a proven track record of
delivering successful projects for a
variety of clients. My expertise lies
in full-stack development. In my current
role, I have excelled in collaborating
with cross-functional teams and stakeholders to deliver high-quality products.
I am excited to join a company that values
personal growth and encourages innovation.

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
            FULL STACK DEVELOPER 
            </span>
            <span className='px-2'>|</span>
          </p>
          <p className='py-1 italic'>DARKBLOCK - DECENTRALIZED UNLOCKABLES |(APRIL 2021 - On Going)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Developed the full-stack web application which processed, analysed, minted
and displayed Darkblocks. 
            </li>
            <li>
            Designed and developed a highly scalable AWS infrastructure to enable
partners and other developers to mint Darkblocks at ease.

            </li>
            <li>
            Development, testing, monitoring and maintenance of the Darkblock Client
API, consumed by thousands of end-users.
            </li>
            <li>
            Setup full CI/CD pipelines so that each commit a developer makes will go
through standard process of software lifecycle and gets tested well enough
before it can make it to the production.

            </li>
            <li>Exceuted automated test suites and performed Load/Performance testing
during Production release nights.</li>
            <li>Wrote and maintained automated test cases, scripts and frameworks including
its infrastructure, data and execution practice.</li>
            <li>Introduced methodologies and best practices that enhanced product definition,
release processes and customization of applications to user needs.</li>
<li>
Automated build, delivery and release of the web-app.
</li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Web Developer
            </span>
            <span className='px-2'>|</span> 
          </p>
          <p className='py-1 italic'>@SELF-EMPLOYED
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
