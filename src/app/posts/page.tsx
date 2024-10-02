import getAllPost from "@/lib/getAllData/getAllPost"
import getAllComments from "@/lib/getAllData/getAllComments"

const postPage = async () => {
    // const posts = await getAllPost()
    // const slicePosts = posts.slice(0, 10)
    // const comments = await getAllComments()
    // const sliceComments = comments.slice(0, 10)

    //best practice
    const postsPromise = getAllPost()
    const commentsPromise = getAllComments()
    const [posts, comments] = await Promise.all([postsPromise, commentsPromise])
    return (
        <div>
            <h2 className="text-2xl font-bold text-green-400">Total Posts: {posts.length}</h2>
            <h2 className="text-2xl font-bold text-green-400">Total Comments: {comments.length}</h2>


        </div>
    );
};

export default postPage;