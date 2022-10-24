const collection = [
    {
        name: "Peaky Blinders",
        seasons: 6,
        creation: "Steven Knight",
        releaseYear: 2013,
        picture: "./images/peaky-blinders.jpg",
        genre: [
            "Historical Fiction",
            "Crime Drama"
        ],
        cast: [
            "Cillian Murphy",
            "Paul Anderson",
            "Helen McCrory"
        ]
    },
    {
        name: "Vikings",
        seasons: 6,
        creation: "Michael Hirst",
        releaseYear: 2013,
        picture: "./images/vikings.jpg",
        genre: [
            "Historical Drama",
            "Action",
            "War"
        ],
        cast: [
            "Travis Fimmel",
            "Katheryn Winnick",
            "Gustaf Skarsgård"
        ]
    },
    {
        name: "Breaking Bad",
        seasons: 5,
        creation: "Vince Gilligan",
        releaseYear: 2008,
        picture: "./images/breaking-bad.jpg",
        genre: [
            "Crime Drama",
            "Thriller",
            "Black Comedy"
        ],
        cast: [
            "Bryan Cranston",
            "Aaron Paul",
            "Betsy Brandt"
        ]
    },
    {
        name: "Suits",
        seasons: 9,
        creation: "Aaron Korsh",
        releaseYear: 2011,
        picture: "./images/suits.jpg",
        genre: [
            "Legal Drama"
        ],
        cast: [
            "Gabriel Macht",
            "Patrick J. Adams",
            "Meghan Markle"
        ]
    },
    {
        name: "Good Doctor",
        seasons: 6,
        creation: "David Shore (based on Park Jae-bum)",
        releaseYear: 2017,
        picture: "./images/good-doctor.jpg",
        genre: [
            "Medical Drama"
        ],
        cast: [
            "Freddie Highmore",
            "Hill Harper",
            "Antonia Thomas"
        ]
    },
    {
        name: "La Casa de Papel",
        seasons: 5,
        creation: "Álex Pina",
        releaseYear: 2017,
        picture: "./images/casa-de-papel.jpg",
        genre: [
            "Heist",
            "Crime Drama"
        ],
        cast: [
            "Álvaro Morte",
            "Úrsula Corberó",
            "Itziar Ituño"
        ]
    },
    {
        name: "The Watcher",
        seasons: 1,
        creation: "Ryan Murphy and Ian Brennan",
        releaseYear: 2022,
        picture: "./images/the-watcher.jpg",
        genre: [
            "Mystery Thriller",
            "Horror"
        ],
        cast: [
            "Bobby Cannavale",
            "Naomi Watts"
        ]
    },
    {
        name: "What/If",
        seasons: 1,
        creation: "Mike Kelley",
        releaseYear: 2019,
        picture: "./images/what-if.jpg",
        genre: [
            "Thriller"
        ],
        cast: [
            "Renée Zellweger",
            "Blake Jenner",
            "Jane Levy"
        ]
    }    
];

/*
<div class="card">
    <img src="" alt="">
    <div class="genres">
        <p>genre A</p>
        <p>genre B</p>
    </div>
    <h2 class="title">Title</h2>
    <p class="creator">Creator</p>
    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur facere omnis, recusandae maxime enim culpa reprehenderit quo nisi, ipsum harum quae libero ratione porro cumque optio officiis esse rerum nulla?</p>
    <div href="" class="links">
        <i class="fa-solid fa-play"></i>
        <i class="fa-solid fa-thumbs-up"></i>
        <i class="fa-solid fa-plus"></i>
        <i class="fa-solid fa-share-nodes"></i>
    </div>
</div>
*/

for(const serie of collection) {
    const card = document.createElement("div");
    card.classList.add("card");
    document.querySelector("main").append(card);

    const img = document.createElement("img");
    img.src = serie.picture;
    img.alt = `Scene of ${serie.name}`;
    card.append(img);

    const genresDiv = document.createElement("div");
    genresDiv.classList.add("genres");
    card.append(genresDiv);
    for(const genre of serie.genre) {
        const p = document.createElement("p");
        p.textContent = genre;
        genresDiv.append(p);
        if(genre.includes("Historical")) {
            p.style.backgroundColor = "gray";
        }
        if(genre.includes("Drama")) {
            p.style.backgroundColor = "teal";
        }
        if(genre.includes("Action")) {
            p.style.backgroundColor = "chocolate";
        }
        if(genre.includes("War")) {
            p.style.backgroundColor = "red";
        }
        if(genre.includes("Thriller")) {
            p.style.backgroundColor = "indigo";
        }
        if(genre.includes("Comedy")) {
            p.style.backgroundColor = "deepskyblue";
        }
        if(genre.includes("Heist")) {
            p.style.backgroundColor = "lightcoral";
        }
        if(genre.includes("Horror")) {
            p.style.backgroundColor = "purple";
        }
    }

    const title = document.createElement("h2");
    title.classList.add("title");
    title.innerText = serie.name;
    card.append(title);

    const creator = document.createElement("p");
    creator.classList.add("creator");
    creator.innerText = `${serie.creation} - ${serie.releaseYear}`;
    card.append(creator);

    const description = document.createElement("p");
    description.classList.add("description");
    description.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur facere omnis, recusandae maxime enim culpa reprehenderit quo nisi, ipsum harum quae libero ratione porro cumque optio officiis esse rerum nulla?";
    card.append(description);

    const links = document.createElement("div");
    links.classList.add("links");
    card.append(links);
    const play = document.createElement("i");
    play.classList.add("fa-solid", "fa-play");
    const thumbsUp = document.createElement("i");
    thumbsUp.classList.add("fa-solid", "fa-thumbs-up");
    const plus = document.createElement("i");
    plus.classList.add("fa-solid", "fa-plus");
    const share = document.createElement("i");
    share.classList.add("fa-solid", "fa-share-nodes");
    links.append(play, thumbsUp, plus, share);
}
