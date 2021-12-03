const request = require('request');
const breed = process.argv[2];
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {
  if (error) {
    return console.error('Failed to request details ', error);
  }
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);
  const breedData = data[0];
  if (breedData)  {
    console.log(breedData.description);
  } else {
    console.log(`Failed to find breed ${breed}`);
  }
});
