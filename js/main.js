// https://quotesondesign.com/api-v4-0/ For more information regarding
// how to use the API and to see examples when I inevitably forget how it works.

// Function to grab the quote
function findQuote() {
  $.ajax( {
    url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    success: function(data) {
      var post = data.shift(); // The data is an array of posts. Grab the first one.
      $('#quote').html(post.content);
      $('#author').html(post.title);
    },
    cache: false
  });
}


$(document).ready(function(){

  // Grab a quote upon loading the page
  findQuote();

  // Grab a new quote whenever the button is clicked
  $('#new-quote').on('click', function(e) {
    e.preventDefault();
    findQuote();
  });
});
