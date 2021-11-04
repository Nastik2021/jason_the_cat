const request = require('request'); //installed -request- library

const input = process.argv.slice(2);  //this is what the user will enter via command line

const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + input;

const fetchBreedDescription = function(breedName, callback) {
  request(url, (error, response, body) => {

    if (error) {
      callback('error', null);
    }

    const data = JSON.parse(body);
    // console.log(data);
    // console.log(typeof data);
    const breedName = data[0];

    if (breedName) {
      callback(null, breedName.description);
    } else {
      callback('error, null');
    }
  });
};




module.exports = { fetchBreedDescription };