// This is where it all goes :)

var root = 'https://jsonplaceholder.typicode.com';

$( document ).ready(function() {
  $.ajax({
    url: root + '/posts/1',
    method: 'GET'
  }).then(function(data) {
    console.log(data);
  });
});
