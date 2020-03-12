//Yes. My code is messy and all over the place.
//Truth be told, I am very behind. 
//Working on learning & understanding executing javascript functions.

//search list is not rendering movies anymore. not sure what I did that is blocking that function.
document.addEventListener('DOMContentLoaded', function() {  
 
    function renderMovies(movieArray) {
        var movieHTML = movieArray.map(function(currentMovie) {
        
            return `<div class="Movie">
            <div class="card" style="width: 18rem;">
           
            <img class="card-img-top" src="${currentMovie.Poster} alt="image"> 
                <div class="card-body">
                    ${currentMovie.Title}
                    <p class="card-text">${currentMovie.Year}</p>
                    
                    <a href="JavaScript:void(0)"  onclick='saveToWatchlist('${currentMovie.imdbID}')'>Add To Watch List</a>
                </div>
            </div>	
        </div>`
        //Successfully got my image to show on the page. Had left off a curly bracket on the template litteral.
        //Celebrating that success!
        //Took the double quotes off of template literal for imdbID
        //renderMovies(moviesData);
        })

        
    
        //document.getElementById("movies-container")- Step 3, no.4. Trying to get my movie cards to show again.

        console.log(movieHTML) 
        return movieHTML;
    }
    //document.getElementsByClassName('movies-container')[0].addEventListener('click',function(event))
    //var savedtoWatchlist(imdbID); commented out b/c negated my movie search when I put a word in search bar
    

    //Task is to figure out why & how to implement this code in Part 2, steps 1-3.
  function savedtoWatchlist(imdbID) {  
    var movie = moviesData.find(function(currentMovie) {
        return currentMovie.imdbID == imdbID;
    });
    

    var watchlistJSON = localStorage.getItem('watchlist');
    var watchlist = JSON.parse(watchlistJSON);
        if (watchlist == null) {
            watchlist = [];

        }
        watchlist.push(movie)
        watchlistJSON = JSON.stringify(watchlist);
        localStorage.setItem('watchlist', watchlistJSON);
        
    }
    //Yes. It's messy. I'm trying a little bit of EVERYTHING.
    document.getElementById('search-form').addEventListener('submit'), (e) => {
        e.preventDefault();

        var srch = document.getElementById('search-bar').value;
    }


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
    
}) 
var saveToWatchlist; //tried defining this inside the document ready block but it kept screwing with the site.

 //where to attach the click listener to "movies-container" div 
 //give "add movie" button tag an onclick attribute that triggers a function called savedtoWatchlist()
 //inject the imdb id of the movie as the paramter for saveToWatchlist() using ${}
 //define function saveToWatchlist(imdbID) in "document ready" block   