import React from 'react';

const blogsPage = async ({ params }: { params: { id: string } }) => {

    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const blog = await data.json()
    return (
        <div className='border rounder p-5'>
            <h2 className='text-2xl font-semibold'>{blog.title}</h2>
            <p>{blog.body}</p>

        </div>
    );
};

export default blogsPage;