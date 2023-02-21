import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import darkblockImg from '../public/assets/sajidprojects/darkblock.jpg';
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';
// import thinkaway from '../public/assets/sajidprojects/thinkaway.jpg';
// import whatscooking from '../public/assets/sajidprojects/whatscooking.jpg';
// import nfmusic from '../public/assets/sajidprojects/nfmusic.jpg';
// import dinglebox from '../public/assets/sajidprojects/dinglebox.jpg';

// import darkblock from '../public/assets/sajidprojects/darkblock.jpg';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='DarkBlock'
            backgroundImg={darkblockImg}
            projectUrl='/darkblock'
            tech='React JS'
          />
          <ProjectItem
            title='whatscooking'
            backgroundImg={whatscookingImg}
            projectUrl='/whatscooking'
            tech='React JS'

          />
          <ProjectItem
            title='thinkaway'
            backgroundImg={thinkawayImg}
            projectUrl='/thinkaway'
            tech='node js'

          />
          <ProjectItem
            title='nfmusic App'
            backgroundImg={nfmusicImg}
            projectUrl='/nfmusic'
            tech='Web 3 / Dynamo DB, CloudWatch, API Canaries, EC2'

          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
