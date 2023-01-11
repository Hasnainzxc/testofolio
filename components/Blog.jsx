import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Blogitem from './Blogitem';
import Defi from '../public/assets/blogs/Defi.png';
import Hardwarekeys from '../public/assets/blogs/Hardwarekeys.png';
import Blockchain from '../public/assets/blogs/Blockchain.png';
import checkm8 from '../public/assets/blogs/checkm8.png';


const Blog = () => {
  return (
    <div id='Blog' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
      <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Blogs
        </p>

        <h2 className='py-4'>Blogs i've Written so far!</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <Blogitem
            title='What is Defi'
            backgroundImg={Defi}
            projectUrl='https://medium.com/@hasnainzxc/sustainable-future-with-defi-60d9666e1c3f'
            
          />
          <Blogitem
            title='Everything You Need to Know About Hardware Security Keys'
            backgroundImg={Hardwarekeys}
            projectUrl='https://hasnainzxc.medium.com/everything-you-need-to-know-about-hardware-security-keys-8fcae0279c09'
           

          />
          <Blogitem
            title='Everything You Need To Know About Blockchain Technology'
            backgroundImg={Blockchain}
            projectUrl='https://hasnainzxc.medium.com/everything-you-need-to-know-about-blockchain-technology-c0022b6142c3'
            

          />
          <Blogitem
            title='What is Checkm8? Did Axi0mX Really Checkmated Apple?'
            backgroundImg={checkm8}
            projectUrl='https://hasnainzxc.medium.com/what-is-checkm8-did-axi0mx-really-checkmated-apple-18a6e1c149fc'
            

          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
