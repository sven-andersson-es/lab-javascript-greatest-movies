// use this to import data.js and run in node
//const movies = require("./data.js");
// in data.js change first line from "const movies = [" to "const level1 = require('./level1');"

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
	const directors = moviesArray.map((movie) => {
		return movie.director;
	});
	return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
	const spielBergMovies = moviesArray.filter((movie) => {
		return (
			movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
		);
	});
	return spielBergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
	// Return 0 if Array is empty
	if (moviesArray.length === 0) {
		return 0;
	}
	// Use the method reduce() to sum all scores having a value, if not having value or not existing sum 0
	const totalScore = moviesArray.reduce((acc, cur) => {
		if (cur.score) {
			return acc + cur.score;
		} else {
			return acc + 0;
		}
	}, 0);

	// return the average score for all the movies in the moviesArray Array
	return +(totalScore / moviesArray.length).toFixed(2);
}
//console.log(scoresAverage(movies));
// Iteration 4: Drama movies - Get the average of Drama Movies

const movies4 = [
	{ genre: ["Drama"], score: 8 },
	{ genre: ["Romance"], score: 9 },
	{ genre: ["Drama"], score: 7 },
];

function dramaMoviesScore(moviesArray) {
	// Create new Array only including Drama Movies
	const dramaMovies = moviesArray.filter((movie) => {
		return movie.genre.includes("Drama");
	});
	// Return 0 if Array is empty
	if (dramaMovies.length === 0) {
		return 0;
	}
	// Use the method reduce() to sum all scores having a value
	const totalScore = dramaMovies.reduce((acc, cur) => {
		if (cur.score) {
			return acc + cur.score;
		} else {
			return acc + 0;
		}
	}, 0);

	// return the average score for all the movies in the dramaMovies Array
	return +(totalScore / dramaMovies.length).toFixed(2);

	// other possible rounding methods:
	// 1: Math.round(num * 100) / 100
	// 2: Math.round((num + Number.EPSILON) * 100) / 100
}
console.log(dramaMoviesScore(movies4));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const movies5 = [
	{ title: "abc", year: 2002 },
	{ title: "bac", year: 1982 },
	{ title: "aab", year: 1982 },
];

function orderByYear(moviesArray) {
	//create a copy of the moviesArray Array with the name orderedMovies
	const orderedMovies = moviesArray.map((movie) => {
		return movie;
	});
	//sort the orderedMovies Array first by year asc, if same year in alphabetical order based on title
	orderedMovies.sort((a, b) => {
		//nested sorting comparison that make a second comparison if the year is the same
		if (a.year < b.year) {
			return -1;
		} else if (a.year > b.year) {
			return 1;
		} else {
			// a.year === b.year
			if (a.title < b.title) {
				return -1;
			} else if (a.title > b.title) {
				return 1;
			} else {
				return 0;
			}
		}
	});
	return orderedMovies;
}
console.log(orderByYear(movies5));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
	// create a copy of the original moviesArray
	const orderedMovies = moviesArray.map((movie) => {
		return movie;
	});
	// sort the movies in alphabetical order using the "en" locale
	orderedMovies.sort((a, b) => {
		return a.title.localeCompare(b.title, "en", { sensitivity: "base" });
	});
	// declare a variable with an empty array to be used to push title values
	const firstTwentyMovies = [];
	// for the first 20 movies in the orderedMovies Array push the title in incoming order into a new array
	orderedMovies.forEach((movie, index) => {
		if (index < 20) {
			firstTwentyMovies.push(movie.title);
		}
	});
	return firstTwentyMovies;
}
// console.log(orderAlphabetically(movies.movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
	// create a copy of the original moviesArray
	const durationInMinutesArray = moviesArray.map((movie) => {
		//convert movie.duration hours to minutes
		/* const hoursInMinutes = Math.floor(Number(movie.duration[0]) * 60); */
		//extract the minutes from the movie.duration
		/* let minutes = 0;
		if (movie.duration.length === 7) {
			minutes = Number(movie.duration[3]);
		} else if (movie.duration.length === 8) {
			minutes = Number(movie.duration[3] + movie.duration[4]);
		} */
		//other solutions for extracting numbers from a string https://www.geeksforgeeks.org/extract-a-number-from-a-string-using-javascript/
		// using regex to extract numbers into separated strings seems to be more efficient and clear in this case
		const hoursAndMinutesArray = movie.duration.match(/\d+/g);
		const hoursInMinutes = Math.floor(Number(hoursAndMinutesArray[0]) * 60);
		let minutes = 0;
		if (hoursAndMinutesArray.length > 1) {
			minutes = Number(hoursAndMinutesArray[1]);
		}

		const durationInMinutes = hoursInMinutes + minutes;
		// this takes the original object in each iteration and keeps everything but duration as before and duration is changed to the new value
		return { ...movie, duration: durationInMinutes };

		// if you would have done like this "return movie.duration = 88" the array would have been replaced with objects with only duration property = 88
	});
	return durationInMinutesArray;
}
//console.log(turnHoursToMinutes(movies.movies));

// testdata to debug
const newMoviesArr = [
	{ year: 2000, score: 9 },
	{ year: 2000, score: 8 },
	{ year: 1978, score: 10 },
	{ year: 1978, score: 7 },
];

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    // return null if moviesArray is empty
    if (moviesArray.length === 0) {
        return null;
    }
    // create a copy of the incoming array
	const mappedArray = moviesArray.map((movie) => {
		return movie;
	});
    // declare a variable with an empty array to be usee in the next forEach loop
	const totalFilmsAndScorePerYear = [];
	mappedArray.forEach((movie) => {
        // find the index of the incoming movie year in the array that is building upp - totalFilmsAndScorePerYear
        let yearIndex = totalFilmsAndScorePerYear.findIndex((i) => {
           return i["year"] === movie.year
        } );

        // if incoming year not yet is included in totalFilmsAndScorePerYear, add the year with score and first count
		if (yearIndex < 0) {
			totalFilmsAndScorePerYear.push({
				year: movie.year,
				score: movie.score,
				totalMovies: 1,
			});
        // else if year already exists in the array replace the values (with splice) for that year accumulating the current value with the new incoming values    
		} else {
            
            const year = totalFilmsAndScorePerYear[yearIndex].year;
            let score = totalFilmsAndScorePerYear[yearIndex].score;
			if (totalFilmsAndScorePerYear[yearIndex].score > 0) {
                score = totalFilmsAndScorePerYear[yearIndex].score + movie.score;
            }
			const count = totalFilmsAndScorePerYear[yearIndex].totalMovies + 1;

            totalFilmsAndScorePerYear.splice(yearIndex, 1, {
				year: year,
				score: score,
				totalMovies: count,
			});

		}
	});
	//return totalFilmsAndScorePerYear;

    // modify the array with map() and calculate the average score per yer
    const averageScorePerYear = totalFilmsAndScorePerYear.map((year) => {
        const avgScore = year.score / year.totalMovies
        return {
            "year": year.year,
            "avgScore": avgScore
        }
    });

    //return averageScorePerYear;

    // sort the array with the highest average score first and when there is a tie between two years return the oldest year first
    averageScorePerYear.sort((a, b) => {
		//nested sorting comparison on avgScore that make a second comparison on year if the average score is the same
		if (a.avgScore < b.avgScore) {
			return 1;
		} else if (a.avgScore > b.avgScore) {
			return -1;
		} else {
			// a.avgScore === b.avgScore
			if (a.year < b.year) {
				return -1;
			} else if (a.year > b.year) {
				return 1;
			} else {
				return 0;
			}
		}
	});
	//return averageScorePerYear;
    const bestYear = averageScorePerYear[0].year;
    const bestAvgScore = averageScorePerYear[0].avgScore;

    // return the phrase
    return `The best year was ${bestYear} with an average score of ${bestAvgScore}`;
}
console.log(bestYearAvg(newMoviesArr));
