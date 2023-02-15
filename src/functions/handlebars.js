const Handlebars = require("handlebars");

var source = document.getElementById("hand-details-template").innerHTML;
var template = Handlebars.compile(source);
var html = template({ hand: cards });
document.getElementById("card-placement").innerHTML = html;