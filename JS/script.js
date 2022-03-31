"use strict";
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
alert(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastFilm = prompt('Один из последних просмотренных фильмов?', '');
let filmMark = prompt('На сколько оцените его?', '');
let lastFilmTwo = prompt('Один из последних просмотренных фильмов?', '');
let filmMarkTwo = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastFilm] = filmMark;
personalMovieDB.movies[lastFilmTwo] = filmMarkTwo;

console.log(personalMovieDB);
