import Image from 'next/image';
import React from 'react';
import thinkawayImg from '../public/assets/sajidprojects/thinkaway.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const thinkaway = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={thinkawayImg}
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
          
          <p>  Learn interesting & compelling ideas, facts, beliefs & concepts in simple points.

The goal is to take complex ideas and break them into small digestable pieces.
<break></break>
(The app is not live at the moment but I can give you a live tour of the app from Android Studio)</p>

       
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
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default thinkaway