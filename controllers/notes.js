var Note = require("./../models/note");
var makeDate = require("../public/assets/js/date");

module.exports = {
   
     get: function(data,cb) {
          Note.find({_headlineId: data._id},cb);
     },

     save: function(data,cb) {
          var newNote = {
               _headlineId: data._id,
               date: makeDate(),
               noteText: data.notText
          };
    
          Note.create(newNote,function(err,doc) {
               if(err) {
                    console.log(err);
               }
               else {
                    console.log(doc);
                    cb(doc);
               }
          }); 
     },
  
     delete: function(data,cb) {
          Note.remove({_id:data._id},cb)
     }
}