import React from 'react';
import Layout from '../components/Layout';


const HomePage = () => {
    return (
        <Layout>
          <section class="homePagebanner relative">
            <video src="https://ecs-prd0-core.fscms.co/assets/17b6be87-99b1-44ff-bb4f-b366d64a89f6_556ef4c8-e8ab-4d85-9d01-52977c916902/bc4024a5-f137-48a6-ad72-545dcad54d8d" loop="" muted="" autoplay="true" ></video>
            <div class="w-full h-fit absolute top-0 w-full h-full text-center py-32">
              <div class="leading-[3rem]">
                <p className='text-6xl text-secondary font-bold'>Technology Solutions </p>
                <p className='text-6xl text-secondary font-bold'>Provider</p>
              </div>
              <div class="w-fit mx-auto description mt-16 mb-8">
                <p >Getting Your Organization On The Path To Success</p>
              </div>
              <a href="#" class="font-medium bg-secondary border border-2 border-solid border-white mt-4 text-white px-6 py-3 flex centerCenter text-xl hover:scale-110 transition duration-500 w-max mx-auto" >Read More</a>
              <a href="#" class="font-medium bg-secondary border border-2 border-solid border-white mt-4 text-white px-6 py-3 flex centerCenter text-xl hover:scale-110 transition duration-500 w-max mx-auto" >Talk To Us</a>
            </div>
          </section>
          <section className='py-20 px-16 bg-cover text-center text-white font-medium text-xl' style={{backgroundImage: `url("/homeBg.jpg")`,backgroundSize: "cover", backgroundPosition: 'center'}}>
            <p>We deliver Information Technology solutions that touch every phase of the Software Development Life Cycle (SDLC) to leading companies in diverse sectors such as business services, government, finance, software development, risk management, consumer products, pharmaceuticals, life sciences, higher education, and manufacturing. We secure multi-year engagements and strive to consistently exceed our customer’s expectations.</p>
          </section>
        </Layout>
    );
  };

export default HomePage;
