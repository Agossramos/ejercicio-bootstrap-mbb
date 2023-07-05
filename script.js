
// fetch top gun meverick
fetch("https://www.omdbapi.com/?apikey=d667fc14&t=Top%20Gun:%20Maverick")
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("imgpeli1").src = data.Poster;
    });

// fetch Iron man
fetch("https://www.omdbapi.com/?apikey=d667fc14&t=Iron%20Man")
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("imgpeli2").src = data.Poster;
    });    

    // fetch the advengers
fetch("https://www.omdbapi.com/?apikey=d667fc14&t=The%20Avengers")
.then((response) => response.json())
.then((data) => {
    document.getElementById("imgpeli3").src = data.Poster;
});

// fetch la la land
fetch("https://www.omdbapi.com/?apikey=d667fc14&t=La%20La%20Land")
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("imgpeli4").src = data.Poster;
    });

