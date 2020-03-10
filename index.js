document.addEventListener('DOMContentLoaded', function() {    
    function renderMovies(movieArray) {
        var movieHTML=movieArray.map(function(currentMovie){
            return `<div class="Movie">
            <div class="card" style="width: 18rem;">
           
            <img class="card-img-top" src="${currentMovie.Poster} alt="image"> 
                <div class="card-body">
                    ${currentMovie.Title}
                    <p class="card-text">${currentMovie.Year}</p>
                    
                    <a href="JavaScript:(0) onclick=button type=("${currentMovie.imdbID}")"<Add</a>
                </div>
            </div>	
        </div>`
        //Successfully got my image to show on the page. Had left off a curly bracket on the template litteral.
        //Celebrating that success!
        renderMovies(moviesData);
        })
        //console.log(movieHTML.join(''));

        //document.getElementById("movies-container")- Step 3, no.4. Trying to get my movie cards to show again.

        //var x = document.getElementById("movies-container")
        
        
        //return x.innerHTML = movieHTML.join('');
    }

    //renderMovies(moviesData);
    document.getElementById("search-form").addEventListener("submit",function(e){
        e.preventDefault(0);
     var x = document.getElementById("movies-container")   
     x.innerHTML = renderMovies(moviesData);
    })
    
});

     