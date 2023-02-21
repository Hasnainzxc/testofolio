import Image from 'next/image';
import React from 'react';
import darkblockImg from '../public/assets/sajidprojects/darkblock.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const darkblock = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={darkblockImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>DarkBlock App</h2>
          <h3>Nodejs / Aws Lambda / S3 / Dynamo DB / cloud Watch / API Canaries / Firebase</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          
          <p>          
Darkblock is a decentralized chain-agnostic protocol. It enables creators to control the distribution and monetization of their content.
The Darkblock Protocol uses a decentralized network of nodes to control access to digital content associated with NFTs.
My main focus in this role was designing, and building the Darkblock Client API from scratch to provide seamless delivery of unlockables.
I have also contributed significantly to other parts of the project.   </p>

       
          <a
            href='https://app.darkblock.io/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>WEB APP</button>
          </a>
          <a
            href='https://app.darkblock.io/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>DEMO</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Nodejs
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Express
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> AWS Lambda
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />  Dynamo DB
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CloudWatch
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> PI Canaries, EC2
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
  <button className='px-4 py-2 mt-3 text-white bg-indigo-300 hover:bg-indigo-400 rounded-lg border border-indigo-300 hover:border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
    Back
  </button>
</Link>

      </div>
    </div>
  );
};

export default darkblock;
