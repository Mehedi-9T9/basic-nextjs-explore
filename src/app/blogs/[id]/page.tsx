
//meta data work
// import type { Metadata, ResolvingMetadata } from 'next'
import Blog from '@/Components/Blog/Blog';
import getAllBlogs from '@/lib/getAllData/getAllBlogs';
import getBlog from "@/lib/getAllData/getBlog"

type Props = {
    params: { id: string }

}
interface blog {
    userId: number,
    id: number,
    title: string,
    body: string


}

export async function generateMetadata({ params }: Props) {
    // read route params
    const id = params.id
    const product = await getBlog(id)

    // fetch data
    // const product = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json())

    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || []

    return {
        title: "Basic Next JS || " + product.title,
        description: product.body
    }
}



const blogsPage = async ({ params }: { params: { id: string } }) => {

    // const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    // const blog = await data.json()
    return (
        //
        <div>
            <Blog id={params.id}></Blog>
        </div>
    );
};

export default blogsPage;

export async function generateStaticParams() {
    const posts = await getAllBlogs()

    return posts.map((post: blog) => ({
        id: post.id.toString(),
    }))
}