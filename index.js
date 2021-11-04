const { fetchBreedDescription } = require('./breedFetcher');   //requiring the fetchBreedDescription function

const breedName = process.argv[2];


fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});


////// explanation from mentor
//// all of the below is the actual callback function

// const callback = function (error, desc) => {
//   if (error) {
//     console.log('Error fetch details:', error);
//   } else {
//     console.log(desc);
//   }

