#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request(url, function (error, response, body) {
  if (!error) {
    const charresults = JSON.parse(body).results;

    // movies where Wedge Antilles is present
    const movieresult = charresults.reduce((count, movie) => {
      return movie.characters.find((character) => character.endsWith('/18/'))
        ? count + 1 // if found
        : count; // if not found
    }, 0); // initiliazing count to zero
    console.log(movieresult);
  }
});
