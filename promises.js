const myposts = [
    {
        title: 'Post 1', 
        body: 'This is the first post'
    }, 
    {
        title: 'Post 2', 
        body: 'This is the second post'
    }
];

const getPosts = (posts) => {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

const createPost = (posts, post) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject('Error: Something went wrong!')
            }
        }, 2000)
    })
}


createPost(myposts,
    {
        title: 'Post 3', 
        body: 'This is the third post'
    }
).then((getPosts(myposts)))
