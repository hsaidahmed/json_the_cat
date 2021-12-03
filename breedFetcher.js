const request = require('request');
// const breedName = process.argv[2];
const fetchBreedDescription = function(breedName, callback) {


  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    if (error) {
      return callback(error,null);
    }
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    const data = JSON.parse(body);
    // console.log(data);
    // console.log(typeof data);
    const breedData = data[0];
    if (breedData)  {
return callback(null, breedData.description) 
   } else {
return callback('Not found',null)    }
  });
};

module.exports = {fetchBreedDescription};