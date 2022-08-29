//ok
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
function getAllDirectors(moviesArray) {
    // map function returns an "new" array of ? . . .
    const directors = moviesArray.map((oneMovie) => { // oneMovie is one element of the moviesArray.
        return oneMovie.director // array of ? .. what you return here. So, the resulting array, in this example, would be an array of strings (oneMovie.director is a string)
    })
    return directors // directors is a string of arrays
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const movies = moviesArray.filter((oneMovie) => {
        return oneMovie.director === 'Steven Spielberg' && oneMovie.genre.indexOf('Drama') !== -1
    })
    return movies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0) { 
        return 0
    }
    const accumulatedScoreValues = moviesArray.reduce((accumulatedScore, oneMovie) => {
        if(oneMovie.score === '') { // if the score is a empty string
            return 0 + accumulatedScore // add nothing to the accumulated score
        } else if(oneMovie.score === undefined) { // if the score is undefined
            return 0 + accumulatedScore // add nothing to the accumulated score
        }
        
        return accumulatedScore + oneMovie.score ; // every time you return a new value (here) you are updating the score
    }, 0)
    const averageScore = accumulatedScoreValues / moviesArray.length 
    return Number.parseFloat(averageScore.toFixed(2)) // it was a number, but toFixed changed it into a string, so we have to change it back to a number
}

// Optional Function
// const filterMovie = ({ moviesArray, genre, director, year }) => {
//     const filteredMovies = moviesArray.filter(oneMovie => {
//         if (director && genre) return oneMovie.genre.indexOf(genre) !== -1  && oneMovie.director === director
//         else if (genre && !director) return oneMovie.genre.indexOf(genre) !== -1
//     })
//     return filteredMovies
// }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(oneMovie => oneMovie.genre.indexOf('Drama') !== -1)
    return scoresAverage(dramaMovies) //reuse a function
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const yearOrdered = [...moviesArray];
    yearOrdered.sort((movieA, movieB) => {
        if (movieA.year > movieB.year) {
            return 1
        } else if (movieA.year < movieB.year) {
            return -1
        } else if (movieA.year === movieB.year) { 
            return movieA.title.localeCompare(movieB.title)
        }
        return 0 // do nothing to the order - leave the order as is
    })
    return yearOrdered
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let abc = [...moviesArray];
    abc.sort((movieA, movieB) =>{
        return movieA.title.localeCompare(movieB.title)
    })
    abc = abc.slice(0,20).map((oneMovie) => {
        return oneMovie.title
    }) //first 20 of array
    return abc
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
