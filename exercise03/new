/*
Created by a student
ISTE 422: Exercise 2: Improvised ETL
Date: 2/5/2016
Software used: Nodejs (No extra dependencies)
Why?: The reason I used nodejs is because we are dealing
with a json data format and nodejs is built to handle
that natively without any external plugins

Edited: 2024/02/07
Editor: Declan Naughton
ISTE 442: Exercise 3: Version Control
Software used: Nodejs
I've modified this file and patched it to meet new criteria desired by the client.
- Now records the email of people in the data file. Will filter out any records without
  an email address.
- Data filename is no longer hard coded. Instead, the information is input as
  a command line argument. 
*/
//Node JS dependencies for reading and writing files to the file system.
const fs = require('fs');
//Node JS dependencies for processing cmd line input.
const process = require('process');
//The first argument passed to the program. Should be the name of the file.
const arg = process.argv[2];

//console.log(arg);
//Read the file from the file system
const obj = JSON.parse(fs.readFileSync(arg,'utf8'));
//get the date from the first item.
const date = new Date(obj[0].timestamp);
//format the date to the YYYYMMDD.csv required for the submission.
const datef = date.getFullYear() + pad2(date.getMonth()+1) + pad2(date.getDate());
//to return string object
let csv = ""
//for loop to parse all items
for(const item of obj){
  //item is a single person
  //check if item has a creditcard and email then save the :name, :email, and 
  //:creditcard to the cvs object in the cvs format
  if(item.creditcard != null && item.email != null){
    csv += item.name + "," + item.email + "," + 
    item.creditcard + "," +
    "\n";
  }
}

//store the compiled cvs in a file formated YYYYMMDD.csv
fs.writeFile("./" + datef + ".csv", csv, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});

//formating function for manking numbebers 2 digits ex "2" -> "02"
function pad2(number) {
     return (number < 10 ? '0' : '') + number
}
