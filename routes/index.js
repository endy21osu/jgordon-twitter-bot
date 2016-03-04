var express = require('express');
var router = express.Router();
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 's52tlvVgPZEzq8bqzp8s8spGi',
  consumer_secret: 'K4NAfp4mPDxLXgSfkx5rS8b09v18TGYfwpIJnUz8GWbeKNavYQ',
  access_token_key: '705034259002560512-DuqafxLOuxzT0NPz3dcgNEd3rYJCX2x',
  access_token_secret: '853kBPUd21MbWpx8W7CTaeUvueBalvIuzqRH85LV4GIKn'
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/twitter', function(req, res, next) {
  var params = {screen_name: 'nodejs'};
  var returnDate = {title: 'Twitter'}

  client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {
      returnDate.tweetText = tweets[0].text;
      console.log(tweets[0]);
    }
  });

  res.render('twitter', returnDate);
});



module.exports = router;
