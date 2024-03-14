let userInput = prompt("Please enter a number:");

async function getMovies() {
    let response = await fetch(`https://mcuapi.herokuapp.com/api/v1/movies?page=1&limit=${userInput}&columns=title%2Crelease_date%2Cphase%2Ccover_url%2Ctrailer_url&order=chronology%2CDESC&filter=title%3D`);
    let data = await response.json(); // Parse the JSON response

    let movies = [];

    // Iterate over each movie object in the data
    data.data.forEach(movie => {
        // Check if the cover URL ends with ".jpg"
        if (movie.cover_url && movie.cover_url.endsWith(".jpg")) {
            // Extract title, release_date, and cover_url
            let movieData = {
                title: movie.title,
                release_date: movie.release_date,
                cover_url: movie.cover_url,
                trailer_url: movie.trailer_url
            };
            movies.push(movieData); // Push the movie data object to the movies array
        }
    });

    console.log(movies);
    return movies;
}


async function createMovieCards() {
    let movies = await getMovies(); // Fetch movies

    // Iterate over each movie to create a card
    movies.forEach(movie => {
        createMovieCard(movie.cover_url, movie.title, movie.release_date, movie.trailer_url);
    });
}

function createMovieCard(imageUrl, title, releaseDate, trailer_url) {
    // Create card container
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    // Create card element
    let card = document.createElement("div");
    card.classList.add("card", "flex");

    // Create image container
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img-cont");

    // Create image element
    let img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "Movie Poster";

    // Append image to image container
    imgContainer.appendChild(img);

    // Create card text container
    let cardText = document.createElement("div");
    cardText.classList.add("card-text");

    // Create title element
    let titleElement = document.createElement("h5");
    titleElement.textContent = title;

    // Create release date element
    let releaseDateElement = document.createElement("p");
    releaseDateElement.textContent = "Release Date: " + releaseDate;


        let trailerLink = document.createElement("a");
        trailerLink.href = trailer_url;
        trailerLink.textContent = "Watch Trailer";
        trailerLink.target = "_blank";
        cardText.appendChild(trailerLink);

    // Append title and release date to card text container
    cardText.appendChild(titleElement);
    cardText.appendChild(releaseDateElement);

    // Append image container and card text to card
    card.appendChild(imgContainer);
    card.appendChild(cardText);

    // Append card to card container
    cardContainer.appendChild(card);

    // Append card container to the body or any other parent element
    document.body.appendChild(cardContainer);
}

// Call the function to create movie cards
createMovieCards();