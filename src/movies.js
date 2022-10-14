//const movies = require("./data.js");

//const movies = require("./data");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((ele) => ele.director);
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let count = 0;
  moviesArray.filter((ele) => {
    if (ele.director === "Steven Spielberg" && ele.genre.includes("Drama"))
      count++;
  });
  return count;
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;
  let scores = moviesArray.map((ele) => ele.score || 0);
  const average = scores.reduce((a, b) => a + b, 0) / scores.length;
  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaArray = moviesArray.filter((ele) => ele.genre.includes("Drama"));
  if (!dramaArray.length) return 0;
  let dramaScores = dramaArray.map((ele) => ele.score);
  const average = dramaScores.reduce((a, b) => a + b, 0) / dramaScores.length;
  return Number(average.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let copy = [...moviesArray];
  copy.sort((a, b) => {
    if (a.year === b.year) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
    }
    return a.year - b.year;
  });
  return copy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let titleArray = moviesArray.map((ele) => ele.title);
  let copy = [...titleArray];
  copy.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return a - b;
  });
  return copy.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
