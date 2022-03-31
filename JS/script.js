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

