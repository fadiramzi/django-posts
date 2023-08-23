let counter = 1;
let rowsToFetch = 20;
document.addEventListener('DOMContentLoaded',()=>{
    const loadPosts = ()=>{
        const start = counter;
        const end = start + rowsToFetch - 1;
        counter = end + 1;
        fetch(`http://127.0.0.1:8000/posts/load?start=${start}&end=${end}`)
        .then(response => response.json())
        .then(data=>{
            console.log(data)
            // render on the page
            
            const posts = data.posts
            posts.forEach(post => {
                const pDiv = document.createElement('div')
                pDiv.innerHTML = post;
                pDiv.className = 'post';
                document.querySelector('#posts').append(pDiv);
            });
        })
    }
    loadPosts()
    
        // If scrolled to bottom, load the next 20 posts
    window.onscroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            loadPosts(counter);
        }
    };
})