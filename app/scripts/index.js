var Like = require('./models/like');
var $ = require('jquery');

var currentLikes = new Like();

$('.button-div').click(function(){
  currentLikes.refresh();
})
