const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

console.log(posts);

console.log(posts[0].author.name[0]);

// convertire la data
const newDate = posts.map((post)=>{
    return {...post,
        created : post.created.split('-').reverse().join('-')
    }
})


console.log(newDate);

// per ogni elemento del nostro array devo creare un elemento HTML da mettere in pagina:

// prendo l'elemtno html
const containerPost = document.getElementById("container");
console.log(containerPost);

// per ogni elemento dell'array vado a creare un html che inserirò nel container
newDate.forEach((singlePost)=>{
    let post = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${singlePost.author.image}" alt="${singlePost.author.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${singlePost.author.name}</div>
                        <div class="post-meta__time">${singlePost.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${singlePost.content}</div>
            <div class="post__image">
                <img src="${singlePost.media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" data-postid="${singlePost.id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${singlePost.id}" class="js-likes-counter">${singlePost.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
        `;

    containerPost.innerHTML += post;

});


// Milestone 3 - Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
const likeButton = document.querySelectorAll(".like-button");
console.log(likeButton);


const postLiked = [];

// per ognunno di questi devo fare un eventListener al click
likeButton.forEach((singleLikeButton, index)=>{
    singleLikeButton.addEventListener("click",
        function(){
            if(singleLikeButton.classList.contains("like-button--liked")){
                singleLikeButton.classList.remove("like-button--liked");// "Mi piace" cambia colore
                // prendi il valore del nome likes relativo a questo like e aumentalo di 1
                posts[index].likes--;
                 // stampa in pagina il nuovo valore dei likes
                const likeCounter = document.querySelectorAll(".js-likes-counter")[index];
                likeCounter.innerHTML = `${posts[index].likes}`;
                // togli il post in un array nuovo
                postLiked.pop(posts[index].id);
                console.log(postLiked);
            } else {
                singleLikeButton.classList.add("like-button--liked");// "Mi piace" cambia colore
                // prendi il valore del nome likes relativo a questo like e aumentalo di 1
                posts[index].likes++;
                 // stampa in pagina il nuovo valore dei likes
                const likeCounter = document.querySelectorAll(".js-likes-counter")[index];
                likeCounter.innerHTML = `${posts[index].likes}`;
                // salva il post in un array nuovo
                postLiked.push(posts[index].id);
                console.log(postLiked);
            }         
            console.log(posts[index].likes);

        }
    )
});


