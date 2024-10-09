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
	const directors = moviesArray.map(function(movie) {
		return movie.director;
	});
	return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
	const spielBergMovies = moviesArray.filter(function(movie) {
		return (
			movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
		);
	});
	return spielBergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
	if (moviesArray.length === 0) {
		return 0;
	}

	const totalScore = moviesArray.reduce(function(acc, curr) {
		if (curr.score) {
			return acc + curr.score;
		} else {
			return acc + 0;
		}
	}, 0);
	const scoresAverage = totalScore / moviesArray.length;
	const scoresAverageTwoDecimals = +scoresAverage.toFixed(2);
	return scoresAverageTwoDecimals; //no encontramos la solucion
}
//console.log(scoresAverage(movies));
// Iteration 4: Drama movies - Get the average of Drama Movies
const movies4 = [
	{ genre: ["Drama"], score: 8 },
	{ genre: ["Romance"], score: 9 },
	{ genre: ["Drama"], score: 7 },
];

function dramaMoviesScore(moviesArray) {
	const dramaMovies = moviesArray.filter(function(movie) {
		return movie.genre.includes("Drama");
	});
	if (dramaMovies.length === 0) {
		return 0;
	}
	const totalScore = dramaMovies.reduce(function(acc, curr) {
		if (curr.score) {
			return acc + curr.score;
		} else {
			return acc + 0;
		}
	}, 0);

	const scoresAverage = totalScore / dramaMovies.length;
	const scoresAverageTwoDecimals = +scoresAverage.toFixed(2);
	return scoresAverageTwoDecimals; //no encontramos la solucion
}
console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
	
	const newArray = [...moviesArray];
	
	newArray.sort((a, b) => {

		if (a.year === b.year){
			return a.title.localeCompare(b.title);
		}
		return a.year - b.year;
	});
	return newArray;
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

	const sortedMovies = [...moviesArray].sort((a, b) => {

 	return a.title.localeCompare(b.title);
	});

const titles = sortedMovies.slice(0, 20).map(movie => movie.title);
return titles;
}




// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
	

	const moviesMinutes = moviesArray.map((movie) => {
	
	const HoursToMinuts = +movie.duration[0] * 60; 
	let minutes = 0;

	if (movie.duration.length === 7){
		minutes = +movie.duration[3];
	}
	
	else if (movie.duration.length === 8)
		{ minutes = +(movie.duration[3] + movie.duration[4]);
	}
	const duration = HoursToMinuts + minutes;
	movie.duration = duration;
	return movie;
})
return moviesMinutes;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
