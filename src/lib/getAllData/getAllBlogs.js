

const getAllBlogs = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: { revalidate: 10 }
    })
    return data.json()
};

export default getAllBlogs;