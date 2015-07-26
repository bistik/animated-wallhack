var FeedParser = require('feedparser');
var request = require('request');
var fs = require('fs');
var path = require('path');

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
    //write_feed_to_file(node_feed.name, body);
    read_feed_from_file(node_feed.name)
  }
});

// TODO unit tests
//        - check if file exists?
//        - check if content is text?
//        - check if content is xml?
function write_feed_to_file(feed, content) {
  console.log("will attempt to write feed to a file... say your prayers...");
  var fullpath = path.join(__dirname, 'feeds', feed + '.xml');
  fs.writeFile(path, content, function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("RSS feed: " + fullpath + " was saved! More hard drive clutter, hooray!");
    }
  });
}

// TODO:
// unit tests
// don't know how to unit test in node/electron
function read_feed_from_file(feed) {
  var feedparser = new FeedParser();
  var fullpath = path.join(__dirname, 'feeds', feed + '.xml');
  fs.createReadStream(fullpath)
    .on('error', function (error) {
      console.error(error);
    })
    .pipe(new FeedParser())
    .on('error', function (error) {
      console.error(error);
    })
    .on('meta', function (meta) {
      console.log('==== %s ====', meta.title);
    })
    .on('readable', function() {
      var stream = this;
      var item;
      while (item = stream.read()) {
        console.log('Got article: %s', item.title || item.description);
      }
    });
}
