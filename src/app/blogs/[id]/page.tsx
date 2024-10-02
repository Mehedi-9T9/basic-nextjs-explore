import React from 'react';
//meta data work
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const id = params.id

    // fetch data
    const product = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json())

    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || []

    return {
        title: "Basic Next JS || " + product.title,
        description: product.body
    }
}



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