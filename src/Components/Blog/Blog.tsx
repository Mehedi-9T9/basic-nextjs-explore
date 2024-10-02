import React from 'react';
import getBlog from '@/lib/getAllData/getBlog'

type Props = {
    id: string
}
const Blog = async ({ id }: Props) => {
    const blog = await getBlog(id);
    // console.log("blog to console", id);
    return (
        <div className='border rounder p-5'>
            <h2 className='text-2xl font-semibold'>{blog.title}</h2>
            <p>{blog.body}</p>

        </div>
    );
};

export default Blog;