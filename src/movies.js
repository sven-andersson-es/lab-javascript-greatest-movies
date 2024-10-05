/* const movies = [
	{
		title: "The Shawshank Redemption",
		year: 1994,
		director: "Frank Darabont",
		duration: "2h 22min",
		genre: ["Crime", "Drama"],
		score: 9.3,
	},
	{
		title: "The Godfather",
		year: 1972,
		director: "Francis Ford Coppola",
		duration: "2h 55min",
		genre: ["Crime", "Drama"],
		score: 9.2,
	},
	{
		title: "The Godfather: Part II",
		year: 1974,
		director: "Francis Ford Coppola",
		duration: "3h 22min",
		genre: ["Crime", "Drama"],
		score: ,
	},
]; */

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
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
