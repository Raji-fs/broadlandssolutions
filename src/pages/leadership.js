import React from 'react';
import Layout from '../components/Layout';
import Banner from '@/components/Banner';
import Card from '@/components/Card';

const Leadership = () => {
    const cardList = [
        {
            image: 'placeholder.jpg',
            name: 'Shuba Lingareddy',
            role: 'President & CEO',
            facebook: '',
            email: '',
            linkedin: '',
        },
        {
            image: 'placeholder.jpg',
            name: 'Sunder Lingareddy',
            role: 'Director & Human Resource Manager',
            facebook: '',
            email: '',
            linkedin: '',
        },
        {
            image: 'placeholder.jpg',
            name: 'Venu Moola',
            role: 'CTO, Proposals & Contracts',
            facebook: '',
            email: '',
            linkedin: '',
        },
        {
            image: 'placeholder.jpg',
            name: 'Naveen Vinta',
            role: 'Advisor',
            facebook: '',
            email: '',
            linkedin: '',
        },
        {
            image: 'placeholder.jpg',
            name: 'Duk Lee',
            role: 'Director, Customer Engagement & Service Delivery',
            facebook: '',
            email: '',
            linkedin: '',
        },
        {
            image: 'placeholder.jpg',
            name: 'Ayush Zutshi',
            role: 'Director, Network & Infrastructure Technologies',
            facebook: '',
            email: '',
            linkedin: '',
        },
        {
            image: 'placeholder.jpg',
            name: 'Zach Passmore',
            role: 'Customer Engagement & Service Delivery',
            facebook: '',
            email: '',
            linkedin: '',
        }
    ]
    return (
        <Layout>
            <Banner heading="Leadership" description="">
                <div className='flex gap-4 text-xl'>
                    <a href="#" className='hover:underline'>Broadlands Solutions</a>
                    <span className='text-secondaryRed'>{` > `}</span>
                    <a href="#" className='hover:underline'>About Us</a>
                    <span className='text-secondaryRed'>{` > `}</span>
                    <a href="#" className='hover:underline'>Leadership</a>
                </div>
            </Banner>
            <div className='container mx-auto mt-10 mb-20 sm:grid grid-cols-3 gap-6'>
                {cardList.map((card, index) => {
                    return(
                        <Card 
                            key={index}
                            image={card.image}
                            name={card.name}
                            role={card.role}
                            facebook={card.facebook}
                            email={card.email}
                            linkedin={card.linkedin}
                        />
                    )
                })}
            </div>
        </Layout>
    );
  };

export default Leadership;
