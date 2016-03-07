var Backbone = require('backbone');
var $ = require('jquery');

console.log('hi')

var Likes = Backbone.Model.extend({
  defaults: {
    'quantity': 0
  },
  refresh: function(){
    this.set('quantity', this.get('quantity') + 1);
    $('.button-div').empty();
    $('.button-div').append('<button type="button" class="actual-button"><p>' + this.get('quantity') +' Likes</p></button>')
  }
});

module.exports = Likes;
