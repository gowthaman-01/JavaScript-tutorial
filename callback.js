const posts = [
    {
        title: 'Post 1', 
        body: 'This is the first post'
    }, 
    {
        title: 'Post 2', 
        body: 'This is the second post'
    }
];

// The following code will only output the first and second post due to the timeout
/*
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
    setTimeout(() => {
        posts.push(post);
    }, 2000)
}

createPost(posts, {
    title: 'Post 3', 
    body: 'This is the third post'
})

getPosts(posts);
*/

// The following code will only output all three posts due to the callback function
const getPosts = (posts) => {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

const createPost = (posts, post, callback) =>{
    setTimeout(() => {
        posts.push(post);
        callback(posts);
    }, 2000)
}

createPost(posts, {
    title: 'Post 3', 
    body: 'This is the third post'
}, getPosts)



