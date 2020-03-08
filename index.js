document.addEventListener('DOMContentLoaded', function() {    
    function renderMovies(movieArray) {
        var movieHTML=movieArray.map(function(currentMovie){
            return `<div class="Movie">
            <div class="card" style="width: 18rem;">
           
            <img class="card-img-top" src="${currentMovie.Poster} alt="image"> 
                <div class="card-body">
                    ${currentMovie.Title}
                    <p class="card-text">${currentMovie.Year}</p>
                    
                    <button type="submit">Add</button>
                </div>
            </div>	
        </div>`
        //Successfully got my image to show on the page. Had left off a curly bracket on the template litteral.
        //Celebrating that success!
        })
        console.log(movieHTML.join(''));

        document.getElementById("movies-container")

        var x = document.getElementById("movies-container");

        x.innerHTML = movieHTML.join('');
    }

    renderMovies(moviesData);
});

     