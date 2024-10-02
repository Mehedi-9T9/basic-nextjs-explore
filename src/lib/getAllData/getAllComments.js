

const getAllComments = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/comments")
    if (!data.ok) {
        throw new Error("comments data loading faild")

    }
    return data.json()



};

export default getAllComments;