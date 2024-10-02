import Image from 'next/image';
import React from 'react';
import img from '@/public/imgs/2.png';
import { Headland_One, Inter } from 'next/font/google'


const inter = Inter({ weight: ['400'], subsets: ['latin'] })
const headland = Headland_One({ weight: ['400'], subsets: ['latin'] })


const commentsPage = () => {
    // throw new Error("comment error")
    return (
        <div>
            <h2 className={`${inter.className} text-3xl`}>This is Comments Page</h2>
            <h2 className={headland.className}>use Headland Font</h2>
            <div className='w-[300px]'>
                <Image src={img} alt='testing img' quality={100} />

            </div>
            <Image src="https://i.ibb.co.com/56n0vvw/IMG-965883.jpg" alt='photo'
                width={400} height={400}
            />


        </div>
    );
};

export default commentsPage;