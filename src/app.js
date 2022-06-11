/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  var ranwho = Math.floor(Math.random(who) * who.length);
  var ranact = Math.floor(Math.random(action) * action.length);
  var ranwhat = Math.floor(Math.random(what) * what.length);
  var ranwhen = Math.floor(Math.random(when) * when.length);

  var random = ranwho + " " + ranact + " " + ranwhat + " " + ranwhen;

  var frase = (document.querySelector("p").innerHTML = random);
};
