var axios = require("axios");
var cheerio = require("cheerio");

var scrape = function (cb) {
    axios("https://www.instructables.com/projects/").then(function(response) {
         
         var $ = cheerio.load(response.data);

         var projects = [];
         
         $("projects").each(function(i,element) {

              var result = {};
              result.title = $(element).find("ible-title").text().trim();
              result.summary = "https://www.instructables.com/" + $(element).find("a").attr("href");
              projects.push(result);
         });
         console.log(projects);
         cb(projects);
    });
};

module.exports =  scrape;