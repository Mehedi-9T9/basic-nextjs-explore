import Link from 'next/link';
import React from 'react';
import getAllBlogs from "@/lib/getAllData/getAllBlogs"

const blogsPage = async () => {
    const data = await getAllBlogs()
    const sliceBlogs = data.slice(0, 10)

    interface blog {
        userId: number,
        id: number,
        title: string,
        body: string


    }
    // throw new Error("This is custom error")

    return (
        <div>
            <h2 className='text-3xl font-bold'>Total Blogs: {sliceBlogs.length}</h2>
            <div className='grid grid-cols-4 gap-4'>
                {
                    sliceBlogs.map((blog: blog) => <div key={blog.id} className='border p-5 rounded'>
                        <h2 className='text-2xl font-semibold'>{blog.title}</h2>
                        <p>{blog.body}</p>
                        <Link href={`/blogs/${blog.id}`}><button className='px-5 py-3 rounded bg-red-200 text-black'>Details</button></Link>
                    </div>)
                }


            </div>
        </div>
    );
};

export default blogsPage;