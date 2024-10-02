

const getBlog = async (id) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return data.json()
};

export default getBlog;