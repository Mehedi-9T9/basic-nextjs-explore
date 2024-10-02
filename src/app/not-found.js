import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div>
            <h2>Not Found Page</h2>
            <p>apni jei resourse khujtecen ta pawa jacce na</p>
            <button className='px-5 py-2 rounded bg-red-400 text-black mt-4'><Link href={"/"}>Go Home</Link></button>
        </div>
    );
};

export default NotFound;