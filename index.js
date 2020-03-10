document.addEventListener('DOMContentLoaded', function() {  
 
    function renderMovies(movieArray) {
        var movieHTML = movieArray.map(function(currentMovie) {
        
            return `<div class="Movie">
            <div class="card" style="width: 18rem;">
           
            <img class="card-img-top" src="${currentMovie.Poster} alt="image"> 
                <div class="card-body">
                    ${currentMovie.Title}
                    <p class="card-text">${currentMovie.Year}</p>
                    
                    <a href="#" button onclick="saveToWatchlist('${currentMovie.imdbID}')">Add</a>
                </div>
            </div>	
        </div>`
        //Successfully got my image to show on the page. Had left off a curly bracket on the template litteral.
        //Celebrating that success!
        //Took the double quotes off of template literal for imdbID
        //renderMovies(moviesData);
        })

        //saveToWatchlist(imdbID);
       

        //document.getElementById("movies-container")- Step 3, no.4. Trying to get my movie cards to show again.

        console.log(movieHTML) 
        return movieHTML;
    }
    //document.getElementsByClassName('movies-container')[0].addEventListener('click',function(event))

    
    var form = document.getElementById("search-form")
    form.addEventListener('submit',function(e){
        e.preventDefault(0);
        console.log(e);

        var srch = e.target.elements[0].value
        console.log(srch);

        var srchMov = moviesData.filter(function(e) {
            return srchMov;
        })
    //created a .filter for the search function
     var x = document.getElementById("movies-container")   
     x.innerHTML = renderMovies(moviesData);
    })
    
});

     