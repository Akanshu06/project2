const posts = [{ title: 'post one' }, { title: 'post two' }];

function printPostsAndLastActivity() {
    console.log('All promises resolved!');

    // Log all posts
    console.log('All Posts:');
    posts.forEach((post) => {
        console.log(post.title);
    });

    // Log last activity time
    console.log('Last Activity Time: ' + new Date().getTime());
}

function createPost() {
    return new Promise((resolve) => {
        setTimeout(() => {
            posts.push({ title: 'post three' });
            resolve('post created');
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const lastActivityTime = new Date().getTime();
            console.log('last seen:' + lastActivityTime);
            resolve(lastActivityTime);
        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve) => {
        setTimeout(() => {
            posts.pop(); // Remove the last post
            resolve('post deleted');
        }, 1000);
    });
}

// Using Promise.all
Promise.all([createPost(), updateLastUserActivityTime()])
    .then(([postResult, lastActivityTime]) => {
        console.log(postResult); // Log the result of createPost
        return deletePost(); // Return the deletePost promise
    })
    .then((deleteResult) => {
        console.log(deleteResult); // Log the result of deletePost
        printPostsAndLastActivity(); // Log the remaining posts and last activity time
    })
    .catch((error) => {
        console.error('Error:', error);
    });
