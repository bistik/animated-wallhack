var FeedParser = require('feedparser');
var request = require('request');
var fs = require('fs');

var feeds = [
  {
    name: "reddit-node",
     url: "https://reddit.com/r/node/.rss",
    desc: "all about nodejs"
  }
];

var node_feed = feeds[0];

var req = request(node_feed.url, function(error, response, body) {
  if (!error && response.statusCode === 200 ) {
    console.log("call write_feed_to_file");
    write_feed_to_file(node_feed.name, body);
  }
});

// TODO unit tests
//        - check if file exists?
//        - check if content is text?
//        - check if content is xml?
function write_feed_to_file(filename, content) {
  console.log("will attempt to write feed to a file... say your prayers...");
  var path = 'feeds/' + filename + '.xml'; // TODO surely must be a module that constructs file paths...
  fs.writeFile(path, content, function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("RSS feed: " + path + " was saved! More hard drive clutter, hooray!");
    }
  });
}

// TODO: implement, unit tests
function load_feed_file(filename) {
  //
}
//var feedparser = new FeedParser();
